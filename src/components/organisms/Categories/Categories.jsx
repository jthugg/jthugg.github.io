import {
  useEffect,
  useState
} from "react"
import { useRecoilValue } from "recoil"
import { languageSelector } from "../../../globalStates/selectors"
import languageData from "../../../language_data.json"
import settings from "../../../settings.json"
import CategorySet from "./CategorySet/CategorySet"
import styles from "./Categories.module.css"

export default function Categories() {

  const language = useRecoilValue(languageSelector)
  const [categories, setCategories] = useState(null)
  const [subCategories, setSubCategories] = useState(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    requestCategoryData()
      .then((response) => response.json())
      .then((result) => {
        const main = result.filter(category => category.parent === null)
        const sub = main.map((item) => {
          return result.filter(category => category.parent !== null && category.parent.id === item.id)
        })
        setCategories(() => main)
        setSubCategories(() => sub)
      })
  }, [])

  useEffect(() => {
    if (categories !== null && subCategories !== null) {
      setLoaded(true)
    }
  }, [categories, subCategories])
  
  function requestCategoryData() {
    return fetch(
      `${settings.server.base_url}${settings.server.categories.get}`,
      {method: "GET"}
    )
  }

  return (
    <div className={styles.Categories}>
      <small className={styles.Header}>
        {languageData[language].categories}
      </small>
      {
        loaded &&
        categories.map((item, index) => {
          return (
            <CategorySet
              key={index}
              category={item}
              subCategories={subCategories[index]}
            />
          )
        })
      }
    </div>
  )
}
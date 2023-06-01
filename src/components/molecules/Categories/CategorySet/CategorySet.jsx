import {
  useEffect,
  useState
} from "react"
import { useLocation } from "react-router-dom"
import { useRecoilValue } from "recoil"
import { currentCategorySelector } from "../../../../globalStates/selectors"
import MainCategory from "./MainCategory/MainCategory"
import SubCategories from "./SubCategories/SubCategories"
import styles from "./CategorySet.module.css"

export default function CategorySet(props) {

  const hasSubCategory = props.subCategories.length > 0
  const location = useLocation()
  const currentCategory = useRecoilValue(currentCategorySelector)
  const [isExpanded, setIsExpanded] = useState(false)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    function findHeight() {
      if (isExpanded) {
        return 30 * props.subCategories.length
      }
      return 0
    }

    setHeight(findHeight())
  }, [isExpanded, props.subCategories.length])

  useEffect(() => {
    if (currentCategory !== props.category.id) {
      setIsExpanded(false)
      return
    }
    setIsExpanded(true)
  }, [location, currentCategory, props.category.id])

  return (
    <div className={styles.CategorySet}>
      <MainCategory
        category={props.category}
        hasSubCategory={hasSubCategory}
        isExpanded={isExpanded}
        toggleExpand={() => setIsExpanded(!isExpanded)}
      />
      {
        hasSubCategory &&
        <SubCategories
          subCategories={props.subCategories}
          height={height}
        />
      }
    </div>
  )
}
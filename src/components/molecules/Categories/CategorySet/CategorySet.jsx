import { useEffect, useState } from "react"
import styles from "./CategorySet.module.css"
import MainCategory from "./MainCategory/MainCategory"
import SubCategories from "./SubCategories/SubCategories"
import { useLocation } from "react-router-dom"
import { useRecoilValue } from "recoil"
import { currentCategorySelector } from "../../../../globalStates/selectors"

export default function CategorySet(props) {

  const location = useLocation()
  const currentCategory = useRecoilValue(currentCategorySelector)
  const hasSubCategory = props.subCategories.length > 0
  const [isExpanded, setIsExpanded] = useState(false)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    setHeight(findHeight())
  }, [isExpanded])

  useEffect(() => {
    if (currentCategory !== props.category.id) {
      setIsExpanded(false)
      return
    }
    setIsExpanded(true)
  }, [location])

  function findHeight() {
    if (isExpanded) {
      return 30 * props.subCategories.length
    }
    return 0
  }

  return (
    <div className={styles.CategorySet}>
      <MainCategory
        category={props.category}
        hasSubCategory={hasSubCategory}
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
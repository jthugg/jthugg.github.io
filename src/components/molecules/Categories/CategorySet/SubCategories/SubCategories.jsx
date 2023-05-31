import { Link } from "react-router-dom"
import styles from "./SubCategory.module.css"
import { useSetRecoilState } from "recoil"
import { currentCategorySelector } from "../../../../../globalStates/selectors"

export default function SubCategory(props) {

  const setCurrentCategroy = useSetRecoilState(currentCategorySelector)

  function onLinkclink() {
    setCurrentCategroy(props.subCategories[0].parent.id)
  }

  return (
    <div
      className={styles.SubCategorySet}
      style={{
        height: `${props.height}px`
      }}
    >
      {
        props.subCategories.map((item, index) => {
          return (
            <Link
              key={index}
              to={item.link}
              className={styles.SubCategory}
              onClick={() => onLinkclink()}
            >
              {item.name}
            </Link>
          )
        })
      }
    </div>
  )
}
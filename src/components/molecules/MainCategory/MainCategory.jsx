import { Link } from "react-router-dom"
import { useSetRecoilState } from "recoil"
import { currentCategorySelector } from "../../../globalStates/selectors"
import Arrow from "../../atoms/Arrow/Arrow"
import styles from "./MainCategory.module.css"

export default function MainCategory(props) {

  const setCurrentCategory = useSetRecoilState(currentCategorySelector)

  function onLinkClick() {
    props.toggleExpand()
    setCurrentCategory(props.category.id)
  }

  function onArrowClick(e) {
    e.preventDefault()
    props.toggleExpand()
  }

  return (
    <div className={styles.MainCategory}>
      <Link
        to={`/category${props.category.link}`}
        className={styles.Link}
        onClick={() => onLinkClick()}
      >
        {props.category.name}
      </Link>
      {
        props.hasSubCategory &&
          <Arrow
            stroke="#888"
            className={styles.ArrowBox}
            transform={props.isExpanded ? "rotate(-180)" : "rotate(0)"}
            onClick={(e) => onArrowClick(e)}
          />
      }
    </div>
  )
}
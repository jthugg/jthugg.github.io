import {
  Link,
  useNavigate
} from "react-router-dom";
import { useRecoilValue } from "recoil";
import {
  ownerDataSelector,
  screenWidthSelector
} from "../../../globalStates/selectors";
import HomeLinkIcon from "../../atoms/HomeLinkIcon/HomeLinkIcon";
import NewTabIcon from "../../atoms/NewTabIcon/NewTabIcon";
import styles from "./ProfileAvatar.module.css"

export default function ProfileAvatar(props) {

  const navigate = useNavigate()
  const ownerData = useRecoilValue(ownerDataSelector)
  const screenWidth = useRecoilValue(screenWidthSelector)

  function onAvatarClick() {
    if (checkScreenWidth()) {
      navigate("/")
    }
  }

  function checkScreenWidth() {
    return screenWidth < 1200
  }

  return (
    <div
      className={styles.Avatar}
      onClick={() => onAvatarClick()}
      {...props}
    >
      <div className={styles.Cover}>
        <Link
          to="/"
          className={styles.Link}
        >
          <HomeLinkIcon width={14} height={14} fill="#fff" />
          Main
        </Link>
        <Link
          to={ownerData.html_url}
          target="_blank"
          className={styles.Link}
        >
          <NewTabIcon width={14} height={14} fill="#fff" />
          GitHub
        </Link>
      </div>
    </div>
  )
}

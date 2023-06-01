import { Link } from "react-router-dom"
import { useRecoilValue } from "recoil"
import {
  isLoginSelector,
  isOwnerSelector,
  ownerDataSelector,
  screenWidthSelector
} from "../../../globalStates/selectors"
import ProfileAvatar from "../../molecules/ProfileAvatar/ProfileAvatar"
import LoginButton from "../../atoms/LoginButton/LoginButton"
import Categories from "../../molecules/Categories/Categories"
import SettingsIcon from "../../atoms/SettingsIcon/SettingsIcon"
import styles from "./Header.module.css"

export default function Header() {

  const ownerData = useRecoilValue(ownerDataSelector)
  const isLogin = useRecoilValue(isLoginSelector)
  const screenWidth = useRecoilValue(screenWidthSelector)
  const isOwner = useRecoilValue(isOwnerSelector)

  return (
    <header className={styles.Header}>
      <div className={styles.Profile}>
        <ProfileAvatar
          style={
            ownerData.avatar_url &&
            {backgroundImage: `url(${ownerData.avatar_url})`}
          }
        />
        <div className={styles.Description}>
          <h1 className={styles.OwnerName}>
            {ownerData.name || ownerData.login || "user not found"}
          </h1>
          <p className={styles.Bio}>
            {ownerData.bio}
          </p>
        </div>
      </div>
      {
        screenWidth < 1200 ||
        <Categories />
      }
      {/* {
        screenWidth < 1200 &&
        <div className={styles.Navigator}>asdf</div>
      } */}
      {
        !isLogin &&
        <LoginButton />
      }
      {
        isOwner &&
        <Link
          to={"/settings"}
          className={styles.Settings}
        >
          <SettingsIcon
            width={24}
            height={24}
          />
        </Link>
      }
    </header>
  )
}

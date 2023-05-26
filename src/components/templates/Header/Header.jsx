import { useRecoilValue } from "recoil"
import { isLoginSelector, ownerDataSelector } from "../../../globalStates/selectors"
import ProfileAvatar from "../../atoms/ProfileAvatar/ProfileAvatar"
import styles from "./Header.module.css"
import LoginButton from "../../atoms/LoginButton/LoginButton"

export default function Header() {

  const ownerData = useRecoilValue(ownerDataSelector)
  const isLogin = useRecoilValue(isLoginSelector)

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
      <div className={styles.Categories}></div>
      {
        isLogin ||
        <LoginButton />
      }
    </header>
  )
}

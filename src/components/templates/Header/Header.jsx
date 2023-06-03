import { useRecoilValue } from "recoil"
import { ownerDataSelector } from "../../../globalStates/selectors"
import ProfileAvatar from "../../molecules/ProfileAvatar/ProfileAvatar"
import Categories from "../../organisms/Categories/Categories"
import styles from "./Header.module.css"

export default function Header() {

  const ownerData = useRecoilValue(ownerDataSelector)

  return (
    <header className={styles.Header}>
      <div className={styles.Profile}>
        <ProfileAvatar
          style={
            ownerData.avatar_url &&
            {backgroundImage: `url(${ownerData.avatar_url})`}
          }
        />
      </div>
      <div className={styles.Description}>
        <h1 className={styles.OwnerName}>
          {ownerData.name || ownerData.login || "user not found"}
        </h1>
        <p className={styles.Bio}>
          {ownerData.bio}
        </p>
      </div>
      <Categories />
    </header>
  )
}

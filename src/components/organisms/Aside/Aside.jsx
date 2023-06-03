import LoginButton from "../../atoms/LoginButton/LoginButton"
import SerachIcon from "../../atoms/SearchIcon/SearchIcon"
import SettingsIcon from "../../atoms/SettingsIcon/SettingsIcon"
import styles from "./Aside.module.css"

export default function Aside(props) {
  return (
    <aside className={styles.Aside}>
      <div className={`${styles.Search} ${styles.Items}`}>
        <SerachIcon width={20} height={20} fill="#888" />
      </div>
      <div className={`${styles.Settings} ${styles.Items}`}>
        <SettingsIcon width={20} height={20} fill="#888" />
      </div>
      <LoginButton />
    </aside>
  )
}
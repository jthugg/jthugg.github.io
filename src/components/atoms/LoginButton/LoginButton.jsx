import { useRecoilValue } from "recoil"
import { languageSelector } from "../../../globalStates/selectors"
import languageData from "../../../language_data.json"
import styles from "./LoginButton.module.css"

export default function LoginButton(props) {

  const language = useRecoilValue(languageSelector) || "en"

  return (
    <button
      className={styles.LoginButton}
      {...props}
    >
      {languageData[language].login_join}
    </button>
  )
}

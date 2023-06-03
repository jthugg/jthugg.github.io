import { useRecoilValue } from "recoil"
import styles from "./NavigationBar.module.css"
import { currentScrollYSelector, ownerDataSelector, screenWidthSelector } from "../../../globalStates/selectors"
import { useEffect, useState } from "react"
import GitHubIcon from "../../atoms/GitHubIcon/GitHubIcon"
import CategoryIcon from "../../atoms/CategoryIcon/CategoryIcon"
import ProfileAvatar from "../../molecules/ProfileAvatar/ProfileAvatar"
import SettingsIcon from "../../atoms/SettingsIcon/SettingsIcon"
import SerachIcon from "../../atoms/SearchIcon/SearchIcon"
import LoginButton from "../../atoms/LoginButton/LoginButton"

export default function NavigationBar() {

  const [navigationBarLocation, setNavigationBarLocation] = useState(10)
  const [beforeScrollY, setBeforeScrollY] = useState(0)
  const currentScrollY = useRecoilValue(currentScrollYSelector)
  const ownerData = useRecoilValue(ownerDataSelector)
  const screenWidth = useRecoilValue(screenWidthSelector)
  
  useEffect(() => {
    
    function moveNavBar() {
      if (beforeScrollY >= currentScrollY) {
        setNavigationBarLocation(10)
        return
      }
      setNavigationBarLocation(-100)
    }
    
    moveNavBar()
    setBeforeScrollY(() => currentScrollY)
    // eslint-disable-next-line
  }, [currentScrollY])

  return (
    <nav className={styles.NavigationBar} style={{top: `${navigationBarLocation}px`}}>
      <div className={`${styles.Left} ${styles.Cols}`}>
        {
          screenWidth < 1200 &&
          <ProfileAvatar 
            style={
              ownerData.avatar_url ?
              {
                backgroundImage: `url(${ownerData.avatar_url})`,
                width: "40px",
                height: "40px",
                marginRight: "1vw"
              }
              :
              {
                width: "40px",
                height: "40px",
                marginRight: "1vw"
              }
            }
          />
        }
        <GitHubIcon width={30} height={30} fill="#888" />
        <CategoryIcon width={24} height={24} fill="#888" />
      </div>
      <div className={`${styles.Right} ${styles.Cols}`}>
        <SerachIcon width={24} height={24} fill="#888" />
        <SettingsIcon width={24} height={24} fill="#888" />
        <LoginButton />
      </div>
    </nav>
  )
}
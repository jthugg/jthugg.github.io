import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom"
import { useRecoilValue, useSetRecoilState } from "recoil";
import { currentScrollYSelector, ownerDataSelector, screenWidthSelector } from "./globalStates/selectors";
import settings from "./settings.json"
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Header from "./components/templates/Header/Header";
import Body from "./components/templates/Body/Body";
import Footer from "./components/templates/Footer/Footer";
import NavigationBar from "./components/organisms/NavigationBar/NavigationBar";

export default function App() {

  const ownerData = useRecoilValue(ownerDataSelector)
  const setOwnerData = useSetRecoilState(ownerDataSelector)
  const screenWidth = useRecoilValue(screenWidthSelector)
  const setScreenWidth = useSetRecoilState(screenWidthSelector)
  const setCurrentScrollY = useSetRecoilState(currentScrollYSelector)
  const [loadingOwnerData, setLoadingOwnerData] = useState(true)

  useEffect(() => {
    window.addEventListener("resize", () => setScreenWidth())
    window.addEventListener("scroll", () => setCurrentScrollY(window.scrollY))
    return () => {
      window.removeEventListener("resize", () => setScreenWidth())
      window.removeEventListener("scroll", () => setCurrentScrollY(window.scrollY))
    }
  }, [setScreenWidth, setCurrentScrollY])

  useEffect(() => {
    fetch(`https://api.github.com/users/${settings.owner}`)
    .then((response) => response.json())
    .then((result) => setOwnerData(result))
    .then(() => setLoadingOwnerData(false))
  }, [setOwnerData])

  useEffect(() => {
    if (!loadingOwnerData) {
      document.querySelector("link[rel='icon']").href = ownerData.avatar_url
      document.title = settings.title
    }
  }, [loadingOwnerData, ownerData])

  return (
    loadingOwnerData ||
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {
        screenWidth >= 1200 &&
        <Header />
      }
      <Body>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Body>
    </BrowserRouter>
  )
}

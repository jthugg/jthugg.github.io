import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom"
import { useRecoilValue, useSetRecoilState } from "recoil";
import { ownerDataSelector } from "./globalStates/selectors";
import settings from "./settings.json"
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Header from "./components/templates/Header/Header";
import Body from "./components/templates/Body/Body";
import Footer from "./components/templates/Footer/Footer";

export default function App() {

  const ownerData = useRecoilValue(ownerDataSelector)
  const setOwnerData = useSetRecoilState(ownerDataSelector)
  const [loadingOwnerData, setLoadingOwnerData] = useState(true)

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
      <Header />
      <Body>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Body>
      <Footer />
    </BrowserRouter>
  )
}

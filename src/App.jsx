import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom"
import {
  RecoilRoot
} from "recoil"
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Header from "./components/templates/Header/Header";
import Body from "./components/templates/Body/Body";
import Footer from "./components/templates/Footer/Footer";

export default function App() {

  return (
    <RecoilRoot>
      <BrowserRouter>
        <Header />
        <Body>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Body>
        <Footer />
      </BrowserRouter>
    </RecoilRoot>
  )
}

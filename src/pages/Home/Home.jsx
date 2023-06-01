import { useEffect } from "react"
import { useSetRecoilState } from "recoil"
import { currentCategorySelector } from "../../globalStates/selectors"

export default function Home() {

  const setCurrentCategory = useSetRecoilState(currentCategorySelector)
  
  useEffect(() => {
    setCurrentCategory(null)
  }, [setCurrentCategory])

  return (
    <h1>
      Home
    </h1>
  )
}
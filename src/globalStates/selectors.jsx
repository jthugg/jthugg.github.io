import { selector } from "recoil";
import { isLogin, screenHeight, screenWidth } from "./store";

export const isLoginSelector = selector({
  key: "isLoginSelector",
  get: ({get}) => {
    return get(isLogin)
  },
  set: ({set}) => {
    set(isLogin, localStorage.getItem("user") !== null)
  }
})

export const screenWidthSelector = selector({
  key: "screenWidthSelector",
  get: ({get}) => {
    return get(screenWidth)
  },
  set: ({set}) => {
    set(screenWidth, window.innerWidth)
  }
})

export const screenHeightSelector = selector({
  key: "screenHeightSelector",
  get: ({get}) => {
    return get(screenHeight)
  },
  set: ({set}) => {
    set(screenHeight, window.innerHeight)
  }
})

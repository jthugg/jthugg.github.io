import { selector } from "recoil";
import { isLogin, isOwner, ownerData, screenHeight, screenWidth, language, currentCategory } from "./store";

export const isLoginSelector = selector({
  key: "isLoginSelector",
  get: ({get}) => {
    return get(isLogin)
    // return true
  },
  set: ({set}) => {
    set(isLogin, localStorage.getItem("user") !== null)
  }
})

export const isOwnerSelector = selector({
  // TODO: feature -> request check that user is owner or not
  key: "isOwnerSelector",
  get: ({get}) => {
    return get(isOwner)
    // return true
  },
  set: ({set}) => {
    set(isOwner, () => {})
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

export const ownerDataSelector = selector({
  key: "ownerDataSelector",
  get: ({get}) => {
    return get(ownerData)
  },
  set: ({set}, newValue) => {
    set(ownerData, newValue)
  }
})

export const languageSelector = selector({
  key: "languageSelector",
  get: ({get}) => {
    return get(language)
  },
  set: ({set}) => {
    set(language, navigator.language || "en")
  }
})

export const currentCategorySelector = selector({
  key: "currentCategorySelector",
  get: ({get}) => {
    return get(currentCategory)
  },
  set: ({set}, newValue) => {
    set(currentCategory, newValue)
  }
})

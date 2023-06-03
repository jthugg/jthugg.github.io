import { atom } from "recoil";
import settings from "../settings.json"

export const isLogin = atom({
  key: "isLogin",
  default: localStorage.getItem("user") !== null
})

export const isOwner = atom({ // this state brings the root authorities
  key: "isOwner",
  default: localStorage.getItem("user") &&
    localStorage.getItem("user").username === settings.owner
})

export const screenWidth = atom({
  key: "screenWidth",
  default: window.innerWidth
})

export const screenHeight = atom({
  key: "screenHeight",
  default: window.innerHeight
})

export const currentScrollY = atom({
  key: "currentScrollY",
  default: window.scrollY
})

export const ownerData = atom({
  key: "ownerData",
  default: null
})

export const language = atom({
  key: "language",
  default: navigator.language || "en"
})

export const currentCategory = atom({
  key: "currentCategory",
  default: null
})

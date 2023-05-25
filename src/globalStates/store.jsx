import { atom } from "recoil";

export const isLogin = atom({
  key: "isLogin",
  default: localStorage.getItem("user") !== null
})

export const screenWidth = atom({
  key: "screenWidth",
  default: window.innerWidth
})

export const screenHeight = atom({
  key: "screenHeight",
  default: window.innerHeight
})

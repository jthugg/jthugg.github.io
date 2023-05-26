import styles from "./ModalWindow.module.css"

export default function ModalWindow(props) {
  return (
    <div className={styles.ModalWindow}>
      {props.children}
    </div>
  )
}
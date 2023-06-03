import styles from "./Body.module.css"

export default function Body(props) {

  return (
    <main className={styles.Body}>
      {props.children}
    </main>
  )
}
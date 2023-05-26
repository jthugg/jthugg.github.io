import styles from "./ProfileAvatar.module.css"

export default function ProfileAvatar(props) {
  return (
    <div
      className={styles.Avatar}
      {...props}
    />
  )
}

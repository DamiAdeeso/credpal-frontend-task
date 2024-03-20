import styles from './button.module.css'

const Button = ({label}) => {
  return (
    <button className={styles.btnWraper}>
      {label}
    </button>
  )
}

export default Button

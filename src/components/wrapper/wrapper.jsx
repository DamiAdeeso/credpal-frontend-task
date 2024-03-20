import styles from './wrapper.module.css'

const Wrapper = ({children, bgColor}) => {
  return (
    <section style={{backgroundColor: bgColor}} className={styles.wrapper}>
      {children}
    </section>
  )
}

export default Wrapper

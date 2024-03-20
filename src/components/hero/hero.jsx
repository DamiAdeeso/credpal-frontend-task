import Wrapper from '../wrapper/wrapper'
import styles from './hero.module.css'
import mama from '../../assets/images/image 67.png'
import Button from '../button/button'

const Hero = () => {
  return (
    <Wrapper >
      <div className={styles.hero}>
        <div className={styles.heroText}>
          <h1>
          <span style={{color:'#274FED'}}>Enjoy </span> High Yield <br /> Fixed Deposit <br /> Invesment
          </h1>
          <Button label={'Enjoy 18% investment returns'} />
        </div>
        <div className={styles.heroImage}>
          <img src={mama} alt="" />
        </div>
      </div>
    </Wrapper>
  )
}

export default Hero

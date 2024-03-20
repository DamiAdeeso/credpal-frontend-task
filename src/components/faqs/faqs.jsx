import Button from '../button/button'
import Wrapper from '../wrapper/wrapper'
import styles from './faqs.module.css'

const Faqs = () => {
  return (
    <Wrapper>
      <div className={styles.faqs}>
        <div className={styles.faqsText}>
          <h1>Have questions? We're here to help!</h1>
          <p>Our customers frequently ask these questions about our fixed deposit </p>
        </div>
        <div className={styles.faqs_question}>
          <select>
            <option value="">How safe is my investment with Credpal?</option>
          </select>
          <select>
            <option value="">How does Credpal offer higher interests?</option>
          </select>
          <select>
            <option value="">Is CredPal regulated by the CBN or protected by the NDIC?</option>
          </select>
          <select>
            <option value="">Can I liquidate before the end of my investment tenure?</option>
          </select>
        </div>

        <div className={styles.learnMore}>
          <h1>Learn more on other products ?</h1>
          <p>We've got you covered.</p>
          <Button label={'Check Out'} />
        </div>
      </div>
    </Wrapper>
  )
}

export default Faqs

import Button from "../button/button";
import Wrapper from "../wrapper/wrapper";
import styles from "./depositInvestment.module.css";
import cone from "../../assets/images/image 68.png";
import cbn from "../../assets/images/image 66.png";
import shiled from "../../assets/images/image 62.png";
import instant from "../../assets/images/image 65.png";

const DepositInvestment = () => {
  const regulations = [
    {
      picture: cone,
      text: "18% Hight Interest Rate",
    },
    {
      picture: cbn,
      text: "Regulated by CBN",
    },
    {
      picture: shiled,
      text: "Insured by the NDIC",
    },
    {
      picture: instant,
      text: "Instant Withdrawal",
    },
  ];

  return (
    <Wrapper>
      <div className={styles.business}>
        <div>
          <h1>Why Our Fixed Deposit Investment?</h1>
          <p>
            Let your money work for you. Fix your money for specific periods and
            get high interest <br /> rates with our secure fixed deposits.
          </p>
        </div>
        <div className={styles.regulations}>
          {regulations.map((item) => (
            <div className={styles.perks} key={item.text}>
              <div>
                <img src={item.picture} alt="" />
              </div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <Button label={"Enjoy 18% investment returns"} />
        <div className={styles.finacial}>
        <p>
        CredPal financial services are offered by Bishopgate microfinance bank fully license and regulated by Central <br /> bank of Nigeria .This APY is effective as of 07/14/2022 and may change at any time before or after your <br /> investement placement. Please ensure you've updated rates. account opening. Affirm savings accounts are held <br /> with Bishopgate Micofinance bank, Member NDIC. 
        </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default DepositInvestment;

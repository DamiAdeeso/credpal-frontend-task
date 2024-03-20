import Wrapper from "../wrapper/wrapper";
import styles from "./downloadCredpal.module.css";
import phone from "../../assets/images/image 13.png";
import debitcard from "../../assets/images/Frame 36890.png";
import Button from "../button/button";

const DownloadCredpal = () => {
  return (
    <Wrapper bgColor={'#F2F4FC'}>
      <div className={styles.dowload_credpal}>
        <div className={styles.dowload_text}>
          <h1>Download the CredPal app to get started </h1>
          <p>Join millions of satisfied customers who are already use CredPal to access credit, make payments , invest & many more!</p>
          <div className={styles.dowload_btn}>
            <Button label={'Google play'} />
            <Button label={'App Store'} />
          </div>
        </div>
        <div className={styles.dowload_image}>
          <div className={styles.phone}>
            <img src={phone} alt="" />
          </div>
          <div className={styles.card}>
            <img src={debitcard} alt="" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default DownloadCredpal;

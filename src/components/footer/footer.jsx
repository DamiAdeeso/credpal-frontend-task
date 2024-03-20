import styles from "./footer.module.css";
import logo from "../../assets/images/105553749675488.png";
import Button from "../button/button";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  const Products = [
    {
      text: "Personal Credit Cards",
    },
    {
      text: "Business Credit Cards",
    },
    {
      text: "Expense Magagement",
    },
  ];
  const Legal = [
    {
      text: "Merchant's Terms of Service",
    },
    {
      text: "Customer's Terms of Use",
    },
    {
      text: "Privacy policies",
    },
  ];
  const Support = [
    {
      text: "FAQs",
    },
    {
      text: "Blog",
    },
  ];
  const Socials = [
    {
      icon: <TiSocialFacebook />,
    },
    {
      icon: <FaTwitter />,
    },
    {
      icon: <FaInstagram />,
    },
    {
      icon: <FaLinkedinIn />,
    },
    {
      icon: <FaYoutube />,
    }
  ];

  return (
    <footer className={styles.wrapper}>
      <div className={styles.footer_container}>
        <div >
          <div>
            <img src={logo} alt="" />
          </div>
          <p>
            CredPal is a revolutionary credit solution geared towards providing
            seamless credit access for businesses and individuals across
            developing economies.
          </p>
          <div className={styles.footer_btn}>
            <Button label={"Google play"} />
            <Button label={"App Store"} />
          </div>
        </div>
        <div>
          <h3>Products</h3>
          <ul className={styles.footer_list}>
            {Products.map((item)=>(
              <li key={item.text}>{item.text}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Legal</h3>
          <ul className={styles.footer_list}>
            {Legal.map((item)=>(
              <li key={item.text}>{item.text}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Support</h3>
          <ul className={styles.footer_list}>
            {Support.map((item)=>(
              <li key={item.text}>{item.text}</li>
            ))}
          </ul>
        </div>
        <div>
          <div>
          <h3>Connect with us</h3>
          <div className={styles.socials} style={{color: '#FFF'}}>
            {Socials.map((item)=>(
              <span className={styles.social_icon} key={item.icon}>{item.icon}</span>
            ))}
          </div>
          </div>
          <div>
            <h3>Contact</h3>
            <p>hello@credpal.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

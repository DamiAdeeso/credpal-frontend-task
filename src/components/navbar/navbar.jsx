import styles from "./navbar.module.css";
import logo from "../../assets/images/Vector (1).svg";
import Button from "../button/button";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const navlist1 = [
    {
      text: "Personal",
    },
    {
      text: "Retail",
    },
    {
      text: "Business",
    },
  ];

  const navlist2 = [
    {
      text: "FAQs",
    },
    {
      text: "Sign In",
    },
    {
      text: <Button label={"Get app"} />,
    },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo_menu}>
        <div>
          <img src={logo} alt="" />
        </div>

        <ul className={styles.navlist}>
          {navlist1.map((item) => (
            <li key={item.text}>{item.text}</li>
          ))}
        </ul>
      </div>

      <ul className={styles.navlist}>
        {navlist2.map((item) => (
          <li key={item.text}>{item.text}</li>
        ))}
      </ul>
      <div className={styles.hamburger}>
        <GiHamburgerMenu size={25} />
      </div>
    </nav>
  );
};

export default Navbar;

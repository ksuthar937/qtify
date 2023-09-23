import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";

function Navbar({ data }) {
  return (
    <div className={styles.navbar}>
      <Logo />
      <Search data={data} />
      <Button children="Give Feedback" />
    </div>
  );
}

export default Navbar;

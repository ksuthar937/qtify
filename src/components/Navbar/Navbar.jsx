import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Logo />
      <Search />
      <Button children="Give Feedback" />
    </div>
  );
}

export default Navbar;

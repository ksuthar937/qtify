import { ReactComponent as HeroImage } from "../../assets/vibrating-headphone.svg";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroSubSection}>
        <div className={styles.heroText}>
          <p>100 Thousand Songs, ad-free</p>
          <p>Over thousands podcast episodes</p>
        </div>
        <div className={styles.heroImage}>
          <HeroImage />
        </div>
      </div>
    </div>
  );
}

export default Hero;

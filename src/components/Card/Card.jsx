import styles from "./Card.module.css";
// import cardImage from "../../assets/card-image.png";

function Card({ image, follows }) {
  return (
    <div className={styles.cardBody}>
      <div className={styles.card}>
        <img
          src={image}
          alt="card"
          width={159}
          height={170}
          className={styles.cardImage}
        />
        <div className={styles.follower}>
          <p>{follows} Follows</p>
        </div>
      </div>
      <p className={styles.cardTitle}>New Bollywood</p>
    </div>
  );
}

export default Card;

import { Chip } from "@mui/material";

import styles from "./Card.module.css";

function Card({ data, type }) {
  const getCart = (type) => {
    switch (type) {
      case "album": {
        const { image, follows, title } = data;
        return (
          <div className={styles.wrapper}>
            <div className={styles.card}>
              <img src={image} alt="album" />
              <div className={styles.banner}>
                <Chip
                  className={styles.chip}
                  label={`${follows} Follows`}
                  size="small"
                />
              </div>
            </div>
            <div className={styles.title}>
              <p>{title}</p>
            </div>
          </div>
        );
      }
      default:
        return <></>;
    }
  };
  return getCart(type);
}

export default Card;

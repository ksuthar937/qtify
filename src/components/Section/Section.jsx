import { useState } from "react";
import styles from "./Section.module.css";
import { CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";

function Section({ title, data }) {
  const [carouselToggle, setCarouselToggle] = useState(true);

  function handleToggle() {
    setCarouselToggle(!carouselToggle);
  }

  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {carouselToggle ? "Show all" : "Collapse"}
        </h4>
      </div>
      {!data.length ? (
        <div className={styles.loader}>
          <CircularProgress />
        </div>
      ) : (
        <div className={styles.cardWrapper}>
          {!carouselToggle ? (
            <div className={styles.wrapper}>
              {data.map((album) => (
                <Card data={album} type="album" key={album.id} />
              ))}
            </div>
          ) : (
            <Carousel
              data={data}
              componentRender={(element) => (
                <Card data={element} type="album" />
              )}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default Section;

import { useState } from "react";
import { CircularProgress } from "@mui/material";

import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";

import styles from "./Section.module.css";
import BasicTabs from "../Tabs/Tabs";

function Section({
  title,
  data,
  type,
  value = 0,
  handleChange,
  filteredData = null,
  filteredDataValue = [],
}) {
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

      {type === "song" ? (
        <BasicTabs value={value} handleChange={handleChange} />
      ) : null}

      {!data.length ? (
        <div className={styles.loader}>
          <CircularProgress />
        </div>
      ) : (
        <div className={styles.cardWrapper}>
          {!carouselToggle ? (
            <div className={styles.wrapper}>
              {filteredDataValue.map((item) => (
                <Card data={item} type={type} key={item.id} />
              ))}
            </div>
          ) : (
            <Carousel
              data={filteredDataValue}
              componentRender={(element) => <Card data={element} type={type} />}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default Section;

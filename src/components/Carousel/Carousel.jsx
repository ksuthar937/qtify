import { useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import CarouselLeftNavigation from "./CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation";

import "swiper/css";
import styles from "./Carousel.module.css";

function Carousel({ data, componentRender }) {
  const Controls = ({ data }) => {
    const swiper = useSwiper();
    // console.log(swiper);
    useEffect(() => {
      swiper.slideTo(0, null);
      //eslint-disable-next-line
    }, [data]);
    return <></>;
  };

  return (
    <div className={styles.wrapper}>
      <Swiper
        style={{ padding: "0px 20px" }}
        initialSlide={0}
        slidesPerView={"auto"}
        spaceBetween={40}
        allowTouchMove
      >
        <Controls data={data} />
        <CarouselLeftNavigation />
        <CarouselRightNavigation />
        {data.map((item) => (
          <SwiperSlide key={item.id}>{componentRender(item)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;

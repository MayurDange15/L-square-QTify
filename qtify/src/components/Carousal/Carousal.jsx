import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import "swiper/css";
import styles from "./Carousal.module.css";
import CarousalRightNav from "./CarousalRightNav/CarousalRightNav";
import CarousalLeftNav from "./CarousalLeftNav/CarousalLeftNav";

export default function Carousal({ data, Component, type }) {
  return (
    <div className={styles.carousalC}>
      <Swiper
        className={styles.swiper}
        initialSlide={0}
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={"auto"}
        allowTouchMove
        navigation={true}
        onSlideChange={() => console.log("slide change")}
      >
        <CarousalRightNav />
        {data.map((item) => (
          <SwiperSlide key={item.id}>{Component(item)}</SwiperSlide>
        ))}
        <CarousalLeftNav />
      </Swiper>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import styles from "./CarousalLeftNav.module.css";
import { ReactComponent as LeftArrow } from "../../../assets/ArrowLeft.svg";

export default function CarousalLeftNav() {
  const swiper = useSwiper();
  const [isStarting, setIsStarting] = useState(swiper.isBeginning);

  useEffect(() => {
    swiper.on("slideChange", function () {
      setIsStarting(swiper.isBeginning);
    });
  }, [swiper]);

  return (
    <div className={styles.leftArrow}>
      {!isStarting && (
        <LeftArrow
          onClick={() => {
            swiper.slidePrev();
          }}
        ></LeftArrow>
      )}
    </div>
  );
}

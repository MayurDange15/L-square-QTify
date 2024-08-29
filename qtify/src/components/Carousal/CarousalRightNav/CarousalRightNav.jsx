import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import { ReactComponent as RightArrow } from "../../../assets/ArrowRight.svg";
import styles from "./CarousalRightNav.module.css";

export default function CarousalRightNav() {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(swiper.isEnd);

  useEffect(() => {
    swiper.on("slideChange", function () {
      setIsEnd(swiper.isEnd);
    });
  }, [swiper]);

  return (
    <div className={styles.rightArrow}>
      {!isEnd && (
        <RightArrow
          onClick={() => {
            swiper.slideNext();
          }}
        ></RightArrow>
      )}
    </div>
  );
}

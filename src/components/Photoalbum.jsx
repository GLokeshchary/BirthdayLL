import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./Photoalbum.css";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
const Photoalbum = ({ album, header, slideperview }) => {
  const imagesList = ["p1", "p2", "p3", "p4", "p5"];
  return (
    <div>
      <div className="photo-header">LEELA X {header}</div>
      <Swiper
        slidesPerView={slideperview}
        freeMode={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, FreeMode, Pagination]}
        className="mySwiper"
      >
        {imagesList.map((item) => (
          <SwiperSlide key={item}>
            <img src={`src/assets/${album}/${item}.jpg`} alt={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Photoalbum;

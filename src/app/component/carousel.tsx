import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function ProductCarousel() {
  return (
    <div className="flex justify-center items-center">
      <Swiper
        className="w-32 md:w-24 lg:w-40"
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: false,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        style={{ overflow: "initial" }}
      >
        <SwiperSlide>
          <img src="/img/phone-webapp/phone/loading.png" alt="SwipeImg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/phone-webapp/phone/start.png" alt="SwipeImg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/phone-webapp/phone/spinning.png" alt="SwipeImg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/phone-webapp/phone/quizq1hint.png" alt="SwipeImg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/phone-webapp/phone/quizq1.png" alt="SwipeImg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/phone-webapp/phone/quizq2.png" alt="SwipeImg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/phone-webapp/phone/quizq3.png" alt="SwipeImg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/phone-webapp/phone/quiz-complete.png" alt="SwipeImg" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/img/phone-webapp/phone/collection-item-info.png"
            alt="SwipeImg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/phone-webapp/phone/emptybasket.png" alt="SwipeImg" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/img/phone-webapp/phone/today-basketfilled.png"
            alt="SwipeImg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

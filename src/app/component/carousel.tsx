import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
export default function ProductCarousel() {
  const width = 400;
  const height = 400;
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
          <Image
            src="img/phone-webapp/phone/loading.png"
            alt="SwipeImg"
            width={width}
            height={height}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="img/phone-webapp/phone/start.png"
            alt="SwipeImg"
            width={width}
            height={height}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="img/phone-webapp/phone/spinning.png"
            alt="SwipeImg"
            width={width}
            height={height}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="img/phone-webapp/phone/quizq1hint.png"
            alt="SwipeImg"
            width={width}
            height={height}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="img/phone-webapp/phone/quizq1.png"
            alt="SwipeImg"
            width={width}
            height={height}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="img/phone-webapp/phone/quizq2.png"
            alt="SwipeImg"
            width={width}
            height={height}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="img/phone-webapp/phone/quizq3.png"
            alt="SwipeImg"
            width={width}
            height={height}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="img/phone-webapp/phone/quiz-complete.png"
            alt="SwipeImg"
            width={width}
            height={height}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="img/phone-webapp/phone/collection-item-info.png"
            alt="SwipeImg"
            width={width}
            height={height}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="img/phone-webapp/phone/emptybasket.png"
            alt="SwipeImg"
            width={width}
            height={height}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="img/phone-webapp/phone/today-basketfilled.png"
            alt="SwipeImg"
            width={width}
            height={height}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

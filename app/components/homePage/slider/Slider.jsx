"use client";

// Import React hooks
import { useEffect, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";

export default function Slider() {
  const [slidesData, setSlidesData] = useState([]);

  useEffect(() => {
    async function fetchSliderData() {
      try {
        const response = await fetch("/slider.json");
        if (!response.ok) {
          throw new Error("Failed to fetch slider data");
        }
        const data = await response.json();
        setSlidesData(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchSliderData();
  }, []);

  if (!slidesData.length) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {slidesData.map(({ image, text }, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden">
              <Image
                src={image}
                alt={text}
                fill
                className="object-cover brightness-75"
              />
              <div className="absolute inset-0 flex justify-center items-center text-white text-2xl md:text-4xl font-semibold pointer-events-none">
                {text}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

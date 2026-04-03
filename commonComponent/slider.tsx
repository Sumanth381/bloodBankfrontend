"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Donate from "../public/assets/Donate.jpg";
import search from "../public/assets/search.jpg"
import hero from "../public/assets/Hero.jpg"
import emergency from '../public/assets/Emergency.jpg'
import together from '../public/assets/together.jpg'

const sliderData = [
  {
    image: Donate,
    heading: "Donate Blood",
    name: "Your Donation Can Save Lives",
  },
  {
    image: search,
    heading: "Find Donors",
    name: "Connect with Donors Instantly",
  },
  {
    image: hero,
    heading: "Become a Hero",
    name: "Join the Life-Saving Community",
  },
  {
    image: emergency,
    heading: "Emergency Help",
    name: "Quick Access to Blood in Critical Times",
  },
  {
    image: together,
    heading: "Save Lives Together",
    name: "Be Part of a Caring Community",
  },
];

const CommonSlider = () => {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex" }}>
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 2500 }}
        loop
        pagination={{ clickable: true }}
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          color: "red",
        }}
      >
        {sliderData.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              style={{ position: "relative", width: "100%", height: "100%" }}
            >
              <img
                src={typeof item.image === "string" ? item.image : item.image.src} 
                alt={item.heading}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />

              {/* Overlay Content */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: "rgba(0,0,0,0.5)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                <h1 style={{ color: "#c6ffb3", fontSize: "30px" }}>
                  {item.heading}
                </h1>
                <h2>{item.name}</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CommonSlider;

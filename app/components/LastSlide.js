"use client";
import React, { useRef, useState } from 'react';
import styles from "../styles/last.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
// import { Container, Row, Col } from "react-bootstrap";
import slide1 from "../assets/last1.jpg";
import slide2 from "../assets/last2.jpg";
import slide3 from "../assets/last3.jpg";
import slide4 from "../assets/last4.jpg";
import { FaAngleRight } from "react-icons/fa";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// import './styles.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

export default function LastCarousel() {

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
          autoplay: {delay: 1000},
          className: "pagination",
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
                <SwiperSlide className={styles.swiperslide}>
                    <div className={styles.singleevent}>
                        <div className={styles.eventimg}>
                            <a href='#' className={styles.aa}><Image className={styles.sli} src={slide3} alt='slides' /></a>
                        </div>
                        <div className={styles.eventtxt}>
                            <a href='#' className={styles.eventcategory1}>design</a>
                            <a href='#' className={styles.title}>Learn with these award-winning best blog collage courses</a>
                            <p>Are you passionate about design? Explore the world of design with our award-winning collage courses. Whether you're a novice or a seasoned designer, these courses will help you hone your skills and unleash your creativity.</p>
                            <a href='#' className={styles.rm}>Read More <FaAngleRight className={styles.chev}/></a>
                        </div>
                    </div>               
                </SwiperSlide>
                <SwiperSlide className={styles.swiperslide}>
                    <div className={styles.singleevent}>
                        <div className={styles.eventimg}>
                            <a href='#' className={styles.aa}><Image className={styles.sli1} src={slide4} alt='slides' /></a>
                        </div>
                        <div className={styles.eventtxt}>
                            <a href='#' className={styles.eventcategory2}>food</a>
                            <a href='#' className={styles.title}>The Art of Baking: Mastering Delicious Pastries</a>
                            <p>If you have a sweet tooth and a passion for baking, this blog is for you. Learn the art of baking and master the techniques to create mouthwatering pastries and desserts that will impress everyone.</p>
                            <a href='#' className={styles.rm}>Read More <FaAngleRight className={styles.chev}/></a>
                        </div>
                    </div>             
                </SwiperSlide>
                <SwiperSlide className={styles.swiperslide}>
                    <div className={styles.singleevent}>
                        <div className={styles.eventimg}>
                            <a href='#' className={styles.aa}><Image className={styles.sli1} src={slide1} alt='slides' /></a>
                        </div>
                        <div className={styles.eventtxt}>
                            <a href='#' className={styles.eventcategory3}>science</a>
                            <a href='#' className={styles.title}>The Wonders of Space: Exploring the Cosmos</a>
                            <p>Space has always fascinated humanity, and in this blog, we embark on a cosmic journey. Explore the mysteries of the universe, from distant galaxies to the wonders of our own solar system.</p>
                            <a href='#' className={styles.rm}>Read More <FaAngleRight className={styles.chev}/></a>
                        </div>
                    </div>        
                </SwiperSlide>
                <SwiperSlide className={styles.swiperslide}>
                    <div className={styles.singleevent}>
                        <div className={styles.eventimg}>
                            <a href='#' className={styles.aa}><Image className={styles.sli1} src={slide2} alt='slides' /></a>
                        </div>
                        <div className={styles.eventtxt}>
                            <a href='#' className={styles.eventcategory3}>health</a>
                            <a href='#' className={styles.title}>The Wonders of Space: Exploring the Cosmos</a>
                            <p>Space has always fascinated humanity, and in this blog, we embark on a cosmic journey. Explore the mysteries of the universe, from distant galaxies to the wonders of our own solar system.</p>
                            <a href='#' className={styles.rm}>Read More <FaAngleRight className={styles.chev}/></a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperslide}>
                    <div className={styles.singleevent}>
                        <div className={styles.eventimg}>
                            <a href='#' className={styles.aa}><Image className={styles.sli} src={slide3} alt='slides' /></a>
                        </div>
                        <div className={styles.eventtxt}>
                            <a href='#' className={styles.eventcategory1}>design</a>
                            <a href='#' className={styles.title}>Learn with these award-winning best blog collage courses</a>
                            <p>Are you passionate about design? Explore the world of design with our award-winning collage courses. Whether you're a novice or a seasoned designer, these courses will help you hone your skills and unleash your creativity.</p>
                            <a href='#' className={styles.rm}>Read More <FaAngleRight className={styles.chev}/></a>
                        </div>
                    </div>               
                </SwiperSlide>
                <SwiperSlide className={styles.swiperslide}>
                    <div className={styles.singleevent}>
                        <div className={styles.eventimg}>
                            <a href='#' className={styles.aa}><Image className={styles.sli1} src={slide4} alt='slides' /></a>
                        </div>
                        <div className={styles.eventtxt}>
                            <a href='#' className={styles.eventcategory2}>food</a>
                            <a href='#' className={styles.title}>The Art of Baking: Mastering Delicious Pastries</a>
                            <p>If you have a sweet tooth and a passion for baking, this blog is for you. Learn the art of baking and master the techniques to create mouthwatering pastries and desserts that will impress everyone.</p>
                            <a href='#' className={styles.rm}>Read More <FaAngleRight className={styles.chev}/></a>
                        </div>
                    </div>            
                </SwiperSlide>
      </Swiper>
    </>
  );
}

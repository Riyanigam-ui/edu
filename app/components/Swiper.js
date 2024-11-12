"use client";
import React, { useRef, useState } from 'react';
import styles from "../styles/swiper.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
// import { Container, Row, Col } from "react-bootstrap";
import slide1 from "../assets/slider1.png";
import slide2 from "../assets/slider2.png";
import slide3 from "../assets/slider3.png";
import slide4 from "../assets/slider4.png";
import { FiMapPin } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination';
import  'swiper/css/autoplay';

// import './styles.css';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function Sliding() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay= {{ delay: 1000, disableOnInteraction: false}}
        loop= {true}
        speed= {5000}
        navigation={false}
        pagination={{
          clickable: true,
          className: "pagination",
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className={styles.swiper}
      >
        <SwiperSlide className={styles.swiperslide}>
                    <div className={styles.singleevent}>
                        <div className={styles.eventimg}>
                            <Image className={styles.sli} src={slide1} alt='slide' />
                            <a href='#' className={styles.eventcategory1}>food</a>
                        </div>
                        <div className={styles.eventtxt}>
                            <ul>
                                <li><a href='#'><FiMapPin className={styles.pin} />Paris, France</a></li>
                                <li><a href='#'><FaRegClock className={styles.pin} />06.00pm - 09.00pm</a></li>
                            </ul>
                            <a href='#' className={styles.gour}>Gourmet Music Concert</a>
                            <p>Calling all food lovers! Join us for a culinary adventure at the Paris Gourmet Food Festival. Sample a diverse range of gourmet dishes from around the world and satisfy your taste buds!</p>
                            <div className={styles.eventfooter}>
                                <span>Gourmet Food Festival</span>
                                <span>$45.00</span>
                            </div>
                        </div>
                    </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
                    <div className={styles.singleevent}>
                        <div className={styles.eventimg}>
                            <Image className={styles.sli} src={slide2} alt='slide' />
                            <a href='#' className={styles.eventcategory2}>music</a>
                        </div>
                        <div className={styles.eventtxt}>
                            <ul>
                                <li><a href='#'><FiMapPin className={styles.pin} />Nashville, USA</a></li>
                                <li><a href='#'><FaRegClock className={styles.pin} />08.00pm - 11.00pm</a></li>
                            </ul>
                            <a href='#' className={styles.gour}>Country Music Festival</a>
                            <p>Get ready for a boot-stompin' good time at the Country Music Festival in Nashville. Experience live performances of your favorite country hits and enjoy the vibrant atmosphere.</p>
                            <div className={styles.eventfooter}>
                                <span>Country Music Festival</span>
                                <span>$65.00</span>
                            </div>
                        </div>
                    </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
                    <div className={styles.singleevent}>
                        <div className={styles.eventimg}>
                            <Image className={styles.sli} src={slide3} alt='slide' />
                            <a href='#' className={styles.eventcategory2}>music</a>
                        </div>
                        <div className={styles.eventtxt}>
                            <ul>
                                <li><a href='#'><FiMapPin className={styles.pin} />New York, USA</a></li>
                                <li><a href='#'><FaRegClock className={styles.pin} />07.30pm - 11.00pm</a></li>
                            </ul>
                            <a href='#' className={styles.gour}>Live Music Concert</a>
                            <p>Experience the magic of live music in the heart of New York City. This concert features some of the most talented musicians performing your favorite songs. Get ready for a night to remember!</p>
                            <div className={styles.eventfooter}>
                                <span>Live Music Concert</span>
                                <span>$60.00</span>
                            </div>
                        </div>
                    </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
                    <div className={styles.singleevent}>
                        <div className={styles.eventimg}>
                            <Image className={styles.sli} src={slide4} alt='slide' />
                            <a href='#' className={styles.eventcategory1}>school</a>
                        </div>
                        <div className={styles.eventtxt}>
                            <ul>
                                <li><a href='#'><FiMapPin className={styles.pin} />Dhaka, Bangladesh</a></li>
                                <li><a href='#'><FaRegClock className={styles.pin} />08.00pm - 10.00pm</a></li>
                            </ul>
                            <a href='#' className={styles.gour}>Outdoor This Games</a>
                            <p>Join us for a day of exciting outdoor activities and games in the beautiful Dhaka, Bangladesh. Whether you're a student or just looking for some outdoor fun, this event is perfect for you.</p>
                            <div className={styles.eventfooter}>
                                <span>Outdoor This Games</span>
                                <span>$50.00</span>
                            </div>
                        </div>
                    </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
                    <div className={styles.singleevent}>
                        <div className={styles.eventimg}>
                            <Image className={styles.sli} src={slide1} alt='slide' />
                            <a href='#' className={styles.eventcategory1}>food</a>
                        </div>
                        <div className={styles.eventtxt}>
                            <ul>
                                <li><a href='#'><FiMapPin className={styles.pin} />Paris, France</a></li>
                                <li><a href='#'><FaRegClock className={styles.pin} />06.00pm - 09.00pm</a></li>
                            </ul>
                            <a href='#' className={styles.gour}>Gourmet Music Concert</a>
                            <p>Calling all food lovers! Join us for a culinary adventure at the Paris Gourmet Food Festival. Sample a diverse range of gourmet dishes from around the world and satisfy your taste buds!</p>
                            <div className={styles.eventfooter}>
                                <span>Gourmet Food Festival</span>
                                <span>$45.00</span>
                            </div>
                        </div>
                    </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
                    <div className={styles.singleevent}>
                        <div className={styles.eventimg}>
                            <Image className={styles.sli} src={slide2} alt='slide' />
                            <a href='#' className={styles.eventcategory2}>music</a>
                        </div>
                        <div className={styles.eventtxt}>
                            <ul>
                                <li><a href='#'><FiMapPin className={styles.pin} />Nashville, USA</a></li>
                                <li><a href='#'><FaRegClock className={styles.pin} />08.00pm - 11.00pm</a></li>
                            </ul>
                            <a href='#' className={styles.gour}>Country Music Festival</a>
                            <p>Get ready for a boot-stompin' good time at the Country Music Festival in Nashville. Experience live performances of your favorite country hits and enjoy the vibrant atmosphere.</p>
                            <div className={styles.eventfooter}>
                                <span>Country Music Festival</span>
                                <span>$65.00</span>
                            </div>
                        </div>
                    </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

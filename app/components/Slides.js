"use client";
import React, { useRef, useState } from 'react';
import styles from "../styles/carousel.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
// import { Container, Row, Col } from "react-bootstrap";
import submit from "../assets/submit.jpg";
import submit1 from "../assets/submit1.jpg";
import submit2 from "../assets/submit2.jpg";
import submit3 from "../assets/submit3.jpg";
// import { FiMapPin } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// import './styles.css';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

export default function Sliding() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
          autoplay: { delay: 1000 },
          className: "pagination",
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
                <SwiperSlide className={styles.swiperslide}>
                    <div className={styles.singleevent}>
                        <div className={styles.eventimg}>
                            <Image className={styles.sli} src={submit} alt='slide' />
                        </div>
                        <div className={styles.eventtxt} id={styles.green}>
                        <h3>
                            Research Papers Submitted Fully
                        </h3>
                            <p>Our students have submitted groundbreaking research papers in various fields of study, contributing to the advancement of knowledge.</p>
                            <div className={styles.eventfooter}>
                                <a href='#'><FaArrowRight className={styles.gr} id={styles.arrow} /></a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperslide}>
                    <div className={styles.singleevent}>
                        <div className={styles.eventimg}>
                            <Image className={styles.sli} src={submit1} alt='slide' />
                        </div>
                        <div className={styles.eventtxt} id={styles.purple}>
                            <h3>Language Proficiency Courses</h3>
                            <p>Our language proficiency courses help students become fluent in multiple languages, opening up new opportunities for them.</p>
                            <div className={styles.eventfooter} id={styles.foo}>
                            <a href='#'><FaArrowRight className={styles.gr1} id={styles.arrow} /></a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperslide}>
                    <div className={styles.singleevent1}>
                        <div className={styles.eventimg}>
                            <Image className={styles.sli} src={submit2} alt='slide' />
                        </div>
                        <div className={styles.eventtxt} id={styles.orange}>
                            <h3>Classes Completed On Time</h3>
                            <p>We can provide you with a reliable handyan in London. you need to included the today. However we feel like we should do more and have fun.</p>
                            <div className={styles.eventfooter} id={styles.foo1}>
                            <a href='#'><FaArrowRight className={styles.gr2} id={styles.arrow} /></a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperslide}>
                    <div className={styles.singleevent2}>
                        <div className={styles.eventimg}>
                            <Image className={styles.sli} src={submit3} alt='slide' />
                        </div>
                        <div className={styles.eventtxt} id={styles.red}>
                            
                            {/* <a href='#' className={styles.gour}>Outdoor This Games</a> */}
                            <h3>Stem Workshops Conducted</h3>
                            <p>We organize STEM workshops to engage students in hands-on learning experiences in science, technology, engineering, and mathematics.</p>
                            <div className={styles.eventfooter}>
                            <a href='#'><FaArrowRight className={styles.gr3} id={styles.arrow} /></a>
                            </div>
                        </div>
                    </div>
              </SwiperSlide>
             <SwiperSlide className={styles.swiperslide}>
                <div className={styles.singleevent}>
                    <div className={styles.eventimg}>
                        <Image className={styles.sli} src={submit} alt='slide' />    
                    </div>
                    <div className={styles.eventtxt} id={styles.green}>
                        <h3>
                            Research Papers Submitted Fully
                        </h3>
                        <p>Our students have submitted groundbreaking research papers in various fields of study, contributing to the advancement of knowledge.</p>
                        <div className={styles.eventfooter}>
                            <a href='#'><FaArrowRight className={styles.gr} id={styles.arrow} /></a>
                        </div>
                    </div>              
                </div>
            </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
            <div className={styles.singleevent}>
                <div className={styles.eventimg}>
                    <Image className={styles.sli} src={submit1} alt='slide' />
                </div>
                <div className={styles.eventtxt} id={styles.purple}>                            <h3>Language Proficiency Courses</h3>
                    <p>Our language proficiency courses help students become fluent in multiple languages, opening up new opportunities for them.</p>
                    <div className={styles.eventfooter}>
                        <a href='#'><FaArrowRight className={styles.gr1} id={styles.arrow} /></a>
                    </div>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
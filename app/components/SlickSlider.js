"use client";
import React, { useRef, useState } from 'react';
import styles from "../styles/slick.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import testimg1 from "../assets/testimg1.jpg";
import testimg2 from "../assets/testimg2.png";
import { RiDoubleQuotesL } from "react-icons/ri";
import { CiStar } from "react-icons/ci";
import { TiStarFullOutline } from "react-icons/ti";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import {  Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function Testimonials() {
    return (
      <>
        <Swiper
          cssMode={true}
          navigation={false}
          pagination={false}
          mousewheel={true}
          keyboard={true}
          modules={[ Navigation, Pagination, Mousewheel, Keyboard]}
          className={styles.myswiper}
        >
          <SwiperSlide className={styles.swiperslide}>
                       <div className={styles.singletest}>
                        <div className={styles.icon}>
                          <RiDoubleQuotesL className={styles.quotes} />
                        </div>
                        <p>The dedicated faculty and staff at this school make learning a joyful experience. I couldn't have asked for a better educational environment.</p>
                        <div className={styles.testimg11}>
                          <Image className={styles.image} src={testimg1} alt='test' />
                          <h3>John Doe</h3>
                          <p>Parent</p>
                          <p className={styles.rating}>
                            <a href='#' className={styles.ci}>
                            <TiStarFullOutline className={styles.st1} />
                            <TiStarFullOutline className={styles.st1} />
                            <TiStarFullOutline className={styles.st1} />
                            <CiStar className={styles.st2} />
                            <CiStar className={styles.st2} />
                            </a>
                          </p>
                        </div>
                       </div>
                       <div className={styles.singletest}>
                        <div className={styles.icon}>
                          <RiDoubleQuotesL className={styles.quotes} />
                        </div>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form by injected humour</p>
                        <div className={styles.testimg}>
                          <Image className={styles.testt} src={testimg2} alt='test' />
                          <h3>Andrew James</h3>
                          <p>Developer</p>
                          <p className={styles.rating}>
                            <a href='#' className={styles.ci}>
                            <TiStarFullOutline className={styles.st1} />
                            <TiStarFullOutline className={styles.st1} />
                            <TiStarFullOutline className={styles.st1} />
                            <CiStar className={styles.st2} />
                            <CiStar className={styles.st2} />
                            </a>
                          </p>
                        </div>
                       </div>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperslide}>
                       <div className={styles.singletest}>
                        <div className={styles.icon}>
                          <RiDoubleQuotesL className={styles.quotes} />
                        </div>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form by injected humour</p>
                        <div className={styles.testimg}>
                          <Image className={styles.testt} src={testimg2} alt='test' />
                          <h3>Andrew James</h3>
                          <p>Developer</p>
                          <p className={styles.rating}>
                            <a href='#' className={styles.ci}>
                            <TiStarFullOutline className={styles.st1} />
                            <TiStarFullOutline className={styles.st1} />
                            <TiStarFullOutline className={styles.st1} />
                            <CiStar className={styles.st2} />
                            <CiStar className={styles.st2} />
                            </a>
                          </p>
                        </div>
                       </div>
                       <div className={styles.singletest}>
                        <div className={styles.icon}>
                          <RiDoubleQuotesL className={styles.quotes} />
                        </div>
                        <p>I am extremely satisfied with the quality of education provided by this institution. It has helped me grow both academically and personally.</p>
                        <div className={styles.testimg}>
                          <Image className={styles.testt} src={testimg2} alt='test' />
                          <h3>William Smith</h3>
                          <p>Student</p>
                          <p className={styles.rating}>
                            <a href='#' className={styles.ci}>
                            <TiStarFullOutline className={styles.st1} />
                            <TiStarFullOutline className={styles.st1} />
                            <TiStarFullOutline className={styles.st1} />
                            <CiStar className={styles.st2} />
                            <CiStar className={styles.st2} />
                            </a>
                          </p>
                        </div>
                       </div>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperslide}>
                       <div className={styles.singletest}>
                        <div className={styles.icon}>
                          <RiDoubleQuotesL className={styles.quotes} />
                        </div>
                        <p>I am extremely satisfied with the quality of education provided by this institution. It has helped me grow both academically and personally.</p>
                        <div className={styles.testimg}>
                          <Image className={styles.testt} src={testimg2} alt='test' />
                          <h3>William Smith</h3>
                          <p>Student</p>
                          <p className={styles.rating}>
                            <a href='#' className={styles.ci}>
                            <TiStarFullOutline className={styles.st1} />
                            <TiStarFullOutline className={styles.st1} />
                            <TiStarFullOutline className={styles.st1} />
                            <CiStar className={styles.st2} />
                            <CiStar className={styles.st2} />
                            </a>
                          </p>
                        </div>
                       </div>
                       <div className={styles.singletest}>
                        <div className={styles.icon}>
                          <RiDoubleQuotesL className={styles.quotes} />
                        </div>
                        <p>This institution has exceeded my expectations in terms of academic excellence and extracurricular activities. I highly recommend it to all students and parents.</p>
                        <div className={styles.testimg}>
                          <Image className={styles.testt} src={testimg2} alt='test' />
                          <h3>Sam Anderson</h3>
                          <p>Alumnus</p>
                          <p className={styles.rating}>
                            <a href='#' className={styles.ci}>
                            <TiStarFullOutline className={styles.st1} />
                            <TiStarFullOutline className={styles.st1} />
                            <TiStarFullOutline className={styles.st1} />
                            <CiStar className={styles.st2} />
                            <CiStar className={styles.st2} />
                            </a>
                          </p>
                        </div>
                       </div>
                  </SwiperSlide>
                  <SwiperSlide className={styles.swiperslide}>
                       <div className={styles.singletest}>
                        <div className={styles.icon}>
                          <RiDoubleQuotesL className={styles.quotes} />
                        </div>
                        <p>This institution has exceeded my expectations in terms of academic excellence and extracurricular activities. I highly recommend it to all students and parents.</p>
                        <div className={styles.testimg}>
                          <Image className={styles.testt} src={testimg2} alt='test' />
                          <h3>Sam Anderson</h3>
                          <p>Alumnus</p>
                          <p className={styles.rating}>
                            <a href='#' className={styles.ci}>
                            <TiStarFullOutline className={styles.st1} />
                            <TiStarFullOutline className={styles.st1} />
                            <TiStarFullOutline className={styles.st1} />
                            <CiStar className={styles.st2} />
                            <CiStar className={styles.st2} />
                            </a>
                          </p>
                        </div>
                       </div>
                       <div className={styles.singletest}>
                        <div className={styles.icon}>
                          <RiDoubleQuotesL className={styles.quotes} />
                        </div>
                        <p>The dedicated faculty and staff at this school make learning a joyful experience. I couldn't have asked for a better educational environment.</p>
                        <div className={styles.testimg11}>
                          <Image className={styles.image} src={testimg1} alt='test' />
                          <h3>John Doe</h3>
                          <p>Parent</p>
                          <p className={styles.rating}>
                            <a href='#' className={styles.ci}>
                            <TiStarFullOutline className={styles.st1} />
                            <TiStarFullOutline className={styles.st1} />
                            <TiStarFullOutline className={styles.st1} />
                            <CiStar className={styles.st2} />
                            <CiStar className={styles.st2} />
                            </a>
                          </p>
                        </div>
                       </div>
          </SwiperSlide>
        </Swiper>  
    </>
  );
}
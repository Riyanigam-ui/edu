// "use client";
import React from 'react';
// import { useState } from 'react';
// import { Carousel, CarouselCaption, CarouselItem } from 'react-bootstrap';
import Image from 'next/image';
import styles from "../styles/main.module.css";
import { Container, Row, Col } from 'react-bootstrap';
import { FaPencilRuler, FaPlay } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";
import { FaPalette } from "react-icons/fa";
import { SiSimpleanalytics } from "react-icons/si";
import top from "../assets/abouttop.jpg";
import abbimg from "../assets/about_img.png";
import { FaCheck } from "react-icons/fa";
import Slider from '../components/Slider';
import faqimg from "../assets/faq_img.jpg";
import Accordion from 'react-bootstrap/Accordion';
import AccordionItem from 'react-bootstrap/AccordionItem';
import AccordionHeader  from 'react-bootstrap/AccordionHeader';
import AccordionBody from 'react-bootstrap/AccordionBody';
import Sliding from '../components/Slides';
import Testimonials from '../components/SlickSlider';
import activityimage from "../assets/activityimg2.jpg";
import LastCarousel from '../components/LastSlide';


export default function Main() {
  return (
    <>
     <main className={styles.main}>
        <section className={styles.sec1}>
           <div className={styles.headingarea}>
           <Container className={styles.conti}>
             <Row>
               <Col className={styles.course}>
                 <h5>Our Course Categories</h5>
                 <h2>Creative Categories for Students.</h2>     
               </Col>
             </Row>
             <Row className={styles.students}>
               <Col className={styles.conn1}>
                 <div className={styles.blue}>
                   <div className={styles.icon1}>
                     <FaPencilRuler className={styles.pencil} />
                   </div>
                   <div className={styles.bluecontent1}>
                     <h3>Book Exercise</h3>
                     <p>We can provide you with a handyan in London.</p>
                   </div>
                 </div>                 
               </Col>
               <Col className={styles.conn1}>
                 <div className={styles.blue}>
                   <div className={styles.icon2}>
                     <FaCar className={styles.pencil} />
                   </div>
                   <div className={styles.bluecontent2}>
                     <h3>Exclusive Party</h3>
                     <p>We can provide you with a handyan in London.</p>
                   </div>
                 </div>                 
               </Col>
               <Col className={styles.conn1}>
                 <div className={styles.blue}>
                   <div className={styles.icon3}>
                     <FaBook className={styles.pencil} />
                   </div>
                   <div className={styles.bluecontent3}>
                     <h3>Exclusive Context</h3>
                     <p>We can provide you with a handyan in London.</p>
                   </div>
                 </div>                 
               </Col>
             </Row>
             <Row className={styles.students}>
             <Col className={styles.conn1}>
                 <div className={styles.blue}>
                   <div className={styles.icon4}>
                     <FaPaintBrush className={styles.pencil} />
                   </div>
                   <div className={styles.bluecontent4}>
                     <h3>Private Lesson</h3>
                     <p>We can provide you with a handyan in London.</p>
                   </div>
                 </div>                 
               </Col>
               <Col className={styles.conn1}>
                 <div className={styles.blue}>
                   <div className={styles.icon5}>
                     <FaPalette className={styles.pencil} />
                   </div>
                   <div className={styles.bluecontent5}>
                     <h3>Music Conference</h3>
                     <p>We can provide you with a handyan in London.</p>
                   </div>
                 </div>                 
               </Col>
               <Col className={styles.conn1}>
                 <div className={styles.blue}>
                   <div className={styles.icon6}>
                     <SiSimpleanalytics className={styles.pencil} />
                   </div>
                   <div className={styles.bluecontent6}>
                     <h3>School Study</h3>
                     <p>We can provide you with a handyan in London.</p>
                   </div>
                 </div>                 
               </Col>
             </Row>
           </Container>
           </div>
        </section>

        <section className={styles.school}>
            <Container className={styles.book}>
              <div className={styles.childd}>
              <Row className={styles.sch}>
                <Col className={styles.schh}>
                  <div className={styles.abtop}>
                     <Image src={top} alt="about-top" className={styles.abb} />
                  </div>
                </Col>
                <Col className={styles.schh1}>
                  <div className={styles.abcontent}>
                    <div className={styles.toptext}>
                    <h4>Study Off Flexibility</h4>
                    <p>We can provide you with a reliable handyan in Please input an email address down below school. Please input anand school. included the today.</p>
                    </div>
                    <a href='#' className={styles.read1}>READ MORE</a>
                  </div>
                </Col>
              </Row>
              </div>
              <Row className={styles.scrow}>
                 <Col className={styles.busi}>
                   <div className={styles.abbtext}>
                     <div className={styles.abtt}>
                       <h5>OUR ABOUT US</h5>
                       <h2>Discover Our Story: Nurturing Growth, Fostering Learning.</h2>
                     </div>
                     <p>Business tailored it design, management & support services business agency elit, sed do eiusmod tempor.</p>
                     <ul className={styles.abttt}>
                      <li><a href='#'>Business school's Institut constructivism.</a></li>
                      <li><a href='#'>We give management school best.</a></li>
                      <li><a href='#'>Media in this school solution.</a></li>
                      <li><a href='#'>Business school's Institut constructivism.</a></li>
                      <li><a href='#'>We give management school best.</a></li>
                     </ul>
                     <div className={styles.abbmore}>
                     <a href='#' className={styles.abmore}>ABOUT MORE</a>
                     </div>
                   </div>
                 </Col>
                 <Col className={styles.smile}>
                   <div className={styles.abbimage}>
                     <Image src={abbimg} alt="about-img" className={styles.abbb} />
                   </div>
                   <div className={styles.counterbox}>
                      <FaCheck className={styles.circle} />
                      <h3>183K+</h3>
                      <p>Complete Projects</p>
                   </div>
                 </Col>
              </Row>
            </Container>
        </section>

        <section className={styles.events}>
          <Container className={styles.conn2}>
            <Row>
              <Col className={styles.smile1}>
                <div className={styles.eventh}>
                  <h5>OUR UPCOMING EVENTS</h5>
                  <h2>Educate & Elevate: Events That Inspire Learning</h2>
                </div>
              </Col>
            </Row>
            <Row className={styles.sl1}>
               <Col>
                 <div className={styles.sliders}>
                   <Slider />
                 </div>
               </Col>
            </Row>
          </Container>
        </section>
        <section className={styles.faq}>
           <Container className={styles.faq1}>
             <Row className={styles.accrows}>
               <Col className={styles.faqq}>
                 <div className={styles.faqimage}>
                   <Image src={faqimg} className={styles.imgg} alt="image" />
                 </div>
               </Col>
               <Col className={styles.faqq1}>
                 <div className={styles.faqtext}>
                  <div className={styles.heading}>
                    <h5>Our Education FAQ</h5>
                    <h2>Got Questions? Here Are Your Answers-  FAQ</h2>
                  </div>
                  <p>Business tailored it design, management & support services business agency elit, sed do eiusmod tempor.</p>
                  <div className={styles.accordian}>
                  <Accordion defaultActiveKey="0">
                    <AccordionItem eventKey="0" className={styles.acitem}>
                      <AccordionHeader className={styles.achead}>
                        <FaCheck className={styles.circlech1} />
                        <h2>What is the importance of education?</h2>
                      </AccordionHeader>
                      <AccordionBody className={styles.acbody}>
                        <p>Education plays a crucial role in personal and societal development by imparting knowledge, skills, and values.</p>
                      </AccordionBody>
                    </AccordionItem>
                    <AccordionItem eventKey="1" className={styles.acitem}>
                      <AccordionHeader  className={styles.achead}>
                        <FaCheck className={styles.circlech2} />
                        <h2>What extracurricular activities are available for students?</h2>
                      </AccordionHeader>
                      <AccordionBody className={styles.acbody}>
                        <p>We offer a wide range of extracurricular activities, including sports, arts and crafts, debate club, and more. Students can explore their interests and passions outside of the classroom. Our school believes in a well-rounded education.</p>
                      </AccordionBody>
                    </AccordionItem>
                    <AccordionItem eventKey="2" className={styles.acitem}>
                      <AccordionHeader className={styles.achead}>
                        <FaCheck className={styles.circlech3} />
                        <h2>How do I choose the right school for my child?</h2>
                      </AccordionHeader>
                      <AccordionBody>
                        <p>Selecting the right school involves considering factors such as location, curriculum, facilities, and educational philosophy.</p>
                      </AccordionBody>
                    </AccordionItem>
                    <AccordionItem eventKey="3" className={styles.acitem}>
                      <AccordionHeader className={styles.achead}>
                        <FaCheck className={styles.circlech4} />
                        <h2>What are the admission requirements for your school?</h2>
                      </AccordionHeader>
                      <AccordionBody>
                        <p>Admission requirements may vary depending on the grade level. Generally, we require a completed application form, transcripts, letters of recommendation, and a personal statement. Please visit our website or contact our admissions office for specific details.</p>
                      </AccordionBody>
                    </AccordionItem>
                  </Accordion>
                  </div>
                 </div>
               </Col>
             </Row>
           </Container>
        </section>
        
        <section className={styles.carou}>
           <div className={styles.carousel}>
             <Container className={styles.car}>
               <Row>
                  <Col className={styles.now}>
                    <div className={styles.noww}>
                    <h5>OUR WORKING NOW</h5>
                    <h2>Mastering Skills For Professional<br/> Success</h2>
                    </div>
                  </Col>
               </Row>
               <Row className={styles.paper}>
                <Col>
                  <div className={styles.paper1}>
                    <Sliding />
                  </div>
                </Col>
               </Row>
             </Container>
           </div>
        </section>

        <section className={styles.testimonial}>
           <Container className={styles.testi}>
             <Row>
               <Col>
                  <div className={styles.testhead}>
                    <h5>Our Testimonials</h5>
                    <h2>Voices of Success: Our Community's Testimonials</h2>
                  </div>
               </Col>
             </Row>
             <Row className={styles.testrow}>
               <Col>
                 <Testimonials />
               </Col>
             </Row>
           </Container>
        </section>
        <section className={styles.activity}>
           <Container className={styles.active}>
              <Row className={styles.act}>
                <Col className={styles.acti}>
                   <div className={styles.actii}>
                    <h5>OUR BEST ACTIVITIES</h5>
                    <h2>Engage, Explore, Excel: Our Vibrant Activities</h2>
                   </div>
                   <div className={styles.actiicon}>
                    <p>Business tailored it design, management & support services business agency elit, sed do eiusmod tempor.</p>
                   </div>
                   <Row className={styles.rowone}>
                    <Col className={styles.analy}>
                      <div className={styles.greenn}>
                        <span><SiSimpleanalytics /></span>
                        <h3 className={styles.digi}>Digital Marketing</h3>
                      </div>
                      <div className={styles.purple}>
                        <span><SiSimpleanalytics /></span>
                        <h3>Parenting Bill</h3>
                      </div>
                    </Col>
                    <Col className={styles.analy}>
                    <div className={styles.bluee}>
                        <span><SiSimpleanalytics /></span>
                        <h3>School Directly</h3>
                      </div>
                      <div className={styles.greenn}>
                        <span><SiSimpleanalytics /></span>
                        <h3>Engineering</h3>
                      </div>
                    </Col>
                   </Row>
                </Col>
                <Col className={styles.actimg}>
                   <div className={styles.activimg}>
                     <Image className={styles.study} src={activityimage} alt='activity'/>
                   </div>
                </Col>
              </Row>
           </Container>
        </section>

        <section className={styles.vt}>
           <div className={styles.vtt}>
           <Container className={styles.conn3}>
             <Row>
               <Col>
                 <div className={styles.videotxt}>
                  <a href='#' className={styles.playy}><FaPlay /></a>
                  <h4>Let's See More About Eduor!</h4>
                  <p>There are many variations of passages of agency Lorem Ipsum Fasts injecte.</p>
                  <a href='#' className={styles.commonbtn}>Apply Now</a>
                 </div>
               </Col>
             </Row>
           </Container>
           </div>
        </section>

        <section className={styles.blogging}>
          <Container>
                <Row>
                  <Col className={styles.now}>
                    <h5>LATEST NEWS AND BLOGS</h5>
                    <h2>Our Latest Blog and News. </h2>
                  </Col>
               </Row>
             <Row className={styles.last}>
               <Col>
                 <LastCarousel />
               </Col>
             </Row>
          </Container>
        </section>
     </main>
    </>
  )
}

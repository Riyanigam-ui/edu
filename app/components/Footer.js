import React from 'react'
import styles from "../styles/footer.module.css";
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import logotwo from "../assets/footer_logo.png";
import { LuFacebook } from "react-icons/lu";
import { CiTwitter } from "react-icons/ci";
import { FiLinkedin } from "react-icons/fi";
import { FaPinterestP } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";


export default function Footer() {
  return (
    <>
     <section className={styles.minc}>
     <footer className={styles.tf}>
        <div className={styles.footeroverlay}>
            <Container className={styles.fott}>
             <div className={styles.rows}>
             <Row className={styles.foot1}>
                  <Col className={styles.coll}>
                    <div className={styles.lone}>
                      <Image src={logotwo} alt="Eduor" className={styles.dark} />
                      <p>Nemo enim ipsam voluptate quia voluptas sit aspernatur aut odit aut fugit, sed quia magni this dolores eos qui ratione .</p>
                      <ul className={styles.social}>
                      <li><a href='#'><LuFacebook className={styles.soc} /></a></li>
                      <li><a href='#'><FiLinkedin className={styles.soc} /></a></li>
                      <li><a href='#'><CiTwitter className={styles.soc}/></a></li>
                      <li><a href='#'><FaPinterestP className={styles.soc} /></a></li>
                      <li><a href='#'><IoLogoGoogleplus className={styles.soc} /></a></li>
                    </ul>
                    </div>
                  </Col>
                  <Col className={styles.links}>
                    <h3>Quick Links</h3>
                    <ul>
                       <li><a href='#'>- Best Services</a></li><br/>
                       <li><a href='#'>- Events</a></li><br/>
                       <li><a href='#'>- About Our Company</a></li><br/>
                       <li><a href='#'>- Business Contacts</a></li><br/>
                       <li><a href='#'>- Make An Appointment</a></li>
                    </ul>
                 </Col>
                 </Row>
                 <Row className={styles.foot2}>
                 <Col className={styles.contacts}>
                 <h3>Our Contacts</h3>
                        <p className={styles.pp}>27 Division St, Berakuti, NY 121102, USA</p>
                        <p>
                            <span>
                                Phone: <a href="tel: +8 1440 456 782">
                                +8 1440 456 782 
                                </a>
                            </span>
                            <span>
                                Fax: <a href='tel: +8 846512 456 788'>
                                 +8 846512 456 788
                                </a>
                            </span>
                        </p>
                       <p>
                        <span>Email: <a href='#'>startp@gmail.com</a></span>
                        <span>Website: <a href='#'>yourwebsite.com</a></span>
                       </p>
                 </Col>
                 <Col className={styles.news}>
                   <div className={styles.footercontent}>
                     <h3>News Letter</h3>
                     <p>Our approach to itis unique around know work an we know Get hands on the you like</p>
                     <form className={styles.form}>
                        <input type='text' placeholder="Your Email" />
                        <button className={styles.button}>SEND</button>
                     </form>
                    </div>   
                 </Col>
              </Row>
             </div>
              <Row>
                 <Col>
                    <div className={styles.copy}>
                    <p>Copyright ©Eduor all rights reserved.
                    </p>
                    <ul>
                        <li><a href='#'>Privacy Policy</a></li>
                        <li><a href='#'>About</a></li>
                    </ul>
                    </div>
                 </Col>
              </Row>
         </Container>
        </div>
     </footer>
      <div className={styles.scroll}>
         <div className={styles.scrollbtn} role='button'>
            <a href='#'>GO TO TOP</a>
         </div>
      </div>
      <div className={styles.toastify}></div>
     </section>
    </>
  )
}

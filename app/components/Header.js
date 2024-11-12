import React from 'react';
import styles from "../styles/header.module.css";
import { Container, Row, Col, NavbarCollapse } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import { Navbar,  NavDropdown, NavbarToggle, NavbarBrand, NavLink, DropdownItem } from 'react-bootstrap';
import Image from 'next/image';
import logo from "../assets/logo.png";
import { FaPlay } from "react-icons/fa";

export default function Header() {
  return (
    <>
     <div className={styles.hd}>
     <header className={styles.head}>
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary mb-3" id={styles.menufix}>
          <Container className={styles.conn}>
            <NavbarBrand href="#">
              <Image src={logo} className={styles.light} alt='Eduor' />
            </NavbarBrand>
            <NavbarToggle aria-controls="responsive-navbar-nav"/>
              <NavbarCollapse id='responsive-navbar-nav'>
                <Nav className="me-auto" id={styles.nav}>
                  <NavLink href='#' className={styles.home1}>Home</NavLink>
                  <NavLink href='#' className={styles.home1}>About Us</NavLink>
                  <NavLink href='#' className={styles.home1}>Courses</NavLink>
                  <NavLink href='#' className={styles.home1}>Blogs</NavLink>
                  <NavLink href='#' className={styles.home1}>Pages</NavLink>
                  <NavLink href='#' className={styles.home1}>Contact</NavLink>
                </Nav>
                <Form className={styles.learnmore}>
                  <Button className={styles.learn}>Learn More</Button>
                </Form>
              </NavbarCollapse>
          </Container>
        </Navbar>
     </header>
     <section className={styles.bann}>
           <Container className={styles.container}>
             <Row>
               <Col className={styles.textt}>
                 <h5>Welcome to Eduor!</h5>
                 <h1>Where Learning <br/><span>Becomes</span> Adventure!</h1>
                 <p>Eduor is more than just a platform; it's a nurturing space where education transforms into an exciting adventure. With a passion for igniting curiosity and inspiring young minds.</p>
                 <ul>
                  <li><a href='#' className={styles.read}>READ MORE</a></li>
                  <li><a href='#' className={styles.play}><FaPlay /></a></li>
                 </ul>
               </Col>
             </Row>
           </Container>
          </section>
     </div>
    </>
  )
}

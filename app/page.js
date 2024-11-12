// import Image from "next/image";
// import styles from "./page.module.css";
import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
import Header from "../app/components/Header";
import Footer from "../app/components/Footer";
import Main from "../app/Home/Main";

export default function Home() {
  return (
    <>
     <section>
           <Header />
            <br/>&nbsp;
            <Main />
            <br/>
            <Footer />
     </section>
    </>
  );
}

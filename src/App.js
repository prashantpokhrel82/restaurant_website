import React from "react";
import { NavBar } from "./components";
import "./App.css";
import {
  Header,
  AboutUs,
  Menu,
  Chef,
  Intro,
  Laurels,
  Gallery,
  FindUs,
  Footer,
} from "./container";

const App = () => {
  return (
    <>
      <NavBar />
      <Header />
      <AboutUs />
      <Menu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </>
  );
};

export default App;

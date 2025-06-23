import React from "react";
import Banner from "./components/Banner.jsx";
import Slider from "./components/SliderVideo.jsx";
import { BrowserRouter } from "react-router-dom";
import ImageCard from "./components/ImageSlider.jsx";
import ImageCardTwo from "./components/ImageSliderTwo.jsx";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <ImageCard />
      <Banner />
      <ImageCardTwo />
      <Slider />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
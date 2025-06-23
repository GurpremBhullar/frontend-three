import React from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled, RxDot } from "react-icons/rx";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Link } from "react-router-dom";
import photo1 from "../assets/menscasual.jpg";
import photo2 from "../assets/mensfashion.jpg";
import photo3 from "../assets/suit.jpg";

const dataSlider = [
    {
      id: "1",
      imageUrl: photo1,
      button: {
        text: "Shop Now",
        cssClasses: "text-black",
      },
      body: {
        cssClasses: "text-white",
        mainText: "High Quality",
        subText:
          "You Just Have To Try It",
      },
    },
    {
      id: "2",
      imageUrl: photo2,
      button: {
        text: "Shop Now",
        cssClasses: "text-white",
      },
      body: {
        cssClasses: "text-white",
        alignContent: "right",
        mainText: "Perfume Tips Tricks Two",
        subText:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel ante tellus.",
      },
    },
    {
      id: "3",
      imageUrl:
        photo3,
      button: {
        text: "Shop Now",
        cssClasses: "text-white",
      },
      body: {
        cssClasses: "text-white",
        alignContent: "right",
        mainText: "Perfume Tips Tricks Three",
        subText:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel ante tellus.",
      },
    },
  ];
  
  function Banner() {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const prevButtonHandler = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? dataSlider.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };
  
    const nextButtonHandler = () => {
      const isLastSlide = currentIndex === dataSlider.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };
    return (
      <div className="h-[600px] w-full relative -mt-10">
        {/* Slider */}
        <div
          style={{ "--img-url": `url(${dataSlider[currentIndex].imageUrl})` }}
          className="bg-[image:var(--img-url)] w-full h-full mt-10 bg-cover bg-center duration-500 flex items-center"
        >
          {/* body */}
          {dataSlider[currentIndex].body && (
            <div
              className={twMerge(
                "text-white flex flex-col text-center gap-6 ml-auto p-12 md:p-40 md:text-left",
                dataSlider[currentIndex].body?.cssClasses
              )}
            >
              <h2 className="text-6xl leading-[80px]">
                {dataSlider[currentIndex].body.mainText}
              </h2>
              <p>{dataSlider[currentIndex].body.subText}</p>
              <div>
                <Link
                  className={twMerge(
                    "text-white border-b p-2 ",
                    dataSlider[currentIndex]?.button?.cssClasses
                  )}
                  to="/shop"
                >
                  {dataSlider[currentIndex]?.button.text}
                </Link>
              </div>
            </div>
          )}
        </div>
        {/* Slider */}
  
        {/* prev button */}
        <div className="absolute p-2 text-2xl text-white -translate-y-1/2 rounded-full cursor-pointer top-1/2 -translate-x-0 left-5 bg-primary/50">
          <BsChevronCompactLeft onClick={prevButtonHandler} />
        </div>
  
        {/* Next Button */}
        <div className="absolute p-2 text-2xl text-white -translate-y-1/2 rounded-full cursor-pointer top-1/2 -translate-x-0 right-5 bg-primary/50">
          <BsChevronCompactRight onClick={nextButtonHandler} />
        </div>
        {/* Dots */}
        <div className="absolute flex left-1/2 bottom-2">
          {dataSlider.map((slider, slideIndex) => (
            <div
              className="text-3xl text-white cursor-pointer"
              key={slider.id}
              onClick={() => setCurrentIndex(slideIndex)}
            >
              {slideIndex === currentIndex ? (
                <RxDotFilled className="text-white" />
              ) : (
                <RxDot className="text-white" />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

export default Banner;

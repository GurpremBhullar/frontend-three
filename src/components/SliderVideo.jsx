import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import videothree from "../assets/formal2.mp4";
import videosix from "../assets/fashion6.mp4";
import videoseven from "../assets/fashion7.mp4";
import "../index.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey" }}
      onClick={onClick}
    />
  );
}

function SliderVideo() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div className="mt-2 ml-8 mr-8 bg-black shadow-lg shadow-gray-900">
      <Slider {...settings}>
        <div className="relative h-full w-96">
          <video src={videothree} autoPlay loop muted />
          <div className="absolute top-0 flex flex-col items-center justify-center w-full h-full text-3xl text-white baskervville-sc-regular text-shadow-lg text-shadow-gray-500">
            <h1>Our New Summer Collection</h1>
            <h2 className="underline">by Gurprem Bhullar</h2>
            <div className="flex grid-cols-2">
              <button className="px-2 mt-4 text-sm text-white bg-transparent bg-blue-500 border-4 border-indigo-800 border-double rounded-full shadow-md baskervville-sc-regular shadow-yellow-500">
                Shop Now
              </button>
              <button className="px-2 mt-4 text-sm text-white bg-transparent bg-blue-500 border-4 border-indigo-800 border-double rounded-full shadow-md baskervville-sc-regular shadow-yellow-500">
                Explore
              </button>
            </div>
          </div>
        </div>
        <div className="relative w-full h-full">
          <video
            src={videosix}
            className="w-full h-full"
            autoPlay
            loop
            muted
          />
          <div className="absolute top-0 flex flex-col items-center justify-center w-full h-full text-3xl text-white text-shadow-lg text-shadow-blue-500 baskervville-sc-regular ">
            <h1>Check Out Our New Fragences </h1>
            <h2 className="underline">For Men And Women</h2>
            <div className="flex grid-cols-2">
              <button className="px-2 mt-4 text-sm text-white bg-transparent bg-blue-500 border-4 border-blue-800 border-double rounded-full shadow-lg baskervville-sc-regular shadow-gray-500">
                Shop Now
              </button>
              <button className="px-2 mt-4 text-sm text-white bg-transparent bg-blue-500 border-4 border-blue-800 border-double rounded-full shadow-lg baskervville-sc-regular shadow-gray-500">
                Explore
              </button>
            </div>
          </div>
        </div>
        <div className="relative w-full h-full">
          <video
            src={videothree}
            className="w-full h-full"
            autoPlay
            loop
            muted
          />
          <div className="absolute top-0 flex flex-col items-center justify-center w-full h-full text-3xl text-white baskervville-sc-regular">
            <h1>The Best Materials</h1>
            <h2 className="underline">Made For Summer Time and The Outdoors</h2>
            <div className="flex grid-cols-2">
              <button className="px-2 mt-4 text-sm text-white bg-transparent bg-blue-500 border-4 border-purple-800 border-double rounded-full shadow-md baskervville-sc-regular shadow-purple-400">
                Shop Now
              </button>
              <button className="px-2 mt-4 text-sm text-white bg-transparent bg-blue-500 border-4 border-purple-800 border-double rounded-full shadow-md baskervville-sc-regular shadow-purple-400">
                Explore
              </button>
            </div>
          </div>
        </div>
        <div className="relative w-full h-full">
          <video
            src={videoseven}
            className="w-full h-full"
            autoPlay
            loop
            muted
          />
          <div className="absolute top-0 flex flex-col items-center justify-center w-full h-full text-3xl text-white baskervville-sc-regular">
            <h1>Our New Summer Collection</h1>
            <h2 className="underline">by Gurprem Bhullar</h2>
            <div className="flex grid-cols-2">
              <button className="px-2 mt-4 text-sm text-white bg-transparent bg-blue-500 border-4 border-purple-800 border-double rounded-full shadow-md baskervville-sc-regular shadow-purple-400">
                Shop Now
              </button>
              <button className="px-2 mt-4 text-sm text-white bg-transparent bg-blue-500 border-4 border-purple-800 border-double rounded-full shadow-md baskervville-sc-regular shadow-purple-400">
                Explore
              </button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default SliderVideo;

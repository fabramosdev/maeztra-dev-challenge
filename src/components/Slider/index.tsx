import React, { useState, useEffect } from "react";

import "./styles.css";

import PrevSlide from "../../assets/icon-prev.svg";
import NextSlide from "../../assets/icon-next.svg";
import Img1Desk from "../../assets/img-slider-desktop-01.png";
import Img1Mob from "../../assets/img-slider-mobile-01.png";
import Img2Desk from "../../assets/img-slider-desktop-02.png";
import Img2Mob from "../../assets/img-slider-mobile-02.png";
import Img3Desk from "../../assets/img-slider-desktop-03.png";
import Img3Mob from "../../assets/img-slider-mobile-03.png";

type Props = {
  slides: {
    imageUrlDesktop: string;
    imageUrlMobile: string;
    title: string;
    text: string;
    buttonAction: () => void;
  }[];
  mobile: boolean;
};

const SliderContainer: React.FC<Props> = ({ slides, mobile }) => {
  const [index, setIndex] = useState(0);

  const previous = () => {
    const newIndex = index - 1;
    if (newIndex < 0) {
      setIndex(slides.length - 1);
    }
  };

  const next = () => {
    setIndex((index + 1) % slides.length);
  };

  const handleClick = (idx: number) => {
    setIndex(idx);
  };

  return (
    <div className="slider">
      <button className="previous" onClick={previous}>
        <img src={PrevSlide} alt="Prev"></img>
      </button>
      <div className="slide-content">
        <img
          src={
            mobile
              ? slides[index].imageUrlMobile
              : slides[index].imageUrlDesktop
          }
          alt="Slide"
        />
        <h2>{slides[index].title}</h2>
        <p>{slides[index].text}</p>
        <button className="btn-slider" onClick={slides[index].buttonAction}>
          Conferir
        </button>
      </div>
      <button className="next" onClick={next}>
        <img src={NextSlide} alt="Next"></img>
      </button>
      <div className="dots">
        {slides.map((_slide, idx) => (
          <div
            key={idx}
            className={`dot ${idx === index ? "active" : ""}`}
            onClick={() => handleClick(idx)}
          ></div>
        ))}
      </div>
    </div>
  );
};

const Slider = () => {
  const [mobile, setMobile] = useState(window.innerWidth <= 768);

  const slides = [
    {
      imageUrlDesktop: Img1Desk,
      imageUrlMobile: Img1Mob,
      title: "Promoções de Outono",
      text: "Confira os melhores looks para combinar com você nesse Outono",
      buttonAction: () => {},
    },
    {
      imageUrlDesktop: Img2Desk,
      imageUrlMobile: Img2Mob,
      title: "Promoções de Outono",
      text: "Confira os melhores looks para combinar com você nesse Outono",
      buttonAction: () => {},
    },
    {
      imageUrlDesktop: Img3Desk,
      imageUrlMobile: Img3Mob,
      title: "Promoções de Outono",
      text: "Confira os melhores looks para combinar com você nesse Outono",
      buttonAction: () => {},
    },
  ];

  const checkMobile = () => {
    setMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <div>
      <SliderContainer slides={slides} mobile={mobile} />
    </div>
  );
};

export { Slider };

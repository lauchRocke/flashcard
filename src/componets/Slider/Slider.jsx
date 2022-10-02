import React, { useState } from "react";

import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import FlashCardsHolder from "../Flashcard/FlashCardsHolder";
import list from '../Flashcard/data'

import styled from "styled-components";

const SlideImage = styled.img`
  width: 400px;
  height: 300px;
  object-fit: cover;
`;

 const StyledSlider = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <StyledSlider>
      <FaChevronLeft className="leftArrow" onClick={prevSlide} />
      <FaChevronRight className="rightArrow" onClick={nextSlide} />
      {slides.map((slide, index) => {
        return (
          <div key={index}>
            {index === current && <FlashCardsHolder list={list}/> }
          </div>
        );
      })}
    </StyledSlider>
  );
};

export default Slider;
import React, { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "phosphor-react";

import { StyledTestimonial } from "./style";
import TestimonialCard from "../UI/TestinomialCard";

const Testimonial = ({ testimonialData = [] }) => {
  const [currentID, setCurrentID] = useState(0);

  const goLeft = () => {
    if (currentID >= 0 && currentID < testimonialData.length - 1) {
      setCurrentID(currentID + 1);
    } else {
      setCurrentID(0);
    }
  };

  const goRight = () => {
    if (currentID > 0 && currentID < testimonialData.length) {
      setCurrentID(currentID - 1);
    } else {
      setCurrentID(testimonialData.length - 1);
    }
  };

  useEffect(() => {
    let interval = setInterval(() => {
      goLeft();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentID]);

  return (
    <StyledTestimonial>
      <div className="overlay-wrapper"></div>
      <div className="controls">
        <div className="control-left" onClick={goLeft}>
          <ArrowLeft className="arrow-left-icon icon" />
        </div>
        <div className="control-right" onClick={goRight}>
          <ArrowRight className="arrow-right-icon icon" />
        </div>
      </div>

      <div className="testimonial-view-placeholder">
        <TestimonialCard
          key={testimonialData[currentID]?.id}
          imgUrl={testimonialData[currentID]?.imgUrl}
          name={testimonialData[currentID]?.name}
          value={testimonialData[currentID]?.value}
        />
      </div>
    </StyledTestimonial>
  );
};

export default Testimonial;

import React from "react";
import { Typography } from "antd";

import { StyledTestimonialCard } from "./style";

const { Title } = Typography;

const TestimonialCard = ({ imgUrl, value, name }) => {
  return (
    <StyledTestimonialCard imgUrl={imgUrl}>
      <div className="testimonial-picture"></div>
      <Title level={3} className="testimonial-name text-value-rt">
        {name}
      </Title>
      <Title level={5} className="testimonial-value text-value-rt">
        {value}
      </Title>
      <span>------------------------</span>
    </StyledTestimonialCard>
  );
};

export default TestimonialCard;

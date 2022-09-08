import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Typography, Divider, Button } from "antd";

import { useCreatePageContext } from "../../../../context/CreatePageContext";
import { StyledInputWrapper } from "../style";
import TestimonialField from "./TestimonialFields";

const { Text } = Typography;
const MEMBER_SIZE = 5;

const TestimonialInput = () => {
  const { testimonialConfig, testimonialDispatch, CONFIG_CONSTANT } =
    useCreatePageContext();
  const [addMoreInput, setAddMoreInput] = useState(0);

  const loopSize =
    testimonialConfig.TESTIMONIAL.data.length > 0
      ? testimonialConfig.TESTIMONIAL.data
      : Array(MEMBER_SIZE).fill(uuidv4());

  const getTestimonialData = (data) => {
    testimonialDispatch({
      type: CONFIG_CONSTANT.TESTIMONIAL_DATA,
      payload: data,
    });
  };

  return (
    <StyledInputWrapper>
      {/* <Text className="input-label text-value-rt">Testimonial Input</Text>
      <Divider type="horizontal" /> */}
      {loopSize.map((data) => (
        <TestimonialField
          id={data?.id || data}
          key={data?.id || data}
          testimonialImgUrl={data?.imgUrl}
          testimonialValue={data?.value}
          testimonialName={data?.name}
          getTestimonialData={getTestimonialData}
        />
      ))}
      {Array(addMoreInput)
        .fill(uuidv4())
        .map((data) => (
          <TestimonialField
            id={data}
            key={data}
            getTestimonialData={getTestimonialData}
          />
        ))}
      <Button onClick={() => setAddMoreInput(addMoreInput + 1)}>
        Add more fields
      </Button>
    </StyledInputWrapper>
  );
};

export default TestimonialInput;

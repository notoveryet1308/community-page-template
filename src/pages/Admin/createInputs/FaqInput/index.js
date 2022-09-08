import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Typography, Divider, Button } from "antd";

import { useCreatePageContext } from "../../../../context/CreatePageContext";
import { StyledInputWrapper } from "../style";
import FaqFiled from "./FaqField";

const { Text } = Typography;
const MEMBER_SIZE = 5;

const FaqInput = () => {
  const { faqConfig, faqDispatch, CONFIG_CONSTANT } = useCreatePageContext();
  const [addMoreInput, setAddMoreInput] = useState(0);

  const loopSize =
    faqConfig.FAQ.data.length > 0
      ? faqConfig.FAQ.data
      : Array(MEMBER_SIZE).fill(uuidv4());

  const getTestimonialData = (data) => {
    faqDispatch({
      type: CONFIG_CONSTANT.FAQ_DATA,
      payload: data,
    });
  };

  return (
    <StyledInputWrapper>
      {/* <Text className="input-label text-value-rt">FAQ Input</Text>
      <Divider type="horizontal" /> */}
      {loopSize.map((data) => (
        <FaqFiled
          id={data?.id || data}
          key={data?.id || data}
          faqAnswer={data?.answer}
          faqQuestion={data?.question}
          getFaqData={getTestimonialData}
        />
      ))}
      {Array(addMoreInput)
        .fill(uuidv4())
        .map((data) => (
          <FaqFiled id={data} key={data} getFaqData={getTestimonialData} />
        ))}
      <Button onClick={() => setAddMoreInput(addMoreInput + 1)}>
        Add more fields
      </Button>
    </StyledInputWrapper>
  );
};

export default FaqInput;

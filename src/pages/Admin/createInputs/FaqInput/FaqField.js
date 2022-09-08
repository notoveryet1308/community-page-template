import React, { useState } from "react";
import { Input, Typography, Button, Alert, Divider } from "antd";
import { StyledCardInput } from "../style";

const { Text } = Typography;

const FaqField = ({ id, faqQuestion, faqAnswer, getFaqData }) => {
  const [question, setQuestion] = useState(faqQuestion);
  const [answer, setAnswer] = useState(faqAnswer);

  const [fieldEmpty, setFieldEmpty] = useState(false);

  const handleFaqData = () => {
    if (question && answer) {
      const data = { question, answer, id };
      getFaqData(data);
    } else {
      setFieldEmpty(true);
    }
  };

  const checkEmptyField = () => {
    if (question && answer) {
      setFieldEmpty(false);
    }
  };

  return (
    <StyledCardInput>
      <Text className="text-value-rt">Question</Text>
      <Input
        type="text"
        value={question}
        onChange={({ target }) => {
          setQuestion(target.value);
          checkEmptyField();
        }}
      />
      <Text className="text-value-rt">Answer</Text>
      <Input
        type="text"
        value={answer}
        onChange={({ target }) => {
          setAnswer(target.value);
          checkEmptyField();
        }}
      />
      {fieldEmpty && <Alert type="error" description="Fill all input fields" />}
      <Button type="primary" className="add-input-btn" onClick={handleFaqData}>
        Add
      </Button>
      <Divider type="horizontal" className="divider-hor" />
    </StyledCardInput>
  );
};

export default FaqField;

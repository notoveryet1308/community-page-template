import React, { useState } from "react";
import { Input, Typography, Button, Alert, Divider } from "antd";
import { StyledCardInput } from "../style";

const { Text } = Typography;

const TestimonialInput = ({
  id,
  testimonialName,
  testimonialValue,
  testimonialImgUrl,
  getTestimonialData,
}) => {
  const [imgUrl, setImgUrl] = useState(testimonialImgUrl);
  const [name, setName] = useState(testimonialName);
  const [value, setValue] = useState(testimonialValue);
  const [fieldEmpty, setFieldEmpty] = useState(false);

  const handleCardData = () => {
    if (imgUrl && name && value) {
      const data = { imgUrl, name, value, id };
      getTestimonialData(data);
    } else {
      setFieldEmpty(true);
    }
  };

  const checkEmptyField = () => {
    if (imgUrl && name && value) {
      setFieldEmpty(false);
    }
  };

  return (
    <StyledCardInput>
      <Text className="text-value-rt">Image Url</Text>
      <Input
        type="url"
        value={imgUrl}
        onChange={({ target }) => {
          setImgUrl(target.value);
          checkEmptyField();
        }}
      />
      <Text className="text-value-rt">Name</Text>
      <Input
        type="text"
        value={name}
        onChange={({ target }) => {
          setName(target.value);
          checkEmptyField();
        }}
      />
      <Text className="text-value-rt">Description</Text>
      <Input
        type="text"
        value={value}
        onChange={({ target }) => {
          setValue(target.value);
          checkEmptyField();
        }}
      />
      {fieldEmpty && <Alert type="error" description="Fill all input fields" />}
      <Button type="primary" className="add-input-btn" onClick={handleCardData}>
        Add
      </Button>
      <Divider type="horizontal" className="divider-hor" />
    </StyledCardInput>
  );
};

export default TestimonialInput;

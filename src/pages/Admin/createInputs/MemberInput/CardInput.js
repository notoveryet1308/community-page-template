import React, { useState } from "react";
import { Input, Typography, Button, Alert, Divider } from "antd";
import { StyledCardInput } from "../style";

const { Text } = Typography;

const CardInput = ({
  id,
  getCardData,
  memberImg,
  memberName,
  memberDesignation,
}) => {
  const [imgUrl, setImgUrl] = useState(memberImg);
  const [name, setName] = useState(memberName);
  const [designation, setDesignation] = useState(memberDesignation);
  const [fieldEmpty, setFieldEmpty] = useState(false);

  const handleCardData = () => {
    if (imgUrl && name && designation) {
      const data = { imgUrl, name, designation, id };
      getCardData(data);
    } else {
      setFieldEmpty(true);
    }
  };

  const checkEmptyField = () => {
    if (imgUrl && name && designation) {
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
      <Text className="text-value-rt">Designation</Text>
      <Input
        type="text"
        value={designation}
        onChange={({ target }) => {
          setDesignation(target.value);
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

export default CardInput;

import React, { useState } from "react";
import { Input, Typography, Button, Alert, Divider } from "antd";
import { StyledCardInput } from "../style";

const { Text } = Typography;

const ExploreGroupFields = ({
  getGroupData,
  id,
  groupName,
  groupDescription,
  groupSize,
  groupThumbnail,
}) => {
  const [name, setName] = useState(groupName);
  const [description, setDescription] = useState(groupDescription);
  const [size, setSize] = useState(groupSize);
  const [thumbnailUrl, setThumbnailUrl] = useState(groupThumbnail);

  const [fieldEmpty, setFieldEmpty] = useState(false);

  const handleEventData = () => {
    if (name && description && size && thumbnailUrl) {
      const data = {
        id,
        name,
        description,
        size,
        thumbnailUrl,
      };
      getGroupData(data);
    } else {
      setFieldEmpty(true);
    }
  };

  const checkEmptyField = () => {
    if (name && description && size && thumbnailUrl) {
      setFieldEmpty(false);
    }
  };

  return (
    <StyledCardInput>
      <Text className="text-value-rt"> Group name</Text>
      <Input
        type="text"
        value={name}
        onChange={({ target }) => {
          setName(target.value);
          checkEmptyField();
        }}
      />
      <Text className="text-value-rt">Group Description</Text>
      <Input
        type="text"
        value={description}
        onChange={({ target }) => {
          setDescription(target.value);
          checkEmptyField();
        }}
      />
      <Text className="text-value-rt">Group size</Text>
      <Input
        type="text"
        value={size}
        onChange={({ target }) => {
          setSize(target.value);
          checkEmptyField();
        }}
      />
      <Text className="text-value-rt">Group image url</Text>
      <Input
        type="url"
        value={thumbnailUrl}
        onChange={({ target }) => {
          setThumbnailUrl(target.value);
          checkEmptyField();
        }}
      />

      {fieldEmpty && <Alert type="error" description="Fill all input fields" />}
      <Button
        type="primary"
        className="add-input-btn"
        onClick={handleEventData}
      >
        Add
      </Button>
      <Divider type="horizontal" className="divider-hor" />
    </StyledCardInput>
  );
};

export default ExploreGroupFields;

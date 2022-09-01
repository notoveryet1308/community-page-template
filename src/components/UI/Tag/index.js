import React from "react";
import { Typography } from "antd";

import { StyledTag } from "./style";

const { Text } = Typography;

const Tag = ({ bgColor, value }) => {
  return (
    <StyledTag bgColor={bgColor}>
      <Text>{value}</Text>
    </StyledTag>
  );
};

export default Tag;

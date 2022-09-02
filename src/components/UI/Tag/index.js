import React from "react";
import { Typography } from "antd";

import { StyledTag } from "./style";

const { Text } = Typography;

const Tag = ({ bgColor, value, type }) => {
  return (
    <StyledTag bgColor={bgColor} className={`${type}-tag`}>
      <Text>{value}</Text>
    </StyledTag>
  );
};

export default Tag;

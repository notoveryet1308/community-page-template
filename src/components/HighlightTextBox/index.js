import React from "react";
import { Typography } from "antd";

import { StyledHighlightTextBox } from "./style";

const { Title } = Typography;

const HighlightTextBox = ({ highlightText, bgColor }) => {
  return (
    <StyledHighlightTextBox bgColor={bgColor}>
      <Title level={2} className="highlight-text text-value-rt">
        {highlightText}
      </Title>
    </StyledHighlightTextBox>
  );
};

export default HighlightTextBox;

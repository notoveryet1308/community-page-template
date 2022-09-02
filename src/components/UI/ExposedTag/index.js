import React from "react";
import { Typography } from "antd";

import { StyledExposedTag } from "./style";

const { Title } = Typography;

const ExposedTag = ({ value }) => {
  return (
    <StyledExposedTag>
      <Title level={5} className="exposed-tag-value text-value-rt">
        {value}
      </Title>
    </StyledExposedTag>
  );
};

export default ExposedTag;

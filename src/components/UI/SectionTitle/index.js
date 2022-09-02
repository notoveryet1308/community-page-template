import React, { useEffect, useRef } from "react";
import { Typography } from "antd";

import { StyledSectionTitle } from "./style";
import { useInView } from "../../../utils/hooks";

const { Title } = Typography;

const SectionTitle = ({ value = "About Us", scrollId, className }) => {
  const { inView } = useInView(scrollId);

  return (
    <StyledSectionTitle id={scrollId} inView={inView} className={className}>
      <Title className="section-title-text text-value-rt">{value}</Title>
    </StyledSectionTitle>
  );
};

export default SectionTitle;

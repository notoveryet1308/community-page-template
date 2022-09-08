import React, { useState } from "react";
import { Typography } from "antd";
import { CaretRight, CaretDown } from "phosphor-react";

import { StyledAccordion } from "./style";

const { Title } = Typography;

const Accordion = ({ head, body, className = "" }) => {
  const [isExpanded, setExpended] = useState(false);

  return (
    <StyledAccordion isExpanded={isExpanded} className={className}>
      <div className="accordion-head" onClick={() => setExpended(!isExpanded)}>
        <span className="accordion-head-icon">
          {!isExpanded ? (
            <CaretRight className="caret-right icon" weight="fill" />
          ) : (
            <CaretDown className="caret-down icon" weight="fill" />
          )}
        </span>
        <Title className="head-title text-value-rt">{head}</Title>
      </div>
      <div className="accordion-body">
        <div className="accordion-body-content">
          <Title level={5} className="body-text text-value-rt">
            {body}
          </Title>
        </div>
      </div>
    </StyledAccordion>
  );
};

export default Accordion;

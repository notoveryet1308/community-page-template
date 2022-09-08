import React from "react";
import Accordion from "../UI/Accordion";
import SectionTitle from "../UI/SectionTitle";
import { StyledFAQ } from "./style";

const FAQ = ({ faqData = [] }) => {
  return (
    <StyledFAQ>
      <SectionTitle
        value="Frequently Asked Questions"
        // scrollId="faq-title-id"
        className="faq-title"
      />
      <div className="faq-wrapper">
        {faqData.map(({ question, answer, id }) => (
          <Accordion head={question} body={answer} key={id} />
        ))}
      </div>
    </StyledFAQ>
  );
};

export default FAQ;

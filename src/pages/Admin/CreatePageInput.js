import React, { useState } from "react";
import { Link } from "react-router-dom";
import { List } from "phosphor-react";
import { Typography, Button } from "antd";

import { StyledEditButton, StyledDrawer } from "./style";
import HeaderInput from "./createInputs/HeaderInput";
import HeroSectionInput from "./createInputs/HeroSectionInput";
import HighlightBoxInput from "./createInputs/HIghlightBoxInput";
import AboutUsInput from "./createInputs/AboutUsInput";
import MemberInput from "./createInputs/MemberInput";
import EventInput from "./createInputs/EventInput";
import { useCreatePageContext } from "../../context/CreatePageContext";
import ExploreGroupInput from "./createInputs/ExploreGroupInput";
import TestimonialInput from "./createInputs/TestimonialInput";
import FaqInput from "./createInputs/FaqInput";
import Accordion from "../../components/UI/Accordion";

const { Title } = Typography;

const CreatePageInput = ({ drawerVisible, toggleDrawer }) => {
  const {
    headerDispatch,
    heroDispatch,
    memberDispatch,
    highlightBoxDispatch,
    eventDispatch,
    aboutUsDispatch,
    exploreGroupDispatch,
    testimonialDispatch,
    faqDispatch,
  } = useCreatePageContext();

  const reset = () => {
    headerDispatch({ type: "RESET", payload: "" });
    heroDispatch({ type: "RESET", payload: "" });
    memberDispatch({ type: "RESET", payload: "" });
    highlightBoxDispatch({ type: "RESET", payload: "" });
    eventDispatch({ type: "RESET", payload: "" });
    aboutUsDispatch({ type: "RESET", payload: "" });
    exploreGroupDispatch({ type: "RESET", payload: "" });
    testimonialDispatch({ type: "RESET", payload: "" });
    faqDispatch({ type: "RESET", payload: "" });
  };
  return (
    <>
      {!drawerVisible && (
        <StyledEditButton>
          <List className="list-icon phosphor-icon" onClick={toggleDrawer} />
        </StyledEditButton>
      )}
      <StyledDrawer
        visible={drawerVisible}
        onClose={toggleDrawer}
        width="400"
        placement="left"
        mask={false}
        title={
          <Title level={5} className="create-page-title text-value-rt">
            Create new page
          </Title>
        }
      >
        <div className="create-inputs-fields">
          <Accordion
            head="Head Input"
            className="create-input-accordion"
            body={<HeaderInput />}
          />
          <Accordion
            head="Hero Input"
            className="create-input-accordion"
            body={<HeroSectionInput />}
          />
          <Accordion
            head="Highlight box Input"
            className="create-input-accordion"
            body={<HighlightBoxInput />}
          />
          <Accordion
            head="About Input"
            className="create-input-accordion"
            body={<AboutUsInput />}
          />
          <Accordion
            head="Member Input"
            className="create-input-accordion"
            body={<MemberInput />}
          />
          <Accordion
            head="Event Input"
            className="create-input-accordion"
            body={<EventInput />}
          />
          <Accordion
            head="Explore Input"
            className="create-input-accordion"
            body={<ExploreGroupInput />}
          />
          <Accordion
            head="Testimonial Input"
            className="create-input-accordion"
            body={<TestimonialInput />}
          />
          <Accordion
            head="Faq Input"
            className="create-input-accordion faq-accordion"
            body={<FaqInput />}
          />
        </div>
        <div className="create-page-actions">
          <div className="action-wrapper">
            <Button onClick={reset}>Reset</Button>
            <Link className="publish-btn" target="_blank" to="/published">
              Publish
            </Link>
          </div>
        </div>
      </StyledDrawer>
    </>
  );
};

export default CreatePageInput;

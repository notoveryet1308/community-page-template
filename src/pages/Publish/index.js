import React from "react";

import { Divider } from "antd";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import { useCreatePageContext } from "../../context/CreatePageContext";
import HighlightTextBox from "../../components/HighlightTextBox";
import AboutUs from "../../components/AboutUs";
import Members from "../../components/Members";
import EventSection from "../../components/EventSection";
import ExploreGroup from "../../components/ExploreGroup";
import TestimonialSection from "../../components/Testimonial";
import FAQSection from "../../components/FAQ";

import { StyledPublish } from "./style";

const Publish = () => {
  const {
    headerConfig,
    heroConfig,
    highlightBoxConfig,
    aboutUsConfig,
    eventConfig,
    memberConfig,
    exploreGroupConfig,
    testimonialConfig,
    faqConfig,
  } = useCreatePageContext();

  return (
    <StyledPublish>
      <Header
        logoUrl={headerConfig.HEADER.logo}
        communityName={headerConfig.HEADER.communityName}
        primaryColor={headerConfig.primaryColor}
      />
      <Hero
        heroImgUrl={heroConfig.HERO.heroImgUrl}
        mainText={heroConfig.HERO.mainText}
        subText={heroConfig.HERO.subText}
        tagData={[
          heroConfig.HERO.tagData_one,
          heroConfig.HERO.tagData_two,
          heroConfig.HERO.tagData_three,
        ]}
        primaryColor={headerConfig.primaryColor}
      />
      <HighlightTextBox
        highlightText={highlightBoxConfig.HIGHLIGHT_BOX.text}
        bgColor={highlightBoxConfig.HIGHLIGHT_BOX.bgColor}
      />
      <AboutUs
        description={aboutUsConfig.ABOUT_US.description}
        primaryColor={headerConfig.primaryColor}
        tagData={[
          aboutUsConfig.ABOUT_US.tagData_one,
          aboutUsConfig.ABOUT_US.tagData_two,
          aboutUsConfig.ABOUT_US.tagData_three,
          aboutUsConfig.ABOUT_US.tagData_four,
          aboutUsConfig.ABOUT_US.tagData_five,
        ]}
      />
      <Members
        memberData={memberConfig.MEMBERS.data}
        primaryColor={headerConfig.primaryColor}
      />
      <EventSection
        eventData={eventConfig.EVENTS.data}
        primaryColor={headerConfig.primaryColor}
      />
      <div className="home-horizontal-divider">
        <Divider type="horizontal" />
      </div>

      <ExploreGroup
        exploreGroupData={exploreGroupConfig.EXPLORE_GROUP.data}
        primaryColor={headerConfig.primaryColor}
      />
      <TestimonialSection
        testimonialData={testimonialConfig.TESTIMONIAL.data}
      />
      <FAQSection faqData={faqConfig.FAQ.data} />
    </StyledPublish>
  );
};

export default Publish;

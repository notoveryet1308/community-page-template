import React, { useState } from "react";
import { Divider } from "antd";

import CreatePageInput from "./CreatePageInput";

import { StyledAdmin } from "./style";
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

const Admin = () => {
  const {
    headerConfig,
    heroConfig,
    highlightBoxConfig,
    aboutUsConfig,
    memberConfig,
    eventConfig,
    exploreGroupConfig,
    testimonialConfig,
    faqConfig,
  } = useCreatePageContext();

  const [isOpen, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!isOpen);
  };

  return (
    <StyledAdmin drawerInputActive={isOpen}>
      <CreatePageInput drawerVisible={isOpen} toggleDrawer={toggleDrawer} />
      <div className="create-page-preview">
        {!headerConfig.noData && (
          <Header
            logoUrl={headerConfig.HEADER.logo}
            communityName={headerConfig.HEADER.communityName}
          />
        )}
        {!heroConfig.noData && (
          <Hero
            primaryColor={headerConfig.primaryColor}
            heroImgUrl={heroConfig.HERO.heroImgUrl}
            mainText={heroConfig.HERO.mainText}
            tagData={[
              heroConfig.HERO.tagData_one,
              heroConfig.HERO.tagData_two,
              heroConfig.HERO.tagData_three,
            ]}
            subText={heroConfig.HERO.subText}
          />
        )}
        {!highlightBoxConfig.noData && (
          <HighlightTextBox
            bgColor={highlightBoxConfig.HIGHLIGHT_BOX.bgColor}
            highlightText={highlightBoxConfig.HIGHLIGHT_BOX.text}
          />
        )}
        {!aboutUsConfig.noData && (
          <AboutUs
            description={aboutUsConfig.ABOUT_US.description}
            tagData={[
              aboutUsConfig.ABOUT_US.tagData_one,
              aboutUsConfig.ABOUT_US.tagData_two,
              aboutUsConfig.ABOUT_US.tagData_three,
              aboutUsConfig.ABOUT_US.tagData_four,
              aboutUsConfig.ABOUT_US.tagData_five,
            ]}
          />
        )}
        {!memberConfig.noData && (
          <Members memberData={memberConfig.MEMBERS.data} />
        )}
        {!eventConfig.noData && (
          <EventSection eventData={eventConfig.EVENTS.data} />
        )}
        <div className="home-horizontal-divider">
          <Divider type="horizontal" />
        </div>
        {!exploreGroupConfig.noData && (
          <ExploreGroup
            exploreGroupData={exploreGroupConfig.EXPLORE_GROUP.data}
          />
        )}
        {!testimonialConfig.noData && (
          <TestimonialSection
            testimonialData={testimonialConfig.TESTIMONIAL.data}
          />
        )}
        {!faqConfig.noData && <FAQSection faqData={faqConfig.FAQ.data} />}
      </div>
    </StyledAdmin>
  );
};

export default Admin;

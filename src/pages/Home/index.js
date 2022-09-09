import { Divider } from "antd";
import React from "react";
import AboutUs from "../../components/AboutUs";
import EventSection from "../../components/EventSection";
import ExploreGroup from "../../components/ExploreGroup";
import FAQSection from "../../components/FAQ";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import HighlightTextBox from "../../components/HighlightTextBox";
import Members from "../../components/Members";
import Testimonial from "../../components/Testimonial";
import { LocalConfig } from "../../config";
import { StyledHomePage } from "./style";

const {
  HEADER,
  HERO,
  primaryColor,
  HIGHLIGHT_BOX,
  ABOUT_US,
  MEMBERS,
  EVENTS,
  EXPLORE_GROUP,
  TESTIMONIAL,
  FAQ,
} = LocalConfig;

const Home = () => {
  return (
    <StyledHomePage>
      <Header
        logoUrl={HEADER.logo}
        communityName={HEADER.communityName}
        primaryColor={primaryColor}
      />
      <Hero
        heroImgUrl={HERO.heroImgUrl}
        mainText={HERO.mainText}
        subText={HERO.subText}
        tagData={HERO.tagData}
        primaryColor={primaryColor}
      />
      <HighlightTextBox
        highlightText={HIGHLIGHT_BOX.text}
        bgColor={HIGHLIGHT_BOX.bgColor}
      />
      <AboutUs
        description={ABOUT_US.description}
        primaryColor={primaryColor}
        tagData={[
          ABOUT_US.tagData_one,
          ABOUT_US.tagData_two,
          ABOUT_US.tagData_three,
          ABOUT_US.tagData_four,
          ABOUT_US.tagData_five,
        ]}
      />
      <Members memberData={MEMBERS.data} primaryColor={primaryColor} />
      <EventSection eventData={EVENTS.data} primaryColor={primaryColor} />
      <div className="home-horizontal-divider">
        <Divider type="horizontal" />
      </div>
      <ExploreGroup
        exploreGroupData={EXPLORE_GROUP.data}
        primaryColor={primaryColor}
      />
      <Testimonial testimonialData={TESTIMONIAL.data} />
      <FAQSection faqData={FAQ.data} />
      <Footer />
    </StyledHomePage>
  );
};

export default Home;

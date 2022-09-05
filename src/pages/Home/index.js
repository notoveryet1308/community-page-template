import React from "react";
import AboutUs from "../../components/AboutUs";
import EventSection from "../../components/EventSection";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import HighlightTextBox from "../../components/HighlightTextBox";
import Members from "../../components/Members";
import { LocalConfig } from "../../config";
import { StyledHomePage } from "./style";

const { HEADER, HERO, primaryColor, HIGHLIGHT_BOX, ABOUT_US, MEMBERS, EVENTS } =
  LocalConfig;

const Home = () => {
  return (
    <StyledHomePage>
      <Header logoUrl={HEADER.logo} communityName={HEADER.communityName} />
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
        tagData={[
          ABOUT_US.tagData_one,
          ABOUT_US.tagData_two,
          ABOUT_US.tagData_three,
          ABOUT_US.tagData_four,
          ABOUT_US.tagData_five,
        ]}
      />
      <Members memberData={MEMBERS.data} />
      <EventSection eventData={EVENTS.data} />
    </StyledHomePage>
  );
};

export default Home;

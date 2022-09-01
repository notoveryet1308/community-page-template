import React from "react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import HighlightTextBox from "../../components/HighlightTextBox";
import { LocalConfig } from "../../config";
import { StyledHomePage } from "./style";

const { HEADER, HERO, primaryColor, HIGHLIGHT_BOX } = LocalConfig;

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
    </StyledHomePage>
  );
};

export default Home;

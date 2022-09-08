import React from "react";
import * as chromatism from "chromatism";
import { Typography, Button } from "antd";
import { ArrowRight } from "phosphor-react";

import { StyledHeroSection } from "./style";
import Tag from "../UI/Tag";

const { Title, Text } = Typography;

const Hero = ({
  heroImgUrl,
  mainText,
  subText,
  tagData = [],
  primaryColor,
}) => {
  const compColors = primaryColor && chromatism.triad(primaryColor).rgb;

  return (
    <StyledHeroSection bgImg={heroImgUrl}>
      <div className="hero-section-left">
        <Title className="hero-main-text text-value-rt">{mainText}</Title>
        <Text className="hero-aub-text text-value-rt">{subText}</Text>
        <Button type="primary" className="hero-cta">
          <span>Become A Planter</span>
          <ArrowRight className="arrow-right phosphor-icon-rt" />
        </Button>
      </div>
      <div className="hero-section-right">
        {tagData.map((data, id) => (
          <div className={`tag-id-${id} hero-tag`}>
            <Tag {...data} bgColor={compColors[id]} type="filled" />
          </div>
        ))}
      </div>
    </StyledHeroSection>
  );
};

export default Hero;

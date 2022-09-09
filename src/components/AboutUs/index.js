import React from "react";
import { Typography, Button } from "antd";

import SectionTitle from "../UI/SectionTitle";
import Tag from "../UI/Tag";
import { StyledAboutUs } from "./style";

const { Text, Title } = Typography;

const AboutUs = ({ description, tagData = [], primaryColor }) => {
  return (
    <StyledAboutUs primaryColor={primaryColor}>
      <SectionTitle
        value="About Us"
        scrollId="about-us-section"
        className="about-us-title"
        primaryColor={primaryColor}
      />
      <div className="about-us-content-wrapper">
        <div className="about-us-info">
          <Text className="description text-value-rt">{description}</Text>
          <Text className="description text-value-rt">Curious Enough..?</Text>
          <Button type="primary" className="read-more-btn">
            <span>Read More</span>
          </Button>
        </div>
        <div className="about-us-adjective">
          <Title level={5} className="why-join-title text-value-rt">
            WHY YOU SHOULD JOIN US..?
          </Title>
          <div className="tags-wrapper">
            {tagData.map((data, id) => (
              <Tag value={data} key={`tag-${id}-${data}`} type="outline" />
            ))}
          </div>
        </div>
      </div>
    </StyledAboutUs>
  );
};

export default AboutUs;

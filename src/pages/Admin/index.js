import React, { useState } from "react";
import CreatePageInput from "./CreatePageInput";

import { StyledAdmin } from "./style";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import { useCreatePageContext } from "../../context/CreatePageContext";
import HighlightTextBox from "../../components/HighlightTextBox";
import AboutUs from "../../components/AboutUs";

const Admin = () => {
  const { headerConfig, heroConfig, highlightBoxConfig, aboutUsConfig } =
    useCreatePageContext();

  const [isOpen, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!isOpen);
  };

  return (
    <StyledAdmin drawerInputActive={isOpen}>
      <CreatePageInput drawerVisible={isOpen} toggleDrawer={toggleDrawer} />
      <div className="create-page-preview">
        <Header
          logoUrl={headerConfig.HEADER.logo}
          communityName={headerConfig.HEADER.communityName}
        />
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
        <HighlightTextBox
          bgColor={highlightBoxConfig.HIGHLIGHT_BOX.bgColor}
          highlightText={highlightBoxConfig.HIGHLIGHT_BOX.text}
        />
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
      </div>
    </StyledAdmin>
  );
};

export default Admin;

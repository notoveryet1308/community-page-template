import React from "react";
import PlaceholderLogo from "../../assets/placeholder-logo.png";
import { Typography } from "antd";

import { StyledHeader } from "./style";
import HeaderRightSide from "./HeaderRightSide";
import MobileHeader from "./MobileHeader";
import { isMobile } from "../../utils";
import { useScroll } from "../../utils/hooks";

const { Title } = Typography;

const Header = ({
  logoUrl = PlaceholderLogo,
  communityName = "Community Name",
  primaryColor,
}) => {
  const { scrollX } = useScroll();
  return (
    <StyledHeader isScrolled={scrollX < 0} primaryColor={primaryColor}>
      <div className="header-left">
        <img
          src={logoUrl}
          aria-label="logo-image"
          alt="logo"
          className="header-logo"
        />
        <Title level={4} className="header-community-name text-value-rt">
          {communityName}
        </Title>
      </div>
      {!isMobile ? (
        <HeaderRightSide primaryColor={primaryColor} />
      ) : (
        <MobileHeader primaryColor={primaryColor} />
      )}
    </StyledHeader>
  );
};

export default Header;

import React from "react";
import PlaceholderLogo from "../../assets/placeholder-logo.png";
import { Typography } from "antd";
import { Gear } from "phosphor-react";

import { StyledRouterLink, StyledHeaderRight } from "./style";
import { smoothScroll } from "../../utils";

const { Link } = Typography;

const HeaderRightSide = ({ primaryColor, closeDrawer = () => {} }) => {
  return (
    <StyledHeaderRight primaryColor={primaryColor}>
      <nav className="header-nav">
        <Link
          className="header-nav-item"
          onClick={() => {
            smoothScroll("about-us-section");
            closeDrawer();
          }}
        >
          About us
        </Link>
        <Link
          className="header-nav-item"
          onClick={() => {
            smoothScroll("member-section");
            closeDrawer();
          }}
        >
          Member
        </Link>
        <Link
          className="header-nav-item"
          onClick={() => {
            smoothScroll("event-section");
            closeDrawer();
          }}
        >
          Event feed
        </Link>
      </nav>
      <StyledRouterLink
        to="/admin-control"
        target="_blank"
        className="admin-control"
      >
        <span>Admin</span>
        <Gear className="gear-icon" />
      </StyledRouterLink>
    </StyledHeaderRight>
  );
};

export default HeaderRightSide;

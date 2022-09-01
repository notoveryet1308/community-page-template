import React from "react";
import PlaceholderLogo from "../../assets/placeholder-logo.png";
import { Typography } from "antd";
import { Gear } from "phosphor-react";

import { StyledRouterLink, StyledHeaderRight } from "./style";

const { Link } = Typography;

const HeaderRightSide = () => {
  return (
    <StyledHeaderRight>
      <nav className="header-nav">
        <Link className="header-nav-item">Our Mission</Link>
        <Link className="header-nav-item">Member</Link>
        <Link className="header-nav-item">Event</Link>
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

import React from "react";
import { Typography } from "antd";
import { GithubLogo, LinkedinLogo, TwitterLogo, ArrowUp } from "phosphor-react";

import { StyledFooter } from "./style";

const { Title, Link } = Typography;

const Footer = () => {
  return (
    <StyledFooter>
      <Title level={3} className="footer-title text-value-rt">
        Designed and built by
      </Title>
      <div className="social-media-handle">
        <Link href="https://github.com/notoveryet1308" target="_blank">
          <GithubLogo className="rt-phosphor-icon" weight="fill" />
        </Link>
        <Link href="https://www.linkedin.com/in/rahul1308/" target="_blank">
          <LinkedinLogo className="rt-phosphor-icon" weight="fill" />
        </Link>
        <Link href="https://twitter.com/rahulraz1308" target="_blank">
          <TwitterLogo className="rt-phosphor-icon" weight="fill" />
        </Link>
      </div>
      <div
        className="go-to-top"
        onClick={() => scroll({ top: 0, behavior: "smooth" })}
      >
        <ArrowUp className="rt-phosphor-icon" weight="fill" />
        <span className="move-text">Move Up</span>
      </div>
    </StyledFooter>
  );
};

export default Footer;

import React, { useState } from "react";
import { Drawer } from "antd";
import { List } from "phosphor-react";

import { StyledMobileHeaderRight } from "./style";
import HeaderRightSide from "./HeaderRightSide";

const MobileHeader = ({ primaryColor }) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <StyledMobileHeaderRight>
      <List className="list-icon phosphor-icon-rt" onClick={toggleDrawer} />
      <Drawer
        placement="right"
        visible={isDrawerOpen}
        onClose={toggleDrawer}
        width={240}
      >
        <HeaderRightSide
          primaryColor={primaryColor}
          closeDrawer={toggleDrawer}
        />
      </Drawer>
    </StyledMobileHeaderRight>
  );
};

export default MobileHeader;

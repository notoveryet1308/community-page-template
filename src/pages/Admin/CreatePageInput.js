import React, { useState } from "react";

import { List } from "phosphor-react";
import { Typography, Button } from "antd";

import { StyledEditButton, StyledDrawer } from "./style";
import HeaderInput from "./createInputs/HeaderInput";
import HeroSectionInput from "./createInputs/HeroSectionInput";
import HighlightBoxInput from "./createInputs/HIghlightBoxInput";

const { Title } = Typography;

const CreatePageInput = ({ drawerVisible, toggleDrawer }) => {
  return (
    <>
      {!drawerVisible && (
        <StyledEditButton>
          <List className="list-icon phosphor-icon" onClick={toggleDrawer} />
        </StyledEditButton>
      )}
      <StyledDrawer
        visible={drawerVisible}
        onClose={toggleDrawer}
        width="400"
        placement="left"
        mask={false}
        title={
          <Title level={5} className="create-page-title text-value-rt">
            Create new page
          </Title>
        }
      >
        <div className="create-inputs-fields">
          <HeaderInput />
          <HeroSectionInput />
          <HighlightBoxInput />
        </div>
        <div className="create-page-actions">
          <Button type="link">Preview</Button>
          <div className="action-wrapper">
            <Button>Reset</Button>
            <Button type="primary">Publish</Button>
          </div>
        </div>
      </StyledDrawer>
    </>
  );
};

export default CreatePageInput;

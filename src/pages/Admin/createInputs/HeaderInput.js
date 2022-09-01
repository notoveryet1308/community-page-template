import React from "react";
import { Typography, Divider } from "antd";

import { StyledInputWrapper } from "./style";
import InputWithLabel from "../../../components/UI/InputWithLabel";
import { useCreatePageContext } from "../../../context/CreatePageContext";

const { Text } = Typography;

const HeaderInput = () => {
  const { headerConfig, headerDispatch, CONFIG_CONSTANT } =
    useCreatePageContext();

  return (
    <StyledInputWrapper>
      <Text className="input-label text-value-rt">Header Input</Text>
      <InputWithLabel
        label="Select primary color"
        type="color"
        value={headerConfig.primaryColor}
        onChange={(data) => {
          headerDispatch({
            type: CONFIG_CONSTANT.HEADER_PRIMARY_COLOR,
            payload: data.target.value,
          });
        }}
      />
      <InputWithLabel
        label="Upload Logo"
        type="url"
        value={headerConfig.HEADER.logo}
        onChange={(data) => {
          headerDispatch({
            type: CONFIG_CONSTANT.HEADER_LOGO,
            payload: data.target.value,
          });
        }}
      />
      <InputWithLabel
        label="Enter Community Name"
        type="text"
        value={headerConfig.HEADER.communityName}
        onChange={(data) =>
          headerDispatch({
            type: CONFIG_CONSTANT.HEADER_COMMUNITY_NAME,
            payload: data.target.value,
          })
        }
      />
      <Divider type="horizontal" />
    </StyledInputWrapper>
  );
};

export default HeaderInput;

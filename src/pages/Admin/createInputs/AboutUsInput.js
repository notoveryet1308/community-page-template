import React from "react";
import { Typography, Divider } from "antd";

import { StyledInputWrapper } from "./style";
import InputWithLabel from "../../../components/UI/InputWithLabel";
import { useCreatePageContext } from "../../../context/CreatePageContext";

const { Text } = Typography;

const AboutUsInput = () => {
  const { aboutUsConfig, aboutUsDispatch, CONFIG_CONSTANT } =
    useCreatePageContext();

  return (
    <StyledInputWrapper>
      {/* <Text className="input-label text-value-rt">About Us Input</Text>
      <Divider type="horizontal" /> */}
      <InputWithLabel
        label="Enter description"
        type="text"
        value={aboutUsConfig.ABOUT_US.description}
        onChange={(data) => {
          aboutUsDispatch({
            type: CONFIG_CONSTANT.ABOUT_US_DESCRIPTION,
            payload: data.target.value,
          });
        }}
      />

      <Text className="info-label text-value-rt">
        Enter five points about why one should join this community.
      </Text>

      <InputWithLabel
        label="1. Point"
        type="text"
        value={aboutUsConfig.ABOUT_US.tagData_one}
        onChange={(data) => {
          aboutUsDispatch({
            type: CONFIG_CONSTANT.ABOUT_US_TAG_ONE,
            payload: data.target.value,
          });
        }}
      />
      <InputWithLabel
        label="2. Point"
        type="text"
        value={aboutUsConfig.ABOUT_US.tagData_two}
        onChange={(data) => {
          aboutUsDispatch({
            type: CONFIG_CONSTANT.ABOUT_US_TAG_TWO,
            payload: data.target.value,
          });
        }}
      />
      <InputWithLabel
        label="3. Point"
        type="url"
        value={aboutUsConfig.ABOUT_US.tagData_three}
        onChange={(data) => {
          aboutUsDispatch({
            type: CONFIG_CONSTANT.ABOUT_US_TAG_THREE,
            payload: data.target.value,
          });
        }}
      />
      <InputWithLabel
        label="4. Point"
        type="url"
        value={aboutUsConfig.ABOUT_US.tagData_four}
        onChange={(data) => {
          aboutUsDispatch({
            type: CONFIG_CONSTANT.ABOUT_US_TAG_FOUR,
            payload: data.target.value,
          });
        }}
      />
      <InputWithLabel
        label="5. Point"
        type="url"
        value={aboutUsConfig.ABOUT_US.tagData_five}
        onChange={(data) => {
          aboutUsDispatch({
            type: CONFIG_CONSTANT.ABOUT_US_TAG_FIVE,
            payload: data.target.value,
          });
        }}
      />
    </StyledInputWrapper>
  );
};

export default AboutUsInput;

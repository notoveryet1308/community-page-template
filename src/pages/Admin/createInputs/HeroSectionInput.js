import React from "react";
import { Typography, Divider } from "antd";

import { StyledInputWrapper } from "./style";
import InputWithLabel from "../../../components/UI/InputWithLabel";
import { useCreatePageContext } from "../../../context/CreatePageContext";

const { Text } = Typography;

const HeroSectionInput = () => {
  const { heroConfig, heroDispatch, CONFIG_CONSTANT } = useCreatePageContext();

  return (
    <StyledInputWrapper>
      {/* <Text className="input-label text-value-rt">Hero Section Input</Text>
      <Divider type="horizontal" /> */}
      <InputWithLabel
        label="Main text"
        value={heroConfig.HERO.mainText}
        onChange={(data) =>
          heroDispatch({
            type: CONFIG_CONSTANT.HERO_MAIN_TEXT,
            payload: data.target.value,
          })
        }
      />

      <InputWithLabel
        label="Hero Image url"
        type="url"
        value={heroConfig.HERO.heroImgUrl}
        onChange={(data) =>
          heroDispatch({
            type: CONFIG_CONSTANT.HERO_IMAGE_URL,
            payload: data.target.value,
          })
        }
      />

      <InputWithLabel
        label="Sub text"
        value={heroConfig.HERO.subText}
        onChange={(data) =>
          heroDispatch({
            type: CONFIG_CONSTANT.HERO_SUB_TEXT,
            payload: data.target.value,
          })
        }
      />
      <InputWithLabel
        label="Tag one"
        value={heroConfig.HERO.tagData_one.value}
        onChange={(data) =>
          heroDispatch({
            type: CONFIG_CONSTANT.HERO_TAG_DATA_ONE,
            payload: data.target.value,
          })
        }
      />
      <InputWithLabel
        label="Tag two"
        value={heroConfig.HERO.tagData_two.value}
        onChange={(data) =>
          heroDispatch({
            type: CONFIG_CONSTANT.HERO_TAG_DATA_TWO,
            payload: data.target.value,
          })
        }
      />
      <InputWithLabel
        label="Tag three"
        value={heroConfig.HERO.tagData_three.value}
        onChange={(data) =>
          heroDispatch({
            type: CONFIG_CONSTANT.HERO_TAG_DATA_THREE,
            payload: data.target.value,
          })
        }
      />
    </StyledInputWrapper>
  );
};

export default HeroSectionInput;

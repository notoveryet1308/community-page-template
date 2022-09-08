import { CONFIG_CONSTANT } from "../constants";
import { heroReset } from "../initialData";

export const heroReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CONFIG_CONSTANT.HERO_TAG_DATA_ONE:
      return {
        ...state,
        noData: false,
        HERO: { ...state.HERO, tagData_one: { value: payload } },
      };
    case CONFIG_CONSTANT.HERO_TAG_DATA_TWO:
      return {
        ...state,
        noData: false,
        HERO: { ...state.HERO, tagData_two: { value: payload } },
      };
    case CONFIG_CONSTANT.HERO_TAG_DATA_THREE:
      return {
        ...state,
        noData: false,
        HERO: { ...state.HERO, tagData_three: { value: payload } },
      };
    case CONFIG_CONSTANT.HERO_IMAGE_URL:
      return {
        ...state,
        noData: false,
        HERO: { ...state.HERO, heroImgUrl: payload },
      };
    case CONFIG_CONSTANT.HERO_MAIN_TEXT:
      return {
        ...state,
        noData: false,
        HERO: { ...state.HERO, mainText: payload },
      };
    case CONFIG_CONSTANT.HERO_SUB_TEXT:
      return {
        ...state,
        noData: false,
        HERO: { ...state.HERO, subText: payload },
      };

    case "RESET":
      return {
        ...heroReset,
      };
  }
};

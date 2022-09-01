import { CONFIG_CONSTANT } from "../constants";

export const headerReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CONFIG_CONSTANT.HEADER_PRIMARY_COLOR:
      return {
        ...state,
        primaryColor: payload,
      };
    case CONFIG_CONSTANT.HEADER_LOGO:
      return {
        ...state,
        logo: payload,
        HEADER: { ...state.HEADER, logo: payload },
      };
    case CONFIG_CONSTANT.HEADER_COMMUNITY_NAME:
      return {
        ...state,
        communityName: payload,
        HEADER: { ...state.HEADER, communityName: payload },
      };
  }
};

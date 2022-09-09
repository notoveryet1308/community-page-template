import { CONFIG_CONSTANT } from "../constants";
import { headerReset } from "../initialData";


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
        noData: false,
        logo: payload,
        HEADER: { ...state.HEADER, logo: payload },
      };
    case CONFIG_CONSTANT.HEADER_COMMUNITY_NAME:
      return {
        ...state,
        noData: false,
        communityName: payload,
        HEADER: { ...state.HEADER, communityName: payload },
      };
    case "RESET":
      return {
        ...headerReset,
      };
  }
};

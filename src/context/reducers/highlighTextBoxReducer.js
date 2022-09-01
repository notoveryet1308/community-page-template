import { CONFIG_CONSTANT } from "../constants";

export const highlightBoxReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CONFIG_CONSTANT.HIGHLIGHT_BOX_TEXT:
      return {
        ...state,
        HIGHLIGHT_BOX: { ...state.HIGHLIGHT_BOX, text: payload },
      };
    case CONFIG_CONSTANT.HEADER_LOGO:
      return {
        ...state,
        HIGHLIGHT_BOX: { ...state.HIGHLIGHT_BOX, bgColor: payload },
      };
  }
};

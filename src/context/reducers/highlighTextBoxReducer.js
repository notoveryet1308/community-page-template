import { CONFIG_CONSTANT } from "../constants";
import { highlightBoxReset } from "../initialData";

export const highlightBoxReducer = (state, action) => {
  const { type, payload } = action;

  console.log({ action, state });

  switch (type) {
    case CONFIG_CONSTANT.HIGHLIGHT_BOX_TEXT:
      return {
        ...state,
        noData: false,
        HIGHLIGHT_BOX: { ...state.HIGHLIGHT_BOX, text: payload },
      };
    case CONFIG_CONSTANT.HIGHLIGHT_BOX_BG_COLOR:
      return {
        ...state,
        noData: false,
        HIGHLIGHT_BOX: { ...state.HIGHLIGHT_BOX, bgColor: payload },
      };

    case "RESET":
      return {
        ...highlightBoxReset,
      };
  }
};

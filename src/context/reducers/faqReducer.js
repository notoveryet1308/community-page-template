import { updateReducerArrayData } from "../../utils";
import { CONFIG_CONSTANT } from "../constants";
import { faqReset } from "../initialData";

export const faqReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CONFIG_CONSTANT.FAQ_DATA:
      return {
        ...state,
        noData: false,
        FAQ: {
          data: updateReducerArrayData(state.FAQ.data, payload),
        },
      };
    case "RESET":
      return {
        ...faqReset,
      };
  }
};

import { updateReducerArrayData } from "../../utils";
import { CONFIG_CONSTANT } from "../constants";
import { exploreGroupReset } from "../initialData";

export const exploreGroupReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CONFIG_CONSTANT.EXPLORE_GROUP_DATA:
      return {
        ...state,
        noData: false,
        EXPLORE_GROUP: {
          data: updateReducerArrayData(state.EXPLORE_GROUP.data, payload),
        },
      };
    case "RESET":
      return {
        ...exploreGroupReset,
      };
  }
};

import { updateReducerArrayData } from "../../utils";
import { CONFIG_CONSTANT } from "../constants";
import { eventReset } from "../initialData";

export const eventReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CONFIG_CONSTANT.EVENTS_DATA:
      return {
        ...state,
        noData: false,
        EVENTS: { data: updateReducerArrayData(state.EVENTS.data, payload) },
      };
    case "RESET":
      return {
        ...eventReset,
      };
  }
};

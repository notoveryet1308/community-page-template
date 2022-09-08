import { updateReducerArrayData } from "../../utils";
import { CONFIG_CONSTANT } from "../constants";
import { testimonialReset } from "../initialData";

export const testimonialReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CONFIG_CONSTANT.TESTIMONIAL_DATA:
      return {
        ...state,
        noData: false,
        TESTIMONIAL: {
          data: updateReducerArrayData(state.TESTIMONIAL.data, payload),
        },
      };
    case "RESET":
      return {
        ...testimonialReset,
      };
  }
};

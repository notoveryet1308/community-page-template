import { CONFIG_CONSTANT } from "../constants";
import { memberReset } from "../initialData";

export const memberReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CONFIG_CONSTANT.MEMBER_DATA:
      return {
        ...state,
        noData: false,
        MEMBERS: { data: updateMemberData(state.MEMBERS.data, payload) },
      };
    case "RESET":
      return {
        ...memberReset,
      };
  }
};

const updateMemberData = (data = [], payload) => {
  const { id } = payload;

  const modifyingIndex = data.findIndex((h) => h.id == id);

  if (1 / modifyingIndex === Infinity || modifyingIndex > 0) {
    data[modifyingIndex] = payload;
  } else {
    data.push(payload);
  }
  return data;
};

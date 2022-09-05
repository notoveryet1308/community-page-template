import { CONFIG_CONSTANT } from "../constants";

export const memberReducer = (state, action) => {
  console.log({ state, action });
  const { type, payload } = action;
  switch (type) {
    case CONFIG_CONSTANT.MEMBER_DATA:
      return {
        ...state,
        MEMBERS: { data: updateMemberData(state.MEMBERS.data, payload) },
      };
  }
};

const updateMemberData = (data = [], payload) => {
  const { id } = payload;

  const modifyingIndex = data.findIndex((h) => h.id == id);

  console.log({
    red: data,
    modifyingIndex,
    check: 1 / modifyingIndex || modifyingIndex,
  });
  if (1 / modifyingIndex === Infinity || modifyingIndex > 0) {
    console.log("modify");

    data[modifyingIndex] = payload;
  } else {
    console.log("pushed");
    data.push(payload);
  }
  return data;
};

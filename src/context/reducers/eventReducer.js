import { CONFIG_CONSTANT } from "../constants";

export const eventReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CONFIG_CONSTANT.EVENTS_DATA:
      return {
        ...state,
        EVENTS: { data: updateEventData(state.EVENTS.data, payload) },
      };
  }
};

const updateEventData = (data = [], payload) => {
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

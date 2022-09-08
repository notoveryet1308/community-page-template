import { Breakpoint } from "../styles/theme";

export const isMobile = window.innerWidth <= Breakpoint.MOBILE;

export const smoothScroll = (scrollElementId) => {
  const element = document.getElementById(scrollElementId);
  console.log({ element });
  const headerOffset = 60;
  const elementPos = element.getBoundingClientRect().top;
  const offsetPos = elementPos + pageYOffset - headerOffset;
  window.scrollTo({
    top: offsetPos,
    behavior: "smooth",
  });
};

export const manipulateDate = (noOfDays) => {
  let today = new Date();
  let yesterday = new Date(today);

  yesterday.setDate(today.getDate() + noOfDays);
  return yesterday.toISOString();
};

export const updateReducerArrayData = (data = [], payload) => {
  const { id } = payload;

  const modifyingIndex = data.findIndex((h) => h.id == id);

  if (1 / modifyingIndex === Infinity || modifyingIndex > 0) {
    data[modifyingIndex] = payload;
  } else {
    data.push(payload);
  }
  return data;
};

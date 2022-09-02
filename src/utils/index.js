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

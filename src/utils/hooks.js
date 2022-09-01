import { useState } from "react";

export const useScroll = () => {
  const [scrollX, setScrollX] = useState(0);
  addEventListener("scroll", () => {
    setScrollX(document.body.getBoundingClientRect().top);
  });
  return { scrollX };
};

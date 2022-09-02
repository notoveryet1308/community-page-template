import { useEffect, useState } from "react";

export const useScroll = () => {
  const [scrollX, setScrollX] = useState(0);
  addEventListener("scroll", () => {
    setScrollX(document.body.getBoundingClientRect().top);
  });
  return { scrollX };
};

export const useInView = (elementID) => {
  const [inView, setInView] = useState(false);

  addEventListener("scroll", () => {
    const element = document.getElementById(elementID);
    const top = element.getBoundingClientRect().top;

    if (!inView && top <= 240) {
      setInView(true);
    } else if (inView && top >= 400) {
      setInView(false);
    }
  });

  return { inView };
};

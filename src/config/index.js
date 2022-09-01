import Logo from "../assets/logo.svg";
import bannerImg from "../assets/hero-img.jpg";

export const LocalConfig = {
  Logo: Logo,
  communityName: "Planters",
  primaryColor: "#08BD80",
  HEADER: {
    logo: Logo,
    communityName: "Planters",
  },
  HERO: {
    tagData: [
      { bgColor: "#AEAFAE", value: "MEMBERS ACROSS GLOBE" },
      { bgColor: "#5AE4A7", value: "5k PlANTER FAMILY" },
      { bgColor: "#D5F8E5", value: "PLANTED 20K TREES" },
    ],
    heroImgUrl: bannerImg,
    mainText: "LET’S MAKE  MOTHER EARTH GREENER",
    subText:
      "Good feeling and makes the place worth living. It is the easiest way to beautify the surrounding. Trees are often planted on the parks, gardens, roadside, societies, and garden of our home for the purpose of reforming.",
  },
  HIGHLIGHT_BOX: {
    bgColor: "#f8f8f8",
    text: "We don’t inherit the earth from our ancestors, we borrow it from our children.",
  },
};

export const AdminConfig = {
  Logo: Logo,
  communityName: "Planters",
  HEADER: {
    logo: Logo,
    communityName: "Planters",
  },
};

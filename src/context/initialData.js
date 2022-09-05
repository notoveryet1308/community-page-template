import { v4 as uuidv4 } from "uuid";

export const configHeaderInitialState = {
  logo: "https://cdn-icons-png.flaticon.com/512/4786/4786833.png",
  communityName: "",
  primaryColor: "#08BD80",
  HEADER: {
    logo: "https://cdn-icons-png.flaticon.com/512/4786/4786833.png",
    communityName: "Planters",
  },
};

export const configHeroInitialState = {
  HERO: {
    tagData_one: { value: "MEMBERS ACROSS GLOBE" },
    tagData_two: { value: "5k PlANTER FAMILY" },
    tagData_three: { value: "PLANTED 20K TREES" },
    heroImgUrl:
      "https://images.unsplash.com/photo-1598335624134-5bceb5de202d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    mainText: "LET’S MAKE MOTHER EARTH GREENER",
    subText:
      "Good feeling and makes the place worth living. It is the easiest way to beautify the surrounding. Trees are often planted on the parks, gardens, roadside, societies, and garden of our home for the purpose of reforming.",
  },
};

export const configHighlightBoxInitialState = {
  HIGHLIGHT_BOX: {
    text: "We don’t inherit the earth from our ancestors, we borrow it from our children.",
    bgColor: "#f8f8f8",
  },
};

export const configAboutUsInitialState = {
  ABOUT_US: {
    tagData_one: "Awesome team",
    tagData_two: "Value Collaboration",
    tagData_three: "Chance to become certified Planters",
    tagData_four: "Backed by government",
    tagData_five: "We serve mother Earth",
    description:
      "Good feeling and makes the place worth living. It is the easiest way to beautify the surrounding. Trees are often planted on the parks, gardens, roadside, societies, and garden of our home for the purpose of reforming.",
  },
};

export const configMemberInitialState = {
  MEMBERS: {
    data: [
      {
        id: uuidv4(),
        designation: "Co-founder",
        name: "Sergio Da Paula",
        imgUrl:
          "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      },
      {
        id: uuidv4(),
        designation: "Co-founder",
        name: "Jonas kakaroto",
        imgUrl:
          "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      },
      {
        id: uuidv4(),
        designation: "Newest and youngest member",
        name: "Lisa",
        imgUrl:
          "https://images.unsplash.com/photo-1513086670993-297187d3a281?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      },
      {
        id: uuidv4(),
        designation: "Event Planner",
        name: "Shelby Miller",
        imgUrl:
          "https://images.unsplash.com/photo-1523920716885-8a681115294f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3393&q=80",
      },
      {
        id: uuidv4(),
        designation: "People Coordinator",
        name: "Ransford Quaye",
        imgUrl:
          "https://images.unsplash.com/photo-1615813967515-e1838c1c5116?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      },
    ],
  },
};

export const configEventInitialState = {
  EVENTS: {
    data: [
      {
        id: uuidv4(),
        title: "1k Tree plantation program",
        description:
          "Good feeling and makes the place worth living. It is the easiest way to beautify the surrounding.",
        date: new Date().toISOString(),
        place: "4th Avenvue Park Baner Pune",
        participantsJoined: 20,
        joiningLink: "https://www.google.com/",
        eventStatus: "upcoming",
      },
      {
        id: uuidv4(),
        title: "1k Tree plantation program",
        description:
          "Good feeling and makes the place worth living. It is the easiest way to beautify the surrounding.  feeling and makes the place worth living. It is the easiest way to beautify the surrounding.  feeling and makes the place worth living. It is the easiest way to beautify the surrounding.  feeling and makes the place worth living. It is the easiest way to beautify the surrounding.  feeling and makes the place worth living. It is the easiest way to beautify the surrounding.",
        date: new Date().toDateString(),
        place: "4th Avenvue Park Baner Pune",
        participantsJoined: 20,
        joiningLink: "https://www.google.com/",
        eventStatus: "today",
      },
      {
        id: uuidv4(),
        title: "1k Tree plantation program",
        description:
          "Good feeling and makes the place worth living. It is the easiest way to beautify the surrounding.  feeling and makes the place worth living. It is the easiest way to beautify the surrounding.  feeling and makes the place worth living. It is the easiest way to beautify the surrounding.  feeling and makes the place worth living. It is the easiest way to beautify the surrounding.  feeling and makes the place worth living. It is the easiest way to beautify the surrounding.",
        date: new Date().toDateString(),
        place: "4th Avenvue Park Baner Pune",
        participantsJoined: 20,
        joiningLink: "https://www.google.com/",
        eventStatus: "past",
      },
    ],
  },
};

import React, { createContext, useReducer, useContext } from "react";

import { headerReducer } from "./reducers/headerReducer";
import { heroReducer } from "./reducers/heroReducer";
import { highlightBoxReducer } from "./reducers/highlighTextBoxReducer";
import { aboutUsReducer } from "./reducers/aboutUsReducer";
import { memberReducer } from "./reducers/memberReducer";
import { eventReducer } from "./reducers/eventReducer";
import { exploreGroupReducer } from "./reducers/exploreGroupReducer";
import { testimonialReducer } from "./reducers/testimonialReducer";
import { faqReducer } from "./reducers/faqReducer";

import {
  configHeaderInitialState,
  configHeroInitialState,
  configHighlightBoxInitialState,
  configAboutUsInitialState,
  configMemberInitialState,
  configEventInitialState,
  configExploreGroupInitialState,
  configTestimonialInitialState,
  configFAQInitialState,
} from "./initialData";
import { CONFIG_CONSTANT } from "./constants";

const CreatePageContext = createContext();

const CreatePageContextProvider = ({ children }) => {
  const [headerConfig, headerDispatch] = useReducer(
    headerReducer,
    configHeaderInitialState
  );

  const [heroConfig, heroDispatch] = useReducer(
    heroReducer,
    configHeroInitialState
  );

  const [highlightBoxConfig, highlightBoxDispatch] = useReducer(
    highlightBoxReducer,
    configHighlightBoxInitialState
  );

  const [aboutUsConfig, aboutUsDispatch] = useReducer(
    aboutUsReducer,
    configAboutUsInitialState
  );

  const [memberConfig, memberDispatch] = useReducer(
    memberReducer,
    configMemberInitialState
  );

  const [eventConfig, eventDispatch] = useReducer(
    eventReducer,
    configEventInitialState
  );

  const [exploreGroupConfig, exploreGroupDispatch] = useReducer(
    exploreGroupReducer,
    configExploreGroupInitialState
  );
  const [testimonialConfig, testimonialDispatch] = useReducer(
    testimonialReducer,
    configTestimonialInitialState
  );

  const [faqConfig, faqDispatch] = useReducer(
    faqReducer,
    configFAQInitialState
  );

  const value = {
    headerConfig,
    headerDispatch,
    heroConfig,
    heroDispatch,
    highlightBoxConfig,
    highlightBoxDispatch,
    aboutUsConfig,
    aboutUsDispatch,
    memberConfig,
    memberDispatch,
    eventConfig,
    eventDispatch,
    exploreGroupConfig,
    exploreGroupDispatch,
    testimonialConfig,
    testimonialDispatch,
    faqConfig,
    faqDispatch,
  };
  return (
    <CreatePageContext.Provider value={value}>
      {children}
    </CreatePageContext.Provider>
  );
};

export default CreatePageContextProvider;

export const useCreatePageContext = () => {
  const {
    headerConfig,
    headerDispatch,
    heroConfig,
    heroDispatch,
    highlightBoxConfig,
    highlightBoxDispatch,
    aboutUsConfig,
    aboutUsDispatch,
    memberConfig,
    memberDispatch,
    eventConfig,
    eventDispatch,
    exploreGroupConfig,
    exploreGroupDispatch,
    testimonialConfig,
    testimonialDispatch,
    faqConfig,
    faqDispatch,
  } = useContext(CreatePageContext);
  return {
    headerConfig,
    headerDispatch,
    heroConfig,
    heroDispatch,
    highlightBoxConfig,
    highlightBoxDispatch,
    aboutUsConfig,
    aboutUsDispatch,
    memberConfig,
    memberDispatch,
    eventConfig,
    eventDispatch,
    exploreGroupConfig,
    exploreGroupDispatch,
    testimonialConfig,
    testimonialDispatch,
    faqConfig,
    faqDispatch,
    CONFIG_CONSTANT,
  };
};

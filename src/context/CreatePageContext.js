import React, { createContext, useReducer, useContext } from "react";

import { headerReducer } from "./reducers/headerReducer";
import { heroReducer } from "./reducers/heroReducer";
import { highlightBoxReducer } from "./reducers/highlighTextBoxReducer";
import { aboutUsReducer } from "./reducers/aboutUsReducer";
import { memberReducer } from "./reducers/memberReducer";
import { eventReducer } from "./reducers/eventReducer";

import {
  configHeaderInitialState,
  configHeroInitialState,
  configHighlightBoxInitialState,
  configAboutUsInitialState,
  configMemberInitialState,
  configEventInitialState,
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
    CONFIG_CONSTANT,
  };
};

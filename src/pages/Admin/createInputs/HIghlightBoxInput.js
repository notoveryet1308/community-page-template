import React from "react";
import { Typography, Divider } from "antd";

import InputWithLabel from "../../../components/UI/InputWithLabel";
import { useCreatePageContext } from "../../../context/CreatePageContext";

import { StyledInputWrapper } from "./style";

const { Text } = Typography;
const HighlightBoxInput = () => {
  const { highlightBoxConfig, highlightBoxDispatch, CONFIG_CONSTANT } =
    useCreatePageContext();

  return (
    <StyledInputWrapper>
      {/* <Text className="input-label text-value-rt">Text highligh box</Text>
      <Divider type="horizontal" /> */}
      <InputWithLabel
        label="Enter highlight text"
        type="text"
        value={highlightBoxConfig.HIGHLIGHT_BOX.text}
        onChange={(data) =>
          highlightBoxDispatch({
            type: CONFIG_CONSTANT.HIGHLIGHT_BOX_TEXT,
            payload: data.target.value,
          })
        }
      />
      <InputWithLabel
        label="Choose background color"
        type="color"
        value={highlightBoxConfig.HIGHLIGHT_BOX.bgColor}
        onChange={(data) =>
          highlightBoxDispatch({
            type: CONFIG_CONSTANT.HIGHLIGHT_BOX_BG_COLOR,
            payload: data.target.value,
          })
        }
      />
    </StyledInputWrapper>
  );
};

export default HighlightBoxInput;

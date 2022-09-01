import React from "react";

import { Input, Typography } from "antd";
import { StyledInputWithLabel } from "./style";

const { Text } = Typography;

const InputWithLabel = ({ label, value, onChange, type, addonAfter }) => {
  return (
    <StyledInputWithLabel>
      <Text className="input-label-text text-value-rt">{label}</Text>
      <Input
        value={value}
        onChange={onChange}
        type={type}
        addonAfter={addonAfter}
      />
    </StyledInputWithLabel>
  );
};

export default InputWithLabel;

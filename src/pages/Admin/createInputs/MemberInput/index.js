import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Typography, Divider, Button } from "antd";

import { useCreatePageContext } from "../../../../context/CreatePageContext";
import { StyledInputWrapper } from "../style";
import CardInput from "./CardInput";

const { Text } = Typography;
const MEMBER_SIZE = 5;

const MemberInput = () => {
  const { memberConfig, memberDispatch, CONFIG_CONSTANT } =
    useCreatePageContext();
  const [addMoreInput, setAddMoreInput] = useState(0);

  const loopSize =
    memberConfig.MEMBERS.data.length > 0
      ? memberConfig.MEMBERS.data
      : Array(MEMBER_SIZE).fill(uuidv4());

  const getCardData = (data) => {
    console.log({ data });
    memberDispatch({ type: CONFIG_CONSTANT.MEMBER_DATA, payload: data });
  };

  return (
    <StyledInputWrapper>
      <Text className="input-label text-value-rt">Member Input</Text>
      <Divider type="horizontal" />
      {loopSize.map((data) => (
        <CardInput
          id={data?.id || data}
          key={data?.id || data}
          memberImg={data?.imgUrl}
          memberDesignation={data?.designation}
          memberName={data?.name}
          getCardData={getCardData}
        />
      ))}
      {Array(addMoreInput)
        .fill(uuidv4())
        .map((data) => (
          <CardInput getCardData={getCardData} id={data} key={data} />
        ))}
      <Button onClick={() => setAddMoreInput(addMoreInput + 1)}>
        Add more fields
      </Button>
    </StyledInputWrapper>
  );
};

export default MemberInput;

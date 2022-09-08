import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Typography, Divider, Button } from "antd";

import { useCreatePageContext } from "../../../../context/CreatePageContext";
import { StyledInputWrapper } from "../style";
import ExploreGroupFields from "./ExploreGroupFields";

const { Text } = Typography;
const TOTAL_GROUP = 1;

const ExploreGroupInput = () => {
  const { exploreGroupConfig, exploreGroupDispatch, CONFIG_CONSTANT } =
    useCreatePageContext();
  const [addMoreInput, setAddMoreInput] = useState(0);

  const loopSize =
    exploreGroupConfig.EXPLORE_GROUP.data.length > 0
      ? exploreGroupConfig.EXPLORE_GROUP.data
      : Array(TOTAL_GROUP).fill(uuidv4());

  const getGroupData = (data) => {
    console.log({ data });
    exploreGroupDispatch({
      type: CONFIG_CONSTANT.EXPLORE_GROUP_DATA,
      payload: data,
    });

    console.log({ loopSize });
  };

  return (
    <StyledInputWrapper>
      {/* <Text className="input-label text-value-rt">Explore Group Input</Text>
      <Divider type="horizontal" /> */}
      {loopSize.map((data) => (
        <ExploreGroupFields
          key={data?.id || data}
          id={data?.id}
          groupName={data?.name}
          groupDescription={data?.description}
          groupSize={data?.size}
          groupThumbnail={data?.thumbnailUrl}
          getGroupData={getGroupData}
        />
      ))}
      {!!addMoreInput &&
        Array(addMoreInput)
          .fill(uuidv4())
          .map((data) => (
            <ExploreGroupFields
              getGroupData={getGroupData}
              id={data}
              key={data}
            />
          ))}
      <Button onClick={() => setAddMoreInput(addMoreInput + 1)}>
        Add more fields
      </Button>
    </StyledInputWrapper>
  );
};

export default ExploreGroupInput;

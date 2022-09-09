import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Typography, Divider, Button } from "antd";

import { useCreatePageContext } from "../../../../context/CreatePageContext";
import { StyledInputWrapper } from "../style";
import EventFields from "./EventFields";

const { Text } = Typography;
const TOTAL_EVENT = 1;

const EventInput = () => {
  const { eventConfig, eventDispatch, CONFIG_CONSTANT } =
    useCreatePageContext();
  const [addMoreInput, setAddMoreInput] = useState(0);

  const loopSize =
    eventConfig.EVENTS.data.length > 0
      ? eventConfig.EVENTS.data
      : Array(TOTAL_EVENT).fill(uuidv4());

  const getEventData = (data) => {
    eventDispatch({ type: CONFIG_CONSTANT.EVENTS_DATA, payload: data });
  };

  return (
    <StyledInputWrapper>
      {/* <Text className="input-label text-value-rt">Event Input</Text>
      <Divider type="horizontal" /> */}
      {loopSize.map((data) => (
        <EventFields
          getEventData={getEventData}
          id={data?.id || data}
          key={data?.id || data}
          eventDate={data?.date}
          eventTitle={data?.title}
          eventDescription={data?.description}
          eventJoiningLink={data?.joiningLink}
          eventParticipantJoined={data?.participantsJoined}
          eventPlace={data?.place}
        />
      ))}
      {Array(addMoreInput)
        .fill(uuidv4())
        .map((data) => (
          <EventFields getEventData={getEventData} id={data} key={data} />
        ))}
      <Button onClick={() => setAddMoreInput(addMoreInput + 1)}>
        Add more fields
      </Button>
    </StyledInputWrapper>
  );
};

export default EventInput;

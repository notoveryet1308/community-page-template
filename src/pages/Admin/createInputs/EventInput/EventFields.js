import React, { useState } from "react";
import { Input, Typography, Button, Alert, Divider } from "antd";
import { StyledCardInput } from "../style";

const { Text } = Typography;

const EventFields = ({
  getEventData,
  id,
  eventTitle,
  eventDescription,
  eventPlace,
  eventDate,
  status,
  eventParticipantJoined,
  eventJoiningLink,
}) => {
  const [title, setTitle] = useState(eventTitle);
  const [description, setDescription] = useState(eventDescription);
  const [place, setPlace] = useState(eventPlace);
  const [date, setDate] = useState(eventDate);
  const [participantsJoined, setParticipantJoined] = useState(
    eventParticipantJoined
  );

  const [joiningLink, setJoiningLink] = useState(eventJoiningLink);

  const [fieldEmpty, setFieldEmpty] = useState(false);

  const handleEventData = () => {
    if (
      title &&
      description &&
      place &&
      date &&
      participantsJoined &&
      joiningLink
    ) {
      const today = new Date().toISOString();
      const dateInput = new Date(date).toISOString();

      const pastEvent = today > dateInput ? "past" : null;
      const futureEvent = today > dateInput ? "upcoming" : null;
      const live = today == dateInput ? "today" : null;

      const data = {
        title,
        description,
        place,
        date,
        participantsJoined,
        eventStatus: pastEvent || futureEvent || live,
        joiningLink,
        id,
      };
      getEventData(data);
    } else {
      setFieldEmpty(true);
    }
  };

  const checkEmptyField = () => {
    if (
      title &&
      description &&
      place &&
      date &&
      participantsJoined &&
      joiningLink
    ) {
      setFieldEmpty(false);
    }
  };

  return (
    <StyledCardInput>
      <Text className="text-value-rt"> Title</Text>
      <Input
        type="text"
        value={title}
        onChange={({ target }) => {
          setTitle(target.value);
          checkEmptyField();
        }}
      />
      <Text className="text-value-rt"> Description</Text>
      <Input
        type="text"
        value={description}
        onChange={({ target }) => {
          setDescription(target.value);
          checkEmptyField();
        }}
      />
      <Text className="text-value-rt">Place</Text>
      <Input
        type="text"
        value={place}
        onChange={({ target }) => {
          setPlace(target.value);
          checkEmptyField();
        }}
      />
      <Text className="text-value-rt">Date</Text>
      <Input
        type="date"
        value={date}
        onChange={({ target }) => {
          setDate(target.value);
          checkEmptyField();
        }}
      />
      <Text className="text-value-rt">Joining Link</Text>
      <Input
        type="url"
        value={joiningLink}
        onChange={({ target }) => {
          setJoiningLink(target.value);
          checkEmptyField();
        }}
      />
      <Text className="text-value-rt">Participants joined</Text>
      <Input
        type="number"
        value={participantsJoined}
        onChange={({ target }) => {
          setParticipantJoined(target.value);
          checkEmptyField();
        }}
      />

      {fieldEmpty && <Alert type="error" description="Fill all input fields" />}
      <Button
        type="primary"
        className="add-input-btn"
        onClick={handleEventData}
      >
        Add
      </Button>
      <Divider type="horizontal" className="divider-hor" />
    </StyledCardInput>
  );
};

export default EventFields;

import React from "react";
import { Typography, Button } from "antd";

import { StyledEventBanner } from "./style";

const { Title, Text } = Typography;
const EVENT_STATUS = {
  past: "Past Events",
  today: "Today(Live)",
  upcoming: "Upcoming Event",
};

const EventBanner = ({
  title,
  description,
  date,
  place,
  participantsJoined,
  eventStatus,
  joiningLink,
}) => {
  const dateFormatted = new Date(date).toDateString();

  return (
    <StyledEventBanner eventStatus={eventStatus}>
      <Title level={4} className="event-banner-title text-value-rt">
        {title}
      </Title>
      <Text className="event-description text-value-rt">{description}</Text>
      <div className="event-detail">
        <div className="event-detail-left">
          <Text className="event-place text-value-rt"> {place}</Text>
          <Text className="event-date text-value-rt"> {dateFormatted}</Text>
          <Button
            type="link"
            href={joiningLink}
            target="_blank"
            className="joining-link-btn"
          >
            Joining link
          </Button>
        </div>
        <Title className="event-participant text-value-rt" level={2}>
          {participantsJoined}
          <span className="participant-sub-text">Participants</span>
        </Title>
      </div>

      <div className="event-status">{EVENT_STATUS[eventStatus]}</div>
    </StyledEventBanner>
  );
};

export default EventBanner;

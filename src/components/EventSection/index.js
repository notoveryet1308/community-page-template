import React from "react";

import EventBanner from "../UI/EventBanner";
import SectionTitle from "../UI/SectionTitle";
import { StyledEventSection } from "./style";

const EventSection = ({ eventData = [], primaryColor }) => {
  return (
    <StyledEventSection>
      <SectionTitle
        value="Events feed"
        scrollId="event-section"
        className="event-title"
        primaryColor={primaryColor}
      />
      <div className="event-banner-wrapper">
        {eventData.map((data) => (
          <EventBanner {...data} key={data.id} />
        ))}
      </div>
    </StyledEventSection>
  );
};

export default EventSection;

import React from "react";
import { Typography } from "antd";

import { StyledGroupCard } from "./style";

const { Text, Title } = Typography;

const GroupCard = ({
  groupName,
  groupDescription,
  groupSize,
  groupThumbnailUrl,
  primaryColor,
}) => {
  return (
    <StyledGroupCard
      groupThumbnailUrl={groupThumbnailUrl}
      primaryColor={primaryColor}
    >
      <div className="thumbnail-holder"></div>
      <div className="group-size">
        {groupSize} <span>Members</span>
      </div>
      <div className="group-card-detail">
        <Title level={5} className="group-name text-value-rt">
          {groupName}
        </Title>
        <Text className="group-description text-value-rt">
          {groupDescription}
        </Text>
      </div>
    </StyledGroupCard>
  );
};

export default GroupCard;

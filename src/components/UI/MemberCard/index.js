import React from "react";
import { Typography } from "antd";

import { StyledMemberCard } from "./style";

const { Text, Title } = Typography;

const MemberCard = ({ imgUrl, name, designation }) => {
  return (
    <StyledMemberCard imgUrl={imgUrl}>
      <div className="thumbnail"></div>
      <div className="member-detail">
        <Title level={5} className="member-name text-value-rt">
          {name}
        </Title>
        <Text className=" member-designation text-value-rt">{designation}</Text>
      </div>
    </StyledMemberCard>
  );
};

export default MemberCard;

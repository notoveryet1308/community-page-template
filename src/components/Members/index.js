import React from "react";
import { StyledMembers } from "./style";
import SectionTitle from "../UI/SectionTitle";
import MemberCard from "../UI/MemberCard";

const Members = ({ memberData = [] }) => {
  return (
    <StyledMembers>
      <SectionTitle
        value="Members"
        scrollId="member-section"
        className="member-title"
      />
      <div className="member-list-wrapper">
        {memberData.map((data, id) => (
          <MemberCard {...data} key={`${data.name}-${id}`} />
        ))}
      </div>
    </StyledMembers>
  );
};

export default Members;
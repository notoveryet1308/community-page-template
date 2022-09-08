import React from "react";

import GroupCard from "../UI/GroupCard";
import SectionTitle from "../UI/SectionTitle";
import { StyledExploreGroup } from "./style";

const ExploreGroup = ({ exploreGroupData = [] }) => {
  return (
    <StyledExploreGroup>
      <SectionTitle
        value="Explore Group"
        className="explore-title-group"
        // scrollId="explore-group-title"
      />
      <div className="explore-group-wrapper">
        {exploreGroupData.map((data) => {
          return (
            <GroupCard
              groupName={data?.name}
              groupDescription={data?.description}
              groupSize={data?.size}
              groupThumbnailUrl={data?.thumbnailUrl}
            />
          );
        })}
      </div>
    </StyledExploreGroup>
  );
};

export default ExploreGroup;

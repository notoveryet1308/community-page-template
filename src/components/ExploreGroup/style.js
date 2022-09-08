import styled from "styled-components";

import { Breakpoint } from "../../styles/theme";

export const StyledExploreGroup = styled.div`
  position: relative;
  padding: 36px 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .explore-title-group {
    margin-bottom: 50px;
  }

  .explore-group-wrapper {
    display: flex;
    gap: 20px;
    justify-content: center;
    align-self: center;
    flex-wrap: wrap;
  }

  @media (max-width: ${Breakpoint.LARGE_TABLET}px) {
    padding: 36px 60px;
  }

  @media (max-width: ${Breakpoint.TABLET}px) {
    padding: 16px 40px;

    .explore-title-group {
      margin-bottom: 30px;
    }
  }

  @media (max-width: ${Breakpoint.MOBILE}px) {
    padding: 6px 20px;
  }
`;

import styled from "styled-components";
import { Breakpoint } from "../../styles/theme";

export const StyledPublish = styled.div`
  position: relative;

  .home-horizontal-divider {
    padding: 0 120px;

    @media (max-width: ${Breakpoint.LARGE_TABLET}px) {
      padding: 0 60px;
    }

    @media (max-width: ${Breakpoint.TABLET}px) {
      padding: 0 40px;
    }

    @media (max-width: ${Breakpoint.MOBILE}px) {
      padding: 0 20px;
    }
  }
`;

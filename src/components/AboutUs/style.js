import styled from "styled-components";

import { Colors, Breakpoint } from "../../styles/theme";

export const StyledAboutUs = styled.div`
  padding: 60px 120px;
  position: relative;
  min-height: 50vh;

  .about-us-title {
    margin-bottom: 60px;
  }

  .about-us-content-wrapper {
    display: flex;
    justify-content: space-between;
    height: 100%;
    align-items: flex-start;

    .about-us-info {
      flex-basis: 40%;
      display: flex;
      flex-direction: column;
      row-gap: 20px;
      align-items: flex-start;

      .description {
        font-size: 16px;
      }

      .read-more-btn {
        background-color: ${({ primaryColor }) =>
          primaryColor || Colors.PRIMARY_COLOR};
        border: none;
        width: 150px;
      }
    }

    .about-us-adjective {
      gap: 20px;
      display: flex;
      flex-basis: 45%;
      flex-wrap: wrap;
      justify-content: flex-start;

      .tags-wrapper {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }
    }
  }

  @media (max-width: ${Breakpoint.LARGE_TABLET}px) {
    padding: 60px;
  }

  @media (max-width: ${Breakpoint.TABLET}px) {
    padding: 40px;
    min-height: 40vh;

    .about-us-title {
      margin-bottom: 30px;
    }

    .about-us-content-wrapper {
      flex-direction: column-reverse;
      row-gap: 40px;
    }
  }

  @media (max-width: ${Breakpoint.MOBILE}px) {
    padding: 20px;
  }
`;

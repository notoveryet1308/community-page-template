import styled from "styled-components";
import { Breakpoint, Colors } from "../../../styles/theme";

export const StyledSectionTitle = styled.div`
  padding: 4px 8px;
  position: relative;
  display: inline-block;
  transition: all 1s ease-in-out;
  background: ${Colors.WHITE};

  .section-title-text {
    z-index: 2;
    font-size: 30px;
  }

  &::after {
    bottom: -2px;
    left: -3px;
    content: "";
    z-index: -2;
    height: 50%;
    position: absolute;
    border-radius: 2px;
    transition: all 1s ease-in-out;
    width: ${({ inView }) => (inView ? "100%" : 0)};
    box-shadow: 0px 2px 5px -4px rgba(0, 0, 0, 0.75);
    background: ${({ inView, primaryColor }) =>
      inView && (primaryColor || Colors.PRIMARY_COLOR)};
  }

  @media (max-width: ${Breakpoint.MOBILE}px) {
    .section-title-text {
      font-size: 24px;
    }
  }
`;

import styled from "styled-components";

import { Breakpoint } from "../../styles/theme";

export const StyledHighlightTextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ bgColor }) => bgColor || "#f8f8f8"};
  padding: 60px;

  .highlight-text {
    text-align: center;
  }

  @media (max-width: ${Breakpoint.LARGE_TABLET}px) {
    margin: 60px 0;
  }

  @media (max-width: ${Breakpoint.TABLET}px) {
    padding: 40px;
  }

  @media (max-width: ${Breakpoint.MOBILE}px) {
    padding: 20px;
  }
`;

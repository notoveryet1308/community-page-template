import styled from "styled-components";
import { Colors, Breakpoint } from "../../styles/theme";

export const StyledFAQ = styled.div`
  display: flex;
  position: relative;
  padding: 60px 120px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .faq-title {
    margin-bottom: 50px;
  }

  .faq-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    padding: 0 120px;
  }

  @media (max-width: ${Breakpoint.DESKTOP}px) {
    .faq-wrapper {
      padding: 0;
    }
  }
  @media (max-width: ${Breakpoint.LARGE_TABLET}px) {
    padding: 60px;
  }

  @media (max-width: ${Breakpoint.TABLET}px) {
    padding: 40px;
    min-height: 40vh;

    .faq-title {
      margin-bottom: 30px;
    }
  }

  @media (max-width: ${Breakpoint.MOBILE}px) {
    padding: 20px;
  }
`;

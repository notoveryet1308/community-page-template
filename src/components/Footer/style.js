import styled from "styled-components";
import { Colors } from "../../styles/theme";

export const StyledFooter = styled.div`
  position: relative;
  width: 100%;
  height: 150px;
  background-color: ${Colors.OFF_WHITE};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 20px;

  .footer-title {
  
  }

  .social-media-handle {
    display: flex;
    column-gap: 8px;
  }
  .rt-phosphor-icon {
    font-size: 30px;
  }
  .go-to-top {
    position: absolute;
    right: 100px;
    display: flex;
    align-items: center;
    column-gap: 8px;
    cursor: pointer;
    background-color: #000;
    color: white;
    padding: 4px 12px;
    border-radius: 4px;
    scroll-behavior: smooth;
    .move-text {
      font-size: 16px;
      font-weight: 500;
    }
  }
`;

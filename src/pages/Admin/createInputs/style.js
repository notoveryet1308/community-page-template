import styled from "styled-components";
import { Colors } from "../../../styles/theme";

export const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  padding: 10px;

  .input-label-text {
    font-weight: 400;
    text-transform: uppercase;
  }

  .info-label {
    font-weight: 400;
  }
`;

export const StyledCardInput = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  align-items: flex-start;

  .add-input-btn {
    background: #000;
  }

  && .divider-hor {
    height: 1px;
    margin: 4px 0;
    border: none;
    background: #e8eaed;
  }
`;

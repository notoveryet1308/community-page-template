import styled from "styled-components";
import { Colors } from "../../../styles/theme";

export const StyledExposedTag = styled.div`
  padding: 8px 20px;
  box-shadow: 0px 1px 2px ${Colors.PRIMARY_COLOR};
  border-radius: 8px;

  .exposed-tag-value {
    color: ${Colors.PRIMARY_COLOR};
    text-transform: uppercase;
    font-weight: 400;
  }
`;

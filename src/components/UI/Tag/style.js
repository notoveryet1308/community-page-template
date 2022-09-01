import styled from "styled-components";
import { Colors } from "../../../styles/theme";

export const StyledTag = styled.div`
  display: inline-block;
  padding: 4px 16px;
  border-radius: 20px;
  background-color: rgba(
    ${({ bgColor }) => `${bgColor.r}, ${bgColor.g}, ${bgColor.b}`},
    1
  );
  font-weight: 600;
  box-shadow: 7px 3px 12px -9px rgba(0, 0, 0, 0.75);
  .ant-typography {
    color: ${Colors.WHITE};
  }
`;

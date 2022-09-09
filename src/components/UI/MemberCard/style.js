import styled from "styled-components";
import { Breakpoint, Colors } from "../../../styles/theme";

export const StyledMemberCard = styled.div`
  position: relative;
  .thumbnail {
    width: 250px;
    height: 250px;
    border-radius: 8px;
    background-color: #f8f8f8;
    border: 1px solid #e8eaed;
    background-image: url(${({ imgUrl }) => imgUrl});
    background-position: center;
    background-size: cover;
  }

  .member-detail {
    left: 20px;
    width: 200px;
    bottom: -20px;
    position: absolute;
    border-radius: 4px;
    padding: 8px 0 8px 16px;
    border: 1px solid #e8eaed;
    background-color: rgba(255, 255, 255, 1);

    .member-name {
      font-size: 14px;
      text-transform: capitalize;
    }

    .member-designation {
      color: #808080;
    }
  }
`;

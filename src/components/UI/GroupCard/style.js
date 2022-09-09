import styled from "styled-components";
import { Breakpoint, Colors } from "../../../styles/theme";

export const StyledGroupCard = styled.div`
  position: relative;
  border-radius: 8px;
  width: 260px;
  overflow: hidden;
  border: 2px solid #f5f6f7;
  padding-bottom: 16px;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  .thumbnail-holder {
    width: 260px;
    height: 178px;
    background-color: #f5f6f7;
    background-image: url(${({ groupThumbnailUrl }) => groupThumbnailUrl});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .group-size {
    position: absolute;
    top: 165px;
    left: 20px;
    background-color: #f07878;
    padding: 0 8px;
    border-radius: 4px;
    color: ${Colors.WHITE};
  }

  .group-card-detail {
    position: relative;
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    padding: 0 16px;

    .group-name {
      margin-top: 16px;
    }
    .group-description {
      display: -webkit-box;
      max-width: 100%;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;

      &.ant-typography {
      }
    }
  }
  transition: all 300ms ease-in-out;

  &:hover {
    transition: all 300ms ease-in-out;
    border: 2px solid
      ${({ primaryColor }) => primaryColor || Colors.PRIMARY_COLOR};
    .group-size {
      background-color: ${({ primaryColor }) =>
        primaryColor || Colors.PRIMARY_COLOR};
    }
  }

  @media (max-width: ${Breakpoint.MOBILE}px) {
    flex-direction: row;
    width: 100%;
    padding-bottom: 0;
    .thumbnail-holder {
      width: 200px;
    }
    .group-size {
      top: 0;
      right: 0;
      left: unset;
      border-radius: 0 4px 0 4px;
    }
    .group-card-detail {
      flex: 1;

      .group-name {
        margin-top: 24px;
      }
    }
  }
`;

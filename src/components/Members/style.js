import styled from "styled-components";
import { Breakpoint } from "../../styles/theme";

export const StyledMembers = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 60px;

  .member-title {
    margin: 0 120px;
  }

  .member-list-wrapper {
    padding: 60px 120px;
    width: 100%;
    display: flex;
    column-gap: 20px;
    overflow-x: auto;
    overflow-y: hidden;
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
      display: none; /* Safari and Chrome */
    }
  }

  .side-overlay {
    position: absolute;
    bottom: 30px;
    width: 120px;
    height: 280px;
    background: rgba(255, 255, 255, 0.8);
    &.left {
      left: 0;
    }
    &.right {
      right: 0;
    }
  }

  @media (max-width: ${Breakpoint.LARGE_TABLET}px) {
    .member-list-wrapper {
      padding: 60px;
    }
    .side-overlay {
      width: 60px;
    }

    .member-title {
      margin: 0 60px;
    }
  }

  @media (max-width: ${Breakpoint.TABLET}px) {
    padding: 40px 0 20px 0;
    .member-list-wrapper {
      padding: 40px;
    }
    .side-overlay {
      width: 40px;
    }
    .member-title {
      margin: 0 40px;
    }
  }

  @media (max-width: ${Breakpoint.MOBILE}px) {
    padding: 20px 0;
    .member-list-wrapper {
      padding: 20px;
    }
    .side-overlay {
      width: 20px;
    }
    .member-title {
      margin: 0 20px;
    }
  }
`;

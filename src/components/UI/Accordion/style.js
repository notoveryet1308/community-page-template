import styled, { keyframes, Keyframes } from "styled-components";

const slideDown = keyframes`
   0%{
     transform: translateY(0);
   }

   100%{
     transform: translateY(100%);
   }

`;

export const StyledAccordion = styled.div`
  position: relative;
  width: 100%;
  transition: all 1s ease-in-out;

  .accordion-head {
    width: 100%;
    background-color: #f2efe0;
    border-radius: 4px;
    display: flex;
    align-items: center;
    cursor: pointer;

    &-icon {
      padding: 15px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      .icon {
        font-size: 24px;
        color: #b4b2b2;
      }
      .caret-down {
        color: #000;
      }
    }

    .head-title {
      display: inline-block;
      padding: 8px 16px;
      font-size: 14px;
      font-weight: 400;
      border-left: 1px solid
        ${({ isExpanded }) => (isExpanded ? "#000" : "#afafaf")};
    }
  }

  .accordion-body {
    position: relative;
    background-color: #f2efe0;
    margin-top: 2px;
    border-radius: 4px;
    overflow: hidden;
    height: auto;
    max-height: ${({ isExpanded }) => {
      return isExpanded ? "200vh" : 0;
    }};
    transition: max-height 500ms ease-in-out;
    border: ${({ isExpanded }) => isExpanded && "1px solid #dbd5b9"};

    .accordion-body-content {
      padding: 20px;
      display: ${({ isExpanded }) => (isExpanded ? "block" : "none")};
    }
  }
`;

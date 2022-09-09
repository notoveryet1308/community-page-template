import styled from "styled-components";
import { Breakpoint } from "../../styles/theme";

export const StyledTestimonial = styled.div`
  position: relative;
  height: 60vh;
  width: 100%;
  overflow: hidden;
  background-color: rgba(8, 189, 128, 1);

  margin: 30px 0;

  .overlay-wrapper {
    width: 100%;
    height: 100%;
    z-index: 30;
    box-shadow: inset 106px 10px 93px 0px rgba(36, 172, 215, 1);
  }
  .controls {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    top: 0;
    justify-content: space-between;
    align-items: center;
    z-index: 40;
    .control-left,
    .control-right {
      width: 50px;
      height: 50px;
      display: inline-flex;
      background-color: rgba(255, 255, 215, 1);
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      cursor: pointer;

      .icon {
        font-size: 28px;
      }
    }

    .control-left {
      position: absolute;
      left: 20px;
    }
    .control-right {
      position: absolute;
      right: 20px;
    }
  }
  transition: transform 300ms ease-in-out;

  .testimonial-view-placeholder {
    position: absolute;
    width: 500px;
    height: 100%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 33;
    background: rgba(36, 172, 215, 0.5);
    box-shadow: -102px -9px 164px 197px rgba(36, 172, 215, 0.8);
  }

  @media (max-width: ${Breakpoint.MOBILE}px) {
    .testimonial-view-placeholder {
      width: 100%;
      top: 0;
      left: 0;
      transform: unset;
      padding: 0 20px;
    }
  }
`;

import styled, { keyframes } from "styled-components";
import { Breakpoint } from "../../styles/theme";

const smoothMove = (x, y) => keyframes`
  0%{transform: translateY(${x}px);}

  100%{transform:translateY(${y}px);}
`;

export const StyledHeroSection = styled.section`
  position: relative;
  padding-top: 60px;
  padding-left: 120px;
  padding-right: 120px;
  display: flex;
  justify-content: space-between;
  min-height: 70vh;
  align-items: center;

  .hero-section-left {
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 20px;

    .hero-main-text {
      font-size: 70px;
      font-weight: 900;
    }
    .hero-aub-text {
      font-size: 16px;
    }
    .hero-cta {
      display: flex;
      justify-content: center;
      align-items: center;
      column-gap: 8px;
      height: 40px;
      width: 200px;
      transition: width 300ms ease-in-out;

      .arrow-right {
        display: none;
      }

      &:hover {
        width: 300px;
        transition: width 300ms ease-in-out;
        .arrow-right {
          display: flex;
        }
      }
    }
  }

  .hero-section-right {
    position: relative;
    flex-basis: 48%;
    width: 100%;
    min-height: 50vh;
    background-image: ${({ bgImg }) => `url(${bgImg})`};
    background-position: top;
    background-size: contain;
    background-repeat: no-repeat;

    .hero-tag {
      position: absolute;

      &.tag-id-0 {
        right: 20px;
        top: 20px;
        animation: ${smoothMove(10, 20)} 5s ease-in-out alternate infinite;
      }
      &.tag-id-1 {
        right: 20px;
        top: 200px;
        animation: ${smoothMove(10, 15)} 4s ease-in-out alternate infinite;
      }
      &.tag-id-2 {
        left: 20px;
        top: 350px;
        animation: ${smoothMove(10, 15)} 2s ease-in-out alternate infinite;
      }
    }
  }

  @media (max-width: ${Breakpoint.LARGE_TABLET}px) {
    flex-direction: column-reverse;
    padding-left: 60px;
    padding-right: 60px;
  }

  @media (max-width: ${Breakpoint.TABLET}px) {
    padding-left: 40px;
    padding-right: 40px;

    && .hero-main-text {
      font-size: 60px;
      font-weight: 700;
    }
  }

  @media (max-width: ${Breakpoint.MOBILE}px) {
    padding-left: 20px;
    padding-right: 20px;

    .hero-section-right {
      min-height: 40vh;
      .hero-tag {
        &.tag-id-2 {
          left: 20px;
          top: 250px;
          animation: ${smoothMove(10, 15)} 2s ease-in-out alternate infinite;
        }
      }
    }
  }
`;

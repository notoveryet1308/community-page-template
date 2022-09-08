import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { Colors, Breakpoint } from "../../styles/theme";

export const StyledHeader = styled.header`
  top: 0;
  left: 0;
  z-index: 50;
  width: 100%;
  height: 60px;
  display: flex;
  position: sticky;
  padding: 4px 60px;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(255,255,255, .9);
  border-bottom: ${({ isScrolled }) => isScrolled && "2px solid #f6f6f6"};
  box-shadow: ${({ isScrolled }) =>
    isScrolled && "0px 3px 6px -5px rgba(0,0,0,0.2)"};

  .header-left {
    display: flex;
    align-items: center;
    column-gap: 4px;

    .header-logo {
      width: 60px;
      height: 50px;
    }
    .header-community-name {
      margin: 0;
    }
  }

  @media (max-width: ${Breakpoint.TABLET}px) {
    padding: 4px 40px;
  }

  @media (max-width: ${Breakpoint.MOBILE}px) {
    padding: 4px 20px;

    .header-right {
      display: flex;
      flex-direction: column;
      row-gap: 20px;
      align-items: flex-start;

      .header-nav {
        display: flex;
        flex-direction: column;

        align-items: center;
        column-gap: 16px;
        &-item {
          color: ${Colors.DARK_BLUE};
          font-weight: 600;
          &:hover {
            color: ${Colors.PRIMARY_COLOR};
          }
        }
      }
    }
  }
`;

export const StyledRouterLink = styled(RouterLink)`
  display: flex;
  column-gap: 4px;
  padding: 8px 20px;
  border-radius: 2px;
  align-items: center;
  color: ${Colors.WHITE};
  background-color: ${Colors.BLACK};
  text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
  box-shadow: 0 2px 0 rgb(0 0 0 / 5%);

  &:hover {
    color: ${Colors.WHITE};
  }
`;

export const StyledMobileHeaderRight = styled.div`
  display: flex;
  align-items: center;

  .list-icon {
    font-size: 28px;
    cursor: pointer;
  }
`;

export const StyledHeaderRight = styled.div`
  display: flex;
  column-gap: 20px;

  .header-nav {
    display: flex;
    align-items: center;
    column-gap: 16px;

    &-item {
      color: ${Colors.DARK_BLUE};
      font-weight: 600;
      &:hover {
        color: ${Colors.PRIMARY_COLOR};
      }
    }
  }

  @media (max-width: ${Breakpoint.MOBILE}px) {
    flex-direction: column;
    row-gap: 20px;
    align-items: flex-start;

    .header-nav {
      flex-direction: column;
      row-gap: 16px;
      align-items: flex-start;
    }
  }
`;

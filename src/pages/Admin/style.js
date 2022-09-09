import styled from "styled-components";
import { Colors, Breakpoint } from "../../styles/theme";
import { Drawer } from "antd";

export const StyledAdmin = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  padding: ${({ drawerInputActive }) => drawerInputActive && "0 0 0 400px"};

  .create-page-preview {
    flex: 1;
    margin: 24px;
    overflow: auto;
    position: relative;
    border: 1px solid #888;
    height: calc(100% - 48px);

    &::after {
      top: 0;
      left: 0;
      z-index: 3;
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      background-color: transparent;
    }
  }

  .home-horizontal-divider {
    padding: 0 120px;

    @media (max-width: ${Breakpoint.LARGE_TABLET}px) {
      padding: 0 60px;
    }

    @media (max-width: ${Breakpoint.TABLET}px) {
      padding: 0 40px;
    }

    @media (max-width: ${Breakpoint.MOBILE}px) {
      padding: 0 20px;
    }
  }
`;

export const StyledEditButton = styled.div`
  width: 70px;
  height: 100vh;
  padding: 16px 24px;
  color: ${Colors.DARK_BLUE};
  background-color: ${Colors.OFF_WHITE};
  border-right: 1px solid ${Colors.BLUEISH};
  box-shadow: 2px 1px 5px 0px rgba(194, 190, 194, 0.7);

  .list-icon {
    font-size: 24px;
    cursor: pointer;
  }
`;

export const StyledDrawer = styled(Drawer)`
  .ant-drawer-body {
    padding: 0;
    margin-bottom: 70px;

    .ant-divider-horizontal {
      margin: 4px 0;
    }
  }

  .create-inputs-fields {
    padding: 10px;
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 8px;

    .create-input-accordion {
      .accordion-body-content {
        padding: 10px;
      }
    }
  }

  .create-page-actions {
    width: 400px;
    position: fixed;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 16px 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid ${Colors.PRIMARY_COLOR};
    .action-wrapper {
      display: flex;
      column-gap: 16px;
    }
    .publish-btn {
      background-color: ${Colors.PRIMARY_COLOR};
      color: ${Colors.WHITE};
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 4px 16px;
    }
  }
`;

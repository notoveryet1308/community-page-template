import styled from "styled-components";
import { Colors } from "../../styles/theme";
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
    .ant-divider-horizontal {
      margin: 4px 0;
    }
  }

  .create-inputs-fields {
    position: relative;
    /* padding: 24px; */
    .create-page-title {
      color: ${Colors.DARK_BLUE};
    }
  }

  .create-page-actions {
    position: sticky;
    bottom: 0;
    background-color: #f8f8f8;
    padding: 16px 24px;
    display: flex;
    justify-content: space-between;

    .action-wrapper {
      display: flex;
      column-gap: 16px;
    }
  }
`;

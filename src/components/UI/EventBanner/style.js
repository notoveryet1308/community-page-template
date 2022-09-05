import styled, { css } from "styled-components";
import { Colors } from "../../../styles/theme";

const eventStatusStyle = {
  upcoming: css`
    background-color: rgba(90, 104, 228, 0.6);
  `,
  past: css`
    background-color: rgba(33, 33, 33, 0.6);
  `,
  today: css`
    background-color: rgba(243, 63, 63, 0.6);
  `,
};

export const StyledEventBanner = styled.div`
  padding: 20px;
  display: flex;
  position: relative;
  border-radius: 8px;
  flex-direction: column;
  background-color: ${Colors.OFF_WHITE};

  .event-banner-title {
    margin-bottom: 16px;
  }

  .event-description {
    flex: 1;
    margin-bottom: 8px;
    display: inline-block;
    color: ${Colors.TEXT_GRAY};
  }

  .event-detail {
    width: 100%;
    position: relative;
    .event-detail-left {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    .event-participant {
      position: absolute;
      right: 0;
      bottom: 0;

      .participant-sub-text {
        font-size: 16px;
        margin-left: 4px;
      }
    }
  }

  .joining-link-btn {
    height: unset;
    padding: 0;
  }

  .event-status {
    border-radius: 2px;
    position: absolute;
    right: 20px;
    top: -10px;
    color: ${Colors.WHITE};
    font-size: 12px;
    padding: 4px 8px;
    ${({ eventStatus }) => eventStatusStyle[eventStatus]};
  }
`;

import styled from "styled-components";

export const StyledInputWithLabel = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 4px;

  .input-label-text {
    color: #292828;
    text-transform: uppercase;
    font-size: 12px;
  }

  .ant-input-group-addon {
    &:hover {
      background-color: #e5e1e1;
    }
  }

  .addon-btn {
    cursor: pointer;
  }
`;

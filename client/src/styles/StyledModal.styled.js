import styled, { css } from 'styled-components';

const sharedStyles = css`
  span {
    font-size: 33px;
    font-weight: bold;
    color: white;
    border-radius: 50%;
    padding: 6px 14px;
    margin-top: 12px;
  }

  h1 {
    font-weight: normal;
    padding: 0 100%;
  }
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  z-index: 1000;
  cursor: default;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 0 4em 1em 4em;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  overflow: hidden;

  ${sharedStyles}

  &[mode="error"] {
    border: 3px tomato solid;
    span {
      ${sharedStyles}
      background-color: #db3820;
    }

    h1 {
      ${sharedStyles}
      color: #db3820;
    }
  }

  &[mode="success"] {
    border: 3px lightgreen solid;
    span {
      ${sharedStyles}
      background-color: #57b756;
    }

    h1 {
      ${sharedStyles}
      color: #57b756;
    }
  }

  p {
    font-size: medium;
    font-weight: normal;
    text-align: center;
    color: #263a29;
    margin-bottom: 33px;
  }
`;

import styled, { css } from "styled-components";

const primaryColor = "#263a29";
const errorColor = "#db3820";
const successColor = "#57b756";
const lightColor = "lightblue";
const hoverColor = "#416450";
const disabledColor = "lightgray";

const buttonStyles = css`
  padding: 10px 20px;
  font-weight: bold;
  font-size: 16px;
`;

const primaryButtonStyles = css`
  ${buttonStyles}
`;

const errorButtonStyles = css`
  ${buttonStyles}
  background-color: ${errorColor};
  border: 2px solid ${errorColor};
  color: white;

  &:hover {
    background-color: tomato;
  }
`;

const successButtonStyles = css`
  ${buttonStyles}
  background-color: ${successColor};
  border: 2px solid ${successColor};
  color: white;

  &:hover {
    background-color: lightgreen;
  }
`;

export const Button = styled.button`
  background-color: ${lightColor};
  color: ${primaryColor};
  padding: 5px 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  &[kind="primary"] {
    ${primaryButtonStyles}
  }

  &[kind="error"] {
    ${errorButtonStyles}
  }

  &[kind="success"] {
    ${successButtonStyles}
  }

  &:hover {
    background-color: ${hoverColor};
    color: white;
  }

  &:active {
    background: gray;
    color: #f0f0f0;
  }

  &:disabled {
    background-color: ${disabledColor};
    cursor: not-allowed;
  }
`;

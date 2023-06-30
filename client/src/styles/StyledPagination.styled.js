import styled from "styled-components";

export const StyledPagination = styled.nav`
  button {
    display: inline-block;
    padding: 9px 12px;
    margin: 0;
    border-radius: 3px;
    border: solid 1px #c0c0c0;
    background: #fff;
    box-shadow: inset 0px 1px 0px rgba(255, 255, 255, 0.8),
      0px 1px 3px rgba(0, 0, 0, 0.1);

    font-weight: bold;
    text-decoration: none;
    color: #41644A;
    cursor: pointer;

    /* &:hover {
      background: #41644A;
      color: #f5f5f5;
    }

    &:active {
      background: gray;
      color: #f0f0f0;
    } */

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;

export const PaginationButton = styled.button`
  display: inline-block;
  padding: 9px 12px;
  margin: 0;
  border-radius: 3px;
  border: solid 1px #c0c0c0;
  background: #fff;
  color: #41644a;
  box-shadow: inset 0px 1px 0px rgba(255, 255, 255, 0.8),
    0px 1px 3px rgba(0, 0, 0, 0.1);
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;

  &[is-active="true"] {
    background: lightblue;
    color: #263a29;
  }

  &:hover {
    background: #416450;
    color: white;
  }

  &:active {
    background: gray;
    color: #f0f0f0;
  }
`;

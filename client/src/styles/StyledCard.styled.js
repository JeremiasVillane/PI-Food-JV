import styled from "styled-components";
import { Link } from "react-router-dom";

export const Recipe = styled.article`
  width: 280px;
  height: 400px;
  transition: 0.15s all ease-in-out;
  border-radius: 10px;
  padding: 5px;
  margin: 33px;
  border: 4px solid lightgreen;
  cursor: default;
  background-color: #f2e3db;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  overflow: hidden;

  &:hover {
    border-color: #41644a;
    box-shadow: none;
  }

  &:active {
    box-shadow: 0px 10px 15px 7px rgba(0, 0, 0, 0.1);
    transform: translate(0, 0);
  }

  p {
    font-family: Arial, Helvetica, sans-serif;
    font-size: small;
    font-weight: bold;
    color: #263a29;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

export const Frame = styled.div`
  width: 100%;
  height: 222px;
  background: gray;
  border-radius: 10px;
  overflow: hidden;
  position: relative;

  img {
    max-height: 222px;
  }

  `;

  export const DeleteButton = styled.button`
    transition: 0.15s all ease-in-out;
    position: absolute;
    top: 10px;
    left: 10px;
    width: 27px;
    height: 27px;
    border: none;
    border-radius: 50%;
    background-color: #db3820;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold;
    font-size: 15px;
    cursor: pointer;

    &:hover {
      background-color: #e71e00;
      transform: scale(1.05)
    }

    &:active {
      background-color: #db3820;
      transform: scale(1);
    }
  `

  export const EditButton = styled.button`
    transition: 0.15s all ease-in-out;
    position: absolute;
    top: 40px;
    left: 10px;
    width: 27px;
    height: 27px;
    border: none;
    border-radius: 50%;
    background-color: orange;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold;
    font-size: 15px;
    cursor: pointer;

    &:hover {
      background-color: darkorange;
      transform: scale(1.05)
    }

    &:active {
      background-color: #db3820;
      transform: scale(1);
    }
  `

export const HealthScore = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #57b756;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
`;

export const RecipeInfo = styled.div`
  padding-top: 20px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  /* gap: 50px; */
`;

export const RecipeTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    color: #41644a;
    font-size: 26px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 1.2em;
    padding-bottom: 15px;
    position: relative;

    &:before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      height: 5px;
      width: 55px;
      background-color: #41644a;
    }

    &:hover {
      color: #416466;
    }
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #336622;
`;

export const Arrow = styled.span`
  width: 10px;
  height: 10px;
  margin-left: 21px;
  border: 2px solid #263a29;
  border-left: 0;
  border-top: 0;
  transform: rotate(45deg);

  &[data-showtags="true"] {
    transform: rotate(225deg);
    translate: 0 6px;
  }
`;

export const RecipeDiets = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  place-content: flex-start;
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  transition: opacity 0.3s, max-height 0.3s;

  &[data-showtags="true"] {
    opacity: 1;
    max-height: 100px;
  }

  button {
    background: lightblue;
    color: #263a29;
    font-weight: 500;
    padding: 0.3em 0.7em;
    border: none;
    border-radius: 15px;
    font-size: 12px;
    letter-spacing: -0.6px;
    cursor: pointer;

    &:hover {
      color: black;
    }
  }
`;

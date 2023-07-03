import styled, { keyframes } from "styled-components";

const PlaceholderAnimation = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

export const PlaceholderCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
`

export const PlaceholderPagination = styled.span`
  position: absolute;
  width: 555px;
  height: 35px;
  background: lightgray;
  border-radius: 10px;
`

export const PlaceholderRecipe = styled.article`
  width: 280px;
  height: 400px;
  border-radius: 10px;
  margin: 84px 33px 33px 33px;
  background-color: #f2e3db;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  animation: ${PlaceholderAnimation} 1s ease-in-out infinite;
`;

export const PlaceholderFrame = styled.div`
  width: 100%;
  height: 222px;
  background: gray;
  border-radius: 10px;
`;

export const PlaceholderInfo = styled.div`
  padding: 10px;
`;

export const PlaceholderTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;

  h3 {
    width: 150px;
    height: 24px;
    background-color: lightgray;
    border-radius: 4px;
    animation: ${PlaceholderAnimation} 1s ease-in-out infinite;
  }
`;

export const PlaceholderDiets = styled.div`
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
    width: 100px;
    height: 20px;
    background-color: lightgray;
    animation: ${PlaceholderAnimation} 1s ease-in-out infinite;
  }
`;
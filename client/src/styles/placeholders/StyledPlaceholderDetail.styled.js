import styled, { keyframes } from "styled-components";

const PlaceholderAnimation = keyframes`
  0% {
    opacity: 0.4;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    opacity: 0.4;
  }
`;

export const PlaceholderOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PlaceholderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const PlaceholderInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    margin-right: 66px;
  }
`;

export const PlaceholderMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 55px;
`;

export const PlaceholderTitle = styled.h1`
  width: 600px;
  max-width: 600px;
  height: 70px;
  background-color: lightgray;
  margin-bottom: 40px;
  animation: ${PlaceholderAnimation} 1s ease-in-out infinite;

  @media (max-width: 900px) {
    width: 400px;
    height: 50px;
    margin-bottom: 20px;
  }

  @media (max-width: 500px) {
    width: 300px;
    height: 40px;
    margin-bottom: 10px;
  }

  @media (max-width: 400px) {
    width: 250px;
    height: 30px;
    margin-bottom: 5px;
  }
`;

export const PlaceholderImage = styled.div`
  width: 600px;
  max-width: 600px;
  height: 400px;
  background-color: lightgray;
  margin-bottom: 20px;
  animation: ${PlaceholderAnimation} 1s ease-in-out infinite;

  @media (max-width: 900px) {
    width: 400px;
    height: 267px;
  }

  @media (max-width: 600px) {
    width: 300px;
    height: 200px;
  }

  @media (max-width: 500px) {
    width: 200px;
    height: 133px;
  }

  @media (max-width: 400px) {
    width: 150px;
    height: 100px;
  }
`;

export const PlaceholderHealthScore = styled.p`
  width: 250px;
  height: 30px;
  background-color: lightgray;
  margin-bottom: 20px;
  animation: ${PlaceholderAnimation} 1s ease-in-out infinite;

  @media (max-width: 1024px) {
    width: 200px;
  }
  @media (max-width: 600px) {
    margin-top: -21px;
  }
  @media (max-width: 500px) {
    margin-top: -44px;
  }
`;

export const PlaceholderDiets = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin-bottom: 16px;

  @media (max-width: 500px) {
    flex-direction: column;
  }
  button {
    background: lightgray;
    width: 100px;
    height: 30px;
    margin: 0 5px;
    animation: ${PlaceholderAnimation} 1s ease-in-out infinite;

    @media (max-width: 1024px) {
      width: 80px;
    }
    @media (max-width: 768px) {
      width: 60px;
    }
  }
`;

export const PlaceholderSummaryLabel = styled.p`
  width: 600px;
  height: 40px;
  background-color: lightgray;
  margin-bottom: 40px;
  animation: ${PlaceholderAnimation} 1s ease-in-out infinite;

  @media (max-width: 900px) {
    width: 300px;
    height: 30px;
  }
`;

export const PlaceholderSummary = styled.span`
  width: 600px;
  max-width: 600px;
  height: 300px;
  background-color: lightgray;
  margin-top: -27px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  animation: ${PlaceholderAnimation} 1s ease-in-out infinite;

  span {
    /* display: flex; */
    font-family: Arial, Helvetica, sans-serif;
  }

  @media (max-width: 900px) {
    width: 400px;
    height: 120px;
    span {
      margin: 0 10%;
    }
  }

  @media (min-width: 500px) and (max-width: 768px) {
    width: 320px;
    height: 90px;
    span {
      padding: 0 5%;
    }
  }

  @media (min-width: 360px) and (max-width: 500px) {
    width: 270px;
    height: 60px;
    span {
      padding: 0 19%;
    }
  }
`;

export const PlaceholderSteps = styled.section`
  width: 400px;
  height: 40px;
  background-color: lightgray;
  margin: 33px 0 33px 0;
  animation: ${PlaceholderAnimation} 1s ease-in-out infinite;

  @media (max-width: 900px) {
    width: 300px;
    height: 30px;
  }

  @media (max-width: 768) {
    width: 200px;
    height: 20px;
  }
`;

export const PlaceholderStepList = styled.ol`
  li {
    width: 80%;
    height: 30px;
    background-color: lightgray;
    margin: 0 10% 8px;
    animation: ${PlaceholderAnimation} 1s ease-in-out infinite;
  }

  @media (max-width: 900px) {
    padding: 0;

    li {
      height: 25px;
    }
  }
`;
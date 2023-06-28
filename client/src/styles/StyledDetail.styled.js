import styled from "styled-components";

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const DetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;

  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    margin-right: 66px;
  }
`;

export const DetailMain = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 55px;
`;

export const DetailTitle = styled.h1`
  font-size: 55px;
  font-weight: 600;
  color: #263a29;
  margin-bottom: 30px;
  text-align: center;

  @media (max-width: 900px) {
    font-size: 40px;
    margin-bottom: 20px;
  }
`;

export const DetailImage = styled.img`
  width: 600px;
  max-width: 600px;
  height: auto;
  border-radius: 33px;
  border: 4px solid #263a29;

  @media (max-width: 900px) {
    margin-bottom: 30px;
  }
`;

export const DetailHealthScore = styled.p`
  font-size: 25px;
  font-weight: 500;
  text-align: center;
  color: #416450;
  margin-bottom: 20px;

  @media (max-width: 900px) {
    font-size: 20px;
  }
`;

export const DetailDiets = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;

  button {
    background: lightblue;
    color: #263a29;
    font-weight: bold;
    padding: 6px 12px;
    border-radius: 15px;
    border: none;
    font-size: 14px;
    cursor: pointer;

    &:hover {
      color: black;
    }
  }
`;

export const DetailSummaryLabel = styled.span`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  padding: 3px 9px;
  color: #fff;
  background: #41644a;

  @media (max-width: 900px) {
    font-size: 30px;
  }
`;

export const DetailSummary = styled.p`
  font-size: 22px;
  text-align: justify;
  margin-top: -20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  
  span {
    font-family: Arial, Helvetica, sans-serif;
    margin-top: 21px;
  }
  
  @media (max-width: 900px) {
    font-size: 18px;
    span {
      padding: 0 5%;
      margin-left: 12px;
    }
  }
`;

export const DetailSteps = styled.section`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  padding: 3px 9px;
  margin: 33px 0 33px 0;
  color: #fff;
  background: #41644a;

  @media (max-width: 900px) {
    font-size: 30px;
  }
`;

export const DetailStepList = styled.ol`
  padding: 0 66px;

  li {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 22px;
    margin-bottom: 8px;
    padding: 0 5%;
  }

  @media (max-width: 900px) {
    padding: 0;

    li {
      font-size: 18px;
    }
  }
`;

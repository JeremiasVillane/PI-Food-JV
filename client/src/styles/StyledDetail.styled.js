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

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    margin-right: 66px;
  }
`;

export const DetailMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 55px;
`;

export const DetailTitle = styled.h1`
  font-size: 55px;
  font-weight: 600;
  color: #263a29;
  margin-bottom: 40px;
  text-align: center;

  @media (max-width: 900px) {
    font-size: 40px;
    margin-bottom: 20px;
  }

  @media (max-width: 500px) {
    font-size: 40px;
    margin-bottom: -21px;
  }

  @media (max-width: 400px) {
    font-size: 33px;
    margin-bottom: -66px;
  }
`;

export const DetailImage = styled.img`
  width: 600px;
  max-width: 600px;
  height: auto;
  border-radius: 33px;
  border: 4px solid #263a29;
  padding: 0;

  @media (max-width: 900px) {
    transform: scale(1);
  }

  @media (max-width: 600px) {
    transform: scale(0.8);
  }

  @media (max-width: 500px) {
    transform: scale(0.6);
  }

  @media (max-width: 400px) {
    transform: scale(0.5);
  }
`;

export const DetailHealthScore = styled.p`
  font-size: 25px;
  font-weight: 500;
  text-align: center;
  color: #416450;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    font-size: 30px;
  }
  @media (max-width: 600px) {
    margin-top: -21px;
  }
  @media (max-width: 500px) {
    margin-top: -44px;
  }
`;

export const DetailDiets = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin-bottom: 16px;
  
  @media (max-width: 500px) {
    flex-direction: column;
  }
  button {
    background: lightblue;
    color: #263a29;
    font-weight: bold;
    padding: 6px 12px;
    border-radius: 15px;
    border: none;
    font-size: 16px;
    cursor: pointer;

    &:hover {
      color: black;
    }

    @media (max-width: 1024px) {
      font-size: 20px;
    }
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;

export const DetailSummaryLabel = styled.p`
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

export const DetailSummary = styled.span`
  font-size: 22px;
  text-align: justify;
  margin-top: -27px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  span {
    /* display: flex; */
    font-family: Arial, Helvetica, sans-serif;
  }

  @media (max-width: 900px) {
    font-size: 20px;
    span {
      margin: 0 10%;
    }
  }

  @media (min-width: 500px) and (max-width: 768px) {
    font-size: 18px;
    span {
      padding: 0 5%;
    }
  }

  @media (min-width: 360px) and (max-width: 500px) {
    font-size: 18px;
    span {
      padding: 0 19%;
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

  @media (max-width: 768) {
    font-size: 20px;
  }
`;

export const DetailStepList = styled.ol`
  li {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 22px;
    margin: 0 10% 8px;
  }

  @media (max-width: 900px) {
    padding: 0;

    li {
      font-size: 18px;
    }
  }
`;

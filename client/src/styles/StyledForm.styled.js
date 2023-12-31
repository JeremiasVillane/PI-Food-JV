import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  padding: 0 3%;

  @media (max-width: 768px) {
    margin-top: 10px;
    padding: 0 6%;
  }
`;

export const FormTitle = styled.h1`
  font-size: 55px;
  font-weight: bold;
  color: #263a29;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

export const FormField = styled.div`
  margin-bottom: 20px;
  padding: 0 3%;
`;

export const FormLabel = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: #416450;
  margin-bottom: 10px;

  span {
    font-size: 18px;
    color: #fff;
    padding: 6px;
    margin: 4px;
    background-color: #57b756;
    border-radius: 50%;
  }
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 2px solid #263a29;
  border-radius: 5px;

  &:focus {
    outline: none;
    border-color: #416450;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 2px solid #263a29;
  border-radius: 5px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #416450;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const FormStepList = styled.ol`
  margin-left: 20px;
  padding: 0;

  li {
    margin-bottom: 10px;
  }
`;

export const FormStepInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 2px solid #263a29;
  border-radius: 5px;

  &:focus {
    outline: none;
    border-color: #416450;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const FormCheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  input[type="checkbox"] {
    margin-right: 5px;
  }
`;

export const FormCheckboxLabel = styled.label`
  text-transform: capitalize;
  font-size: 16px;
  color: #263a29;
`;

export const FormRangeInput = styled.input`
  width: 100%;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const FormImageInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 2px solid #263a29;
  border-radius: 5px;

  &:focus {
    outline: none;
    border-color: #416450;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ErrorBubble = styled.span`
  width: 333px;
  height: 60px;
  background: #db3820;
  color: white;
  padding: 9px;
  position: relative;
  border-radius: 10px;

  &:before {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 17px;
    width: 0;
    height: 0;
    border-left: 13px solid transparent;
    border-right: 13px solid transparent;
    border-bottom: 26px solid #db3820;
  }
`;

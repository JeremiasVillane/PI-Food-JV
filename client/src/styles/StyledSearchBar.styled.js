import styled from "styled-components";

export const SearchBarContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SearchBarMain = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 10px;
`;

export const Search = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SearchInput = styled.input`
  height: 30px;
  padding: 5px;
  margin-right: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;

  &:focus {
    outline: none;
    border-color: #416450;
  }
`;

export const SearchBarButton = styled.button`
  background-color: lightblue;
  color: #263a29;
  border-radius: 5px;
  border: none;
  height: 30px;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: #416450;
    color: white;
  }
`;

export const Order = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SortByLabel = styled.p`
  color: white;
  white-space:nowrap;
  padding: 0 6px 0 12px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 15px;
`;

export const SortBySelect = styled.select`
  font-family: Arial, Helvetica, sans-serif;
  font-size: small;
  height: 30px;
  padding: 5px;
  margin-right: 10px;
`;

export const Arrow = styled.span`
  width: 9px;
  height: 9px;
  margin-left: 9px;
  border: 2px solid #fff;
  border-left: 0;
  border-top: 0;
  transform: rotate(45deg);
  translate: 0 2px;

  &[show-advanced-options="true"] {
    transform: rotate(225deg);
    translate: 0 8px;
  }
`;

export const AdvancedSearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: 0.15s all ease-in-out;
`;

export const AdvancedSearchLink = styled.span`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  white-space: nowrap;
  cursor: pointer;
  margin-left: 10px;
  color: white;
`;

export const AdvancedOptionsContainer = styled.div`
  position: absolute;
  top: 80px;
  right: 0;
  background-color: #263A29;
  border-top: 4px solid #41644a;
  color: #fff;
  padding: 10px;
  transform-origin: top right;
  transform: scale(0);
  /* display: none; */
  transition: 0.15s all ease-in-out;

  &[show-advanced-options="true"] {
      /* display: block; */
      transform-origin: top right;
      transform: scale(1);

    }

  &[scrolled="true"] {
    top: 66px;
    border-top: 2px solid #41644a
    }
`;

export const SourceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const SourceSelect = styled.select`
  /* margin-bottom: 10px; */
`;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const CheckboxLabel = styled.label`
  font-family: Arial, Helvetica, sans-serif;
  font-size: small;
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

export const CheckboxInput = styled.input`
  margin-right: 5px;
`;
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
  border: 1px solid #ccc;
  border-radius: 9px;
`;

export const SearchButton = styled.button`
  height: 30px;
  padding: 5px 10px;
  background-color: lightblue;
  border: none;
  border-radius: 9px;
  cursor: pointer;
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
`;

export const SortBySelect = styled.select`
  font-family: Arial, Helvetica, sans-serif;
  font-size: small;
  height: 30px;
  padding: 5px;
  margin-right: 10px;
`;

export const ResetButton = styled.button`
  white-space:nowrap;
  height: 30px;
  padding: 5px 10px;
  background-color: lightblue;
  border: none;
  border-radius: 9px;
  cursor: pointer;
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
`;

export const AdvancedSearchLink = styled.span`
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
  background-color: white;
  border: 1px solid #ccc;
  padding: 10px;
  display: none;

  &[show-advanced-options="true"] {
      display: block;
    }
`;

export const SourceSelect = styled.select`
  margin-bottom: 10px;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

export const CheckboxInput = styled.input`
  margin-right: 5px;
`;
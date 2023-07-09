import styled from "styled-components";

export const SearchBarContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 1024px) {
    transform: translateX(100%);
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
    margin-top: 120%;
    margin-right: -44px;
  }

  &[is-search-open="true"] {
    transform: translateX(0%);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    z-index: 100;
  }
`;

export const SearchBarMain = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 1024px) {
    justify-content: flex-end;
    align-items: center;
    line-height: 66px;
    flex-wrap: wrap;
  }
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

export const Order = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SortByLabel = styled.p`
  color: white;
  white-space: nowrap;
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

  @media (max-width: 1024px) {
    flex-direction: column;
  }
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
  background-color: #263a29;
  border-top: 4px solid #41644a;
  color: #fff;
  padding: 10px;
  transform-origin: top right;
  transform: scale(0);
  transition: 0.15s all ease-in-out;

  @media (max-width: 1024px) {
    border: none;
    top: 100px;
    width: 333px;
  }

  &[show-advanced-options="true"] {
    transform-origin: top right;
    transform: scale(1);
  }

  &[scrolled="true"] {
    top: 66px;
    border-top: 2px solid #41644a;

    @media (max-width: 1024px) {
    border: none;
    top: 100px;
    width: 250px;
  }
  }
`;

export const SourceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SourceSelect = styled.select``;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const CheckboxLabel = styled.label`
  font-family: Arial, Helvetica, sans-serif;
  text-transform: capitalize;
  font-size: small;
  display: flex;
  align-items: center;
  margin: 6px;
`;

export const CheckboxInput = styled.input`
  margin-right: 5px;
`;

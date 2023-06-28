import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { changePage, filtering, sorting } from "../redux/actions";
import { SearchBarContainer, SearchBarMain, Search, SearchInput, SearchButton, Order, SortByLabel, SortBySelect, ResetButton, AdvancedSearchContainer, AdvancedSearchLink, AdvancedOptionsContainer, SourceSelect, CheckboxContainer, CheckboxLabel, CheckboxInput, Arrow } from "../styles/StyledSearchBar.styled";

const SearchBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { diets, filteredRecipes } = useSelector((state) => state);
  const [search, setSearch] = useState("");
  const [source, setSource] = useState("");
  const [dietsState, setDietsState] = useState({});
  const [order, setOrder] = useState("");
  const [filters, setFilters] = useState({
    search: "",
    source: "",
    diets: {},
  });
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (
      search === "" &&
      source === "" &&
      Object.keys(dietsState).length === 0 &&
      order === ""
    ) {
      !filteredRecipes.length &&
        dispatch(filtering(filters)).then(() => {
          if (order) dispatch(sorting(order));
        });
    }
  }, [dispatch, search, source, dietsState, order, pathname, navigate]);

  const handleChange = (event) => {
    const { name, value, checked } = event.target;

    checked !== undefined &&
      name !== "search" &&
      setDietsState((prevDietsState) => ({
        ...prevDietsState,
        [value]: checked,
      }));
    name === "search" && setSearch(value);
    name === "source" && setSource(value);
    if (name === "sorting") {
      setOrder(value);
      dispatch(sorting(value));
    }
  };

  const handleSearch = () => {
    const filters = {
      search,
      source,
      diets: dietsState,
    };
    setFilters(filters);
    dispatch(filtering(filters)).then(() => {
      if (order) dispatch(sorting(order));
    });
    // setIsSearching(true);
    dispatch(changePage(0));
    if (pathname !== "/home") navigate("/home");
  };

  const handleKeypress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleResetFilters = () => {
    setDietsState({});
    setSearch("");
    setSource("");
    setOrder("");
    // setIsSearching(false);
    const filters = {
      search: "",
      source: "",
      diets: {},
    };
    setFilters(filters);
    dispatch(filtering(filters));
  };


  const [showAdvancedOptions, setShowAdvancedOptions] = useState(false);

  const handleClick = () => setShowAdvancedOptions((curr) => !curr);

  return (
    <>
      {pathname === "/home" && (
        <SearchBarContainer>
          <SearchBarMain>
            <Search>
            <SearchInput
              name="search"
              value={search}
              type="search"
              onChange={handleChange}
              onKeyPress={handleKeypress}
              placeholder="Search recipes..."
            />
            <SearchButton onClick={handleSearch}>Search</SearchButton>
            </Search>
            <Order>
              <SortByLabel>Sort by:</SortByLabel>
            <SortBySelect name="sorting" value={order} onChange={handleChange}>
              <option value="default">Default</option>
              <option value="az">Name Asc.</option>
              <option value="za">Name Desc.</option>
              <option value="healthAsc">Health Score Asc.</option>
              <option value="healthDesc">Health Score Desc.</option>
            </SortBySelect>
          <ResetButton onClick={handleResetFilters}>Reset</ResetButton>
          </Order>
          </SearchBarMain>

          <AdvancedSearchContainer>
          <AdvancedSearchLink onClick={handleClick}>
            Advanced search {<Arrow show-advanced-options={showAdvancedOptions.toString()} />}
          </AdvancedSearchLink>
          <AdvancedOptionsContainer show-advanced-options={showAdvancedOptions.toString()}>
            <SourceSelect
              name="source"
              value={source}
              onChange={handleChange}
            >
              <option value="">All recipes</option>
              <option value="api">Henry Food recipes</option>
              <option value="db">My recipes</option>
            </SourceSelect>
            <CheckboxContainer>
              {diets.map((diet, index) => (
                <CheckboxLabel key={index}>
                  <CheckboxInput
                    key={index}
                    type="checkbox"
                    value={diet}
                    checked={dietsState[diet] || false}
                    onChange={handleChange}
                  />
                  {diet.charAt(0).toUpperCase() + diet.slice(1)}
                </CheckboxLabel>
              ))}
            </CheckboxContainer>
          </AdvancedOptionsContainer>
        </AdvancedSearchContainer>
      </SearchBarContainer>
    )}
  </>
  );
};

export default SearchBar;

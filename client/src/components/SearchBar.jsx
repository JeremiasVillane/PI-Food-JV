import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { changePage, filtering, resetFilters, sorting } from "../redux/actions";
import {
  SearchBarContainer,
  SearchBarMain,
  Search,
  SearchInput,
  SearchBarButton,
  Order,
  SortByLabel,
  SortBySelect,
  AdvancedSearchContainer,
  AdvancedSearchLink,
  AdvancedOptionsContainer,
  SourceContainer,
  SourceSelect,
  CheckboxContainer,
  CheckboxLabel,
  CheckboxInput,
  Arrow,
} from "../styles/StyledSearchBar.styled";

const SearchBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const diets = useSelector((state) => state.recipes.diets);
  const filteredRecipes = useSelector((state) => state.recipes.filteredRecipes);
  const [search, setSearch] = useState("");
  const [source, setSource] = useState("");
  const [dietsState, setDietsState] = useState({});
  const [order, setOrder] = useState("");
  const [filters, setFilters] = useState({
    search: "",
    source: "",
    diets: {},
  });

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
    dispatch(changePage(0));
    window.scrollTo(0, 0);
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
    dispatch(resetFilters());
    dispatch(changePage(0));
    window.scrollTo(0, 0);
  };

  const [showAdvancedOptions, setShowAdvancedOptions] = useState(false);

  const handleClick = () => setShowAdvancedOptions((curr) => !curr);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
              <SearchBarButton onClick={handleSearch}>Search</SearchBarButton>
            </Search>
            <Order>
              <SortByLabel>Sort by:</SortByLabel>
              <SortBySelect
                name="sorting"
                value={order}
                onChange={handleChange}
              >
                <option value="default">Default</option>
                <option value="az">Name Asc.</option>
                <option value="za">Name Desc.</option>
                <option value="healthAsc">Health Score Asc.</option>
                <option value="healthDesc">Health Score Desc.</option>
              </SortBySelect>
              <SearchBarButton onClick={handleResetFilters}>
                Reset
              </SearchBarButton>
            </Order>
          </SearchBarMain>

          <AdvancedSearchContainer>
            <AdvancedSearchLink onClick={handleClick}>
              Advanced search
              {<Arrow show-advanced-options={showAdvancedOptions.toString()} />}
            </AdvancedSearchLink>
            <AdvancedOptionsContainer
              show-advanced-options={showAdvancedOptions.toString()}
              scrolled={scrolled.toString()}
            >
              <SourceContainer>
                <SortByLabel>Source:</SortByLabel>
                <SourceSelect
                  name="source"
                  value={source}
                  onChange={handleChange}
                >
                  <option value="">All recipes</option>
                  <option value="api">Food World recipes</option>
                  <option value="db">My recipes</option>
                </SourceSelect>
                &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;
                <SortByLabel>Filter by diets:</SortByLabel>
              </SourceContainer>
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

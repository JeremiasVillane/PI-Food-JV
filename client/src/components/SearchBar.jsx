import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { changePage, filtering, sorting } from "../redux/actions";

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

  return (
    <div>
      <input
        name="search"
        value={search}
        type="search"
        onChange={handleChange}
        onKeyPress={handleKeypress}
        placeholder="Search recipes..."
      />
      <button onClick={handleSearch}>Search</button>
      {pathname === "/home" && (
        <>
          <div onChange={handleChange}>
            <select name="source" value={source} onChange={handleChange}>
              <option value="">All recipes</option>
              <option value="api">Henry Food recipes</option>
              <option value="db">My recipes</option>
            </select>
          </div>
          <div>
            {diets.map((diet, index) => (
              <label key={index}>
                <input
                  key={index}
                  type="checkbox"
                  value={diet}
                  checked={dietsState[diet] || false}
                  onChange={handleChange}
                />
                {diet.charAt(0).toUpperCase() + diet.slice(1)}
              </label>
            ))}
          </div>
          <select name="sorting" value={order} onChange={handleChange}>
            <option value="default">Default</option>
            <option value="az">A to Z</option>
            <option value="za">Z to A</option>
            <option value="healthAsc">Health Score Asc.</option>
            <option value="healthDesc">Health Score Desc.</option>
          </select>
          <button onClick={handleResetFilters}>Reset all fields</button>
        </>
      )}
    </div>
  );
};

export default SearchBar;

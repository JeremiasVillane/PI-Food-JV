import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { filtering } from "../redux/actions";

const SearchBar = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const diets = useSelector((state) => state.diets);
  const [search, setSearch] = useState("");
  const [source, setSource] = useState("");
  const [dietsState, setDietsState] = useState({});

  useEffect(() => {
    const filters = {
      search,
      source,
      diets: dietsState,
    };
    dispatch(filtering(filters));
    if (pathname !== "/home") {
      navigate("/home");
    }
  }, [dispatch, search, source, dietsState]);

  const handleCheckbox = (event) => {
    const { value, checked } = event.target;

    setDietsState((prevDietsState) => ({
      ...prevDietsState,
      [value]: checked,
    }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "search") {
      setSearch(value);
    } else if (name === "source") {
      setSource(value);
    }
  };

  const handleSearch = () => {
    const filters = {
      search,
      source,
      diets: dietsState,
    };

    dispatch(filtering(filters));

    if (pathname !== "/home") {
      navigate("/home");
    }
  };

  const handleKeypress = (event) => {
    if (event.key === "Enter") {
      handleSearch(event);
    }
  };

  const handleResetFilters = () => {
    setDietsState({});
    setSearch("");
    setSource("");
  };

  return (
    <div>
      <input
        name="search"
        value={search}
        type="text"
        onChange={handleChange}
        onKeyPress={handleKeypress}
        placeholder="Search recipes..."
      />
      {pathname !== "/home" && (
        <button onClick={handleSearch}>Search</button>
      )}
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
                  onChange={handleCheckbox}
                />
                {diet.charAt(0).toUpperCase() + diet.slice(1)}
              </label>
            ))}
          </div>
          <button onClick={handleResetFilters}>Reset filters</button>
        </>
      )}
    </div>
  );
};

export default SearchBar;

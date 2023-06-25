import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { filtering, sorting } from "../redux/actions";

const SearchBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const diets = useSelector((state) => state.diets);
  const [search, setSearch] = useState("");
  const [source, setSource] = useState("");
  const [dietsState, setDietsState] = useState({});
  const [order, setOrder] = useState("");
  const [filters, setFilters] = useState({});

  useEffect(() => {
    const filters = {
      search,
      source,
      diets: dietsState,
    };
    setFilters(filters);
    dispatch(filtering(filters))?.then(() => {
      //then(order && dispatch(sorting(order)))
      if (order) dispatch(sorting(order));
    });
    if (pathname !== "/home") navigate("/home");
  }, [dispatch, search, source, dietsState]);

  const handleChange = (event) => {
    const { name, value, checked } = event.target;

    checked !== undefined &&
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

  const handleResetFilters = () => {
    setDietsState({});
    setSearch("");
    setSource("");
    setOrder("");
  };

  return (
    <div>
      <input
        name="search"
        value={search}
        type="text"
        onChange={handleChange}
        placeholder="Search recipes..."
      />
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
          <button onClick={handleResetFilters}>Reset filters</button>
        </>
      )}
    </div>
  );
};

export default SearchBar;

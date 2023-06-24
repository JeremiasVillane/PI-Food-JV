import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { filtering } from "../redux/actions";

const SearchBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const diets = useSelector((state) => state.diets);
  const [search, setSearch] = useState("");
  const [source, setSource] = useState("");
  const [dietsState, setDietsState] = useState({});
  const [order, setOrder] = useState("");
  const [filters, setFilters] = useState({})

  useEffect(() => {
    const filters = {
      search,
      source,
      diets: dietsState,
    };
    setFilters(filters);
    dispatch(filtering(filters, order));
    if (pathname !== "/home") {
      navigate("/home");
    }
  }, [dispatch, search, source, dietsState, order]);

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
    } else if (name === "order_alpha") {
      setOrder(value)
      // dispatch(filtering(filters, value));
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
                  onChange={handleCheckbox}
                />
                {diet.charAt(0).toUpperCase() + diet.slice(1)}
              </label>
            ))}
          </div>
          <select name="order_alpha" value={order} onChange={handleChange}>
            <option value="default">Default</option>
            <option value="az">Ascending</option>
            <option value="za">Descending</option>
          </select>
          <button onClick={handleResetFilters}>Reset filters</button>
        </>
      )}
    </div>
  );
};

export default SearchBar;

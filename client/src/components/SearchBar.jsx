import React, { useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { filtering } from "../redux/actions";

const SearchBar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const diets = useSelector((state) => state.diets);
  const [filters, setFilters] = useState({
    search: "",
    source: "",
    diets: "",
  });

  const handleCheckbox = (event) => {
    let { value, checked } = event.target;
    if (!checked) {
      // Eliminar la última palabra si el checkbox se desmarca
      const updatedDiets = filters.diets
        .split(",")
        .filter((diet) => diet !== value)
        .join(",");
      setFilters({
        ...filters,
        diets: updatedDiets,
      });
      dispatch(
        filtering({
          ...filters,
          diets: updatedDiets,
        })
      );
    } else {
      setFilters({
        ...filters,
        diets: [filters.diets, value].join(","),
      });
      dispatch(
        filtering({
          ...filters,
          diets: [filters.diets, value].join(","),
        })
      );
    }
    location.pathname !== "/home" && navigate("/home");
  };
  

  const handleChange = (event) => {
    let { name, value, type, checked } = event.target;
    type === "checkbox" && (name = "diets");
    type === "checkbox" && !checked && (value = "");
    
    setFilters({
      ...filters,
      [name]: value,
    });
    name !== "search" &&
      dispatch(
        filtering({
          ...filters,
          [name]: value,
        })
      );
    location.pathname !== "/home" && navigate("/home");
  };

  const handleSearch = (event) => {
    event.preventDefault();
    dispatch(filtering(filters));
    location.pathname !== "/home" && navigate("/home");
  };

  // Busca al presionar la tecla Enter
  const handleKeypress = (event) => {
    if (event.key === "Enter") {
      handleSearch(event);
    }
  };

  return (
    <div>
      <input
        name="search"
        value={filters.search}
        type="text"
        onChange={handleChange}
        onKeyPress={handleKeypress}
      />
      <button onClick={handleSearch}>Search</button>
      <div onChange={handleChange}>
        <select name="source">
          <option value="">All recipes</option>
          <option value="api">Henry Food recipes</option>
          <option value="db">My recipes</option>
        </select>
      </div>
      <div>
        {diets.map(
          (diet, index) => (
        <label onChange={handleCheckbox}>
          <input key={index} type="checkbox" value={diet} />
          {diet.charAt(0).toUpperCase() + diet.slice(1)}
        </label>
          )
        )}

      </div>
    </div>
  );
};

export default SearchBar;

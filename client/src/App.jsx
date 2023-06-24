import React from "react";
// import { useDispatch } from "react-redux";
import { Routes, Route, useLocation } from "react-router-dom";
import { NavBar } from "./components";
// import { filterByDiets } from "./redux/actions";
import { About, Detail, Form, Home, Landing, NotFound } from "./views";

const App = () => {
  const { pathname } = useLocation();
  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  // const handleDiet = (event) => {
  //   const { textContent } = event.target;
  //   dispatch(filterByDiets(textContent));
  //   location.pathname !== "/home" && navigate("/home");
  // };
  
  return (
    <div className="App">
      {pathname !== "/" && <NavBar />}
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/new" element={<Form />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;

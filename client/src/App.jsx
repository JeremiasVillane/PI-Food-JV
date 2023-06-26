import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { NavBar } from "./components";
import { About, Detail, Form, Home, Landing, NotFound } from "./views";

const App = () => {
  const { pathname } = useLocation();
  
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

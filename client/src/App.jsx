import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./App.css";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Form from "./pages/Form";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
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

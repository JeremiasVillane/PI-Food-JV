import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, useLocation } from "react-router-dom";
import { Footer, NavBar } from "./components";
import Modal from "./components/Modal";
import GlobalStyles from "./styles/GlobalStyles";
import { About, Detail, Form, Home, Landing, NotFound } from "./views";
import { setAlert } from "./redux/actions";

const App = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const alert = useSelector((state) => state.ui.alert);

  const handleClose = () => {
    dispatch(setAlert(null))
  }
  
  return (
    <div>
      <GlobalStyles />
      {alert && <Modal message={Object.values(alert)[0]} mode={Object.keys(alert)[0]} handleClose={handleClose} />}
      {pathname !== "/" && <NavBar />}
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/new" element={<Form />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {pathname !== "/" && <Footer />}
    </div>
  );
};

export default App;

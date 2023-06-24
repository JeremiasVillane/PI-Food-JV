import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetDetail } from "../redux/actions";
import { Cards } from "../components";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetDetail());
  }, [dispatch]);

  return (
    <>
      <h1>Home</h1>
      <Cards />
    </>
  );
};

export default Home;

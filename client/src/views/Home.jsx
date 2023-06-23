import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetDetail } from "../redux/actions";
import { Cards } from "../components";

const Home = ({handleDiet}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetDetail());
  }, [dispatch]);

  return (
    <>
      <h1>Home</h1>
      <Cards handleDiet={handleDiet} />
    </>
  );
};

export default Home;

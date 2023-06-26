import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllRecipes, getDiets } from '../redux/actions';

const Landing = () => {
  const dispatch = useDispatch();
  const { diets, recipes } = useSelector((state) => state);

  useEffect(() => {
    !recipes.length &&
    dispatch(getAllRecipes());
    !diets.length &&
    dispatch(getDiets())
  }, [dispatch]);
  return (
    <div>
      <h1>Landing</h1>
      <Link to="/home"><button>HOME</button></Link>
    </div>
  )
}

export default Landing
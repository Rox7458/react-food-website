import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { RecipeContext } from "../context/RecipeProvider";
import diet  from "../assets/diet.svg"

const Details = () => {
  const { state: {recipe} } = useLocation();
  const {darkMode}=useContext(RecipeContext)
  console.log(recipe.strMeal);

  return (
     <div className={darkMode ? "dark" : ""}>
      <div className={`min-h-screen ${darkMode? "bg-gray-800 text-gray-100" : "bg-gray-100 text-gray-800"}`}>
        <header className="flex justify-between items-center">
          <h1 className="text-3xl">{recipe.strMeal}</h1>
          <img src={diet} alt=""  className="w-20 h-20 cursor-pointer mr-6"/>

        </header>
        
      </div>
    </div>
  );
};

export default Details;

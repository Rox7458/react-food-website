import React, { useContext } from "react";
import RecipeNavbar from "./../components/RecipeNavbar";
import { Outlet } from "react-router-dom";
import { RecipeContext } from "../context/RecipeProvider";

const Layout = () => {
  const { darkMode, toggleDarkMode } = useContext(RecipeContext);
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className={`min-h-screen transition-colors duration-200 text-gray-900
       ${darkMode ? "bg-slate-800 bg-[url(' ')]" : "bg-stone-50"}`}>
        <RecipeNavbar />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;

import React, { useContext } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { ThemeData } from "../context/ThemeContext";

const Navbar = () => {
    const { theme, toggleTheme } = useContext(ThemeData);

    return (
        <nav
            className={`navbar flex items-center justify-between px-6 py-4 
      ${theme === "light" ? "bg-white text-black" : "bg-green-500 text-white"}`}
        >
            <h2 className="logo text-xl font-semibold">Digital Agency</h2>

            <ul className="nav-links flex gap-6 list-none cursor-pointer">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>

            <button className="theme-btn cursor-pointer" onClick={toggleTheme}>
                {theme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
            </button>
        </nav>
    );
};

export default Navbar;

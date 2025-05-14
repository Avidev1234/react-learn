import { useState, createContext, use } from "react";

// creating context step-1
export const ThemeContext = createContext();

// step-2 provider component

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState("dark");

	const handleToogletheme = () => {
		return setTheme((prevTheme) => 
			(prevTheme === "dark" ? "light" : "dark")
		);
	};
	return (
		<ThemeContext.Provider value={{ theme, handleToogletheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

// creating a component

export const DarkLight = () => {
	const {theme, handleToogletheme} = use(ThemeContext);
	return (
		<div className={`p-4 h-lvh flex flex-col justify-center item-center ${theme==="dark" ? "bg-gray-800" : "bg-white"}`}>
			<h1 className={`${theme==="dark" ? "text-gray-100" : "text-black" }`}>{theme ==="dark" ? "Dark Light Mode" : "Dark Light Mode"}</h1>
			<p className={`${theme==="dark" ? "text-gray-100" : "text-black" }`}>{theme ==="dark" ? "Dark Light Mode" : "Dark Light Mode"} Hello rect v19</p>
			<button onClick={handleToogletheme}>
				{theme === "dark" ? "Swich to light mode" : "Swich to dark mode"}
			</button>
		</div>
	);
};

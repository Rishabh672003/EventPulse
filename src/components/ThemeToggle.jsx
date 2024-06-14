import React, { useState, useEffect } from "react";

const ThemeToggle = () => {
	const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

	useEffect(() => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
		localStorage.setItem("theme", theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	return (
		<button onClick={toggleTheme} className="p-2 bg-gray-500 rounded">
			{theme === "light" ? "Dark Mode" : "Light Mode"}
		</button>
	);
};

export default ThemeToggle;

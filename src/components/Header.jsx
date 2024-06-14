// src/components/Header.js
import React from "react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
	return (
		<header className="bg-gray-800 dark:bg-gray-900 p-4 text-white flex justify-between items-center">
			<h1 className="text-2xl">EventPulse</h1>
			<ThemeToggle />
		</header>
	);
};

export default Header;

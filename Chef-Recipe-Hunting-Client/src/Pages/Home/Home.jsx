import React from "react";
import Navbar from "../../Header/Navbar";
import Footer from "../../Components/Footer";
import { Outlet } from "react-router-dom";

const Home = () => {
	return (
		<div>
			<Navbar />

			<main className="min-h-[calc(100vh-144px)]">
				<Outlet />
			</main>

			<Footer />
		</div>
	);
};

export default Home;

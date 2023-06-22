import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login-pages/Login";
import Registration from "../Pages/Login-pages/Registration";
import Error from "../Pages/ErrorPages/Error";
import Home from "../Pages/Home/Home";
import HomeLayout from "../Layout/HomeLayout";
import ChefDetails from "../Pages/ChefDetails/ChefDetails";
import Private from "./Private";
import LoadingSpinner from "../Loading/LoadingSpinner";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";

// const link = `http://localhost:1010`;
const link = `https://chef-recipe-hunting-server-gules.vercel.app`;

const Routes = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		errorElement: <Error />,
		children: [
			{
				path: "/",
				loader: () => {
					return fetch(`${link}/chef-data`);
				},
				element: <HomeLayout />,
			},
			{
				path: "chef/:id",
				loader: ({ params }) => fetch(`${link}/chef-data/${params.id}`),
				element: (
					<Private>
						{" "}
						<ChefDetails />{" "}
					</Private>
				),
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/registration",
				element: <Registration />,
			},
			{
				path: "/blog",
				element: <Blog />,
			},
			{
				path: "/about",
				element: <About />,
			},
		],
	},
]);

export default Routes;

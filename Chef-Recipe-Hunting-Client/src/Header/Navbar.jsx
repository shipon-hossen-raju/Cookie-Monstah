import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProviders/AuthProvider";
import { FaUserAlt } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
	const [isDropdown, setDropdown] = useState(false);
	const { user, setUser, logOut } = useContext(AuthContext);

	const logoutHandle = () => {
		logOut()
			.then((result) => {
				// setUser(null);
				setDropdown(!isDropdown);
			})
			.catch();
	};

	return (
		<nav className="bg-gray-800">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					<div>
						<h2 className="text-gray-100 font-semibold">Cookie-Monstah</h2>
					</div>
					<div className="flex items-center h-full navLinks">
						<div className="flex items-center ">
							<NavLink
								to="/"
								className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
							>
								Home
							</NavLink>
							<NavLink
								to="/blog"
								className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
							>
								Blog
							</NavLink>
							<NavLink
								to="/about"
								className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
							>
								About
							</NavLink>
						</div>
						<div className="flex items-center ml-2 z-10">
							{user ? (
								<div className="flex gap-3 relative">
									<button onClick={() => setDropdown(!isDropdown)}>
										{user?.photoURL ? (
											<img
												title={
													user?.displayName
														? user?.displayName
														: "Update Your Profile"
												}
												className="object-cover w-12 h-12 border-4 border-green-600 rounded-full "
												src={user?.photoURL}
												alt="Avatar"
											/>
										) : (
											<FaUserAlt className="text-gray-300 h-6 w-6 hover:text-gray-100" />
										)}
									</button>

									{isDropdown && (
										<div className="absolute w-max bg-gray-100 top-full -right-0 shadow-lg rounded-md py-2 px-3 divide-y-2">
											<h1 className="py-3">{user?.email && user?.email}</h1>
											<button
												onClick={logoutHandle}
												className="text-gray-600 w-full hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
											>
												Logout
											</button>
										</div>
									)}
								</div>
							) : (
								<NavLink
									to="/login"
									className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
								>
									Login
								</NavLink>
							)}
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProviders/AuthProvider";
import LoadingSpinner from "../../../Loading/LoadingSpinner";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ChefCard = ({ chef }) => {
	const { isLoading } = useContext(AuthContext);

	if (isLoading) {
		return <LoadingSpinner />;
	}

	const {
		chef_picture,
		chef_name,
		years_of_experience,
		number_of_recipes,
		likes,
		id,
	} = chef;

	return (
		<div className="rounded overflow-hidden shadow-lg">
			<LazyLoadImage
				effect="blur"
				className="w-full h-80"
				src={chef_picture}
				alt={chef_name}
			/>

			<div className="px-6 py-4">
				<div className="font-bold text-xl mb-2">{chef_name}</div>
				<p className="text-gray-700 text-base mb-2">
					Years of Experience: {years_of_experience}
				</p>
				<p className="text-gray-700 text-base mb-2">
					Number of Recipes: {number_of_recipes}
				</p>
				<p className="text-gray-700 text-base mb-2">Likes: {likes}</p>
				<Link to={`/chef/${id}`}>
					<button className="w-full transition duration-300 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
						View Details
					</button>
				</Link>
			</div>
		</div>
	);
};

export default ChefCard;

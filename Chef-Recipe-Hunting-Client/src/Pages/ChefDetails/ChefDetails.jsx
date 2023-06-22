import React from "react";
import { useLoaderData } from "react-router-dom";
import ChefBanner from "./ChefBanner";
import Recipe from "./Recipe";

const ChefDetails = () => {
	const chef = useLoaderData();

	const { recipes } = chef;

	return (
		<div>
			<div>
				<ChefBanner chef={chef} />
			</div>

			<div className="py-28">
				<div className="grid container mx-auto gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
					{recipes.map((recipe, i) => (
						<Recipe key={i} recipe={recipe} />
					))}
				</div>
			</div>
		</div>
	);
};

export default ChefDetails;

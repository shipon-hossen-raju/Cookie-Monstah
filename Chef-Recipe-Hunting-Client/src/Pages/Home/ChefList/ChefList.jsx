import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ChefCard from "./ChefCard";

const ChefList = () => {
	const chefData = useLoaderData();

	return (
		<div className="container mx-auto">
			<div>
				<h1 className="font-bold mb-6 text-4xl ">Chef List</h1>
				<div className="p-4 grid gap-4 mb-14 md:gap-5 lg:gap-7 grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
					{chefData.map((chef) => (
						<ChefCard key={chef.id} chef={chef} />
					))}
				</div>
			</div>
		</div>
	);
};

export default ChefList;

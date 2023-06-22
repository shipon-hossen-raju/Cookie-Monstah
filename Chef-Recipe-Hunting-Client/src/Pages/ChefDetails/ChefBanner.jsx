import React from "react";

const ChefBanner = ({ chef }) => {
	const {
		chef_profile_image,
		chef_name,
		years_of_experience,
		number_of_recipes,
		likes,
		description,
		recipes,
	} = chef;

	return (
		<div className="bg-gray-200">
			<div className="container mx-auto">
				<div className="relative">
					<div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
						<div className="grid items-center grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
							<div className="mt-12 sm:mt-0">
								<img
									className="h-64 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
									src={chef_profile_image}
								/>
							</div>

							<div className="p-4">
								<h1 className="text-4xl font-semibold mb-6"> {chef_name} </h1>
								<p> {description} </p>
								<div className="inline-grid gap-2 grid-cols-2 justify-center my-4 mt-10">
									{years_of_experience && (
										<p className="border border-gray-800 rounded-lg p-4 text-center capitalize">
											<span> Years Of Experience </span>
											<br />
											<span className="text-2xl font-semibold">
												{" "}
												{years_of_experience}
											</span>
										</p>
									)}
									{number_of_recipes && (
										<p className="border border-gray-800 rounded-lg p-4 text-center capitalize">
											<span> Number Of Recipes</span>
											<br />
											<span className="text-2xl font-semibold">
												{number_of_recipes}
											</span>
										</p>
									)}
									{likes && (
										<p className="border border-gray-800 rounded-lg p-4 text-center capitalize">
											<span> Likes </span>
											<br />
											<span className="text-2xl font-semibold"> {likes} </span>
										</p>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChefBanner;

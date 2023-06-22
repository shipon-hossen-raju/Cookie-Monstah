import React from "react";
import banner1 from "../../assets/image/banner1.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Banner = () => {
	return (
		<div className=" bg-gray-200 mb-16">
			<div className="container mx-auto relative">
				<div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
						<div className="flex flex-col justify-center">
							<h2 className="text-3xl  md:text-4xl lg:text-6xl font-extrabold text-gray-900 sm:text-4xl mb-5">
								We Make <br />
								Delicious Food
							</h2>
							<p className="text-lg text-gray-500">
								Lorem, ipsum dolor sit amet consectetur adipisicing elit.
								Repellat adipisci nam eos voluptatum nemo voluptates cumque
								excepturi quisquam veniam illum laboriosam perspiciatis
								similique reiciendis .
							</p>
							<div className="mt-8 sm:flex sm:justify-start">
								<div className="rounded-md shadow">
									<a
										href="#"
										className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
									>
										Shop Now
									</a>
								</div>
							</div>
						</div>
						<div className="mt-12 sm:mt-0">
							<LazyLoadImage
								effect="blur"
								className="h-64 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
								src={banner1}
								alt="Woman in a summer hat holding a beach bag"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;

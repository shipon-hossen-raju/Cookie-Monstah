import React from "react";

const SubscribeSection = () => {
	return (
		<section className="bg-gray-100 py-20">
			<div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12 flex flex-col md:flex-row items-center justify-between">
				<div className="w-full sm:w-1/2 mb-10 sm:mb-0">
					<h2 className="text-4xl font-extrabold text-gray-900 mb-6">
						Our Context Join Now
					</h2>
					<p className="text-gray-700 leading-relaxed mb-6">
						Context Join Now to our newsletter and stay updated on the latest
						news and trends in the industry.
					</p>
				</div>
				<form className="w-full sm:w-1/2">
					<div className="flex flex-wrap -mx-3 mb-4">
						<div className="w-full px-3 mb-2">
							<label
								className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
								htmlFor="grid-first-name"
							>
								First Name
							</label>
							<input
								className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								id="grid-first-name"
								type="text"
								placeholder="John"
								required
							/>
						</div>
						<div className="w-full px-3 mb-2">
							<label
								className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
								htmlFor="grid-last-name"
							>
								Last Name
							</label>
							<input
								className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								id="grid-last-name"
								type="text"
								placeholder="Doe"
								required
							/>
						</div>
					</div>
					<div className="mb-4">
						<label
							className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							htmlFor="grid-email"
						>
							Email Address
						</label>
						<input
							className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="grid-email"
							type="email"
							placeholder="johndoe@example.com"
							required
						/>
					</div>
					<button
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						type="submit"
					>
						Join Now
					</button>
				</form>
			</div>
		</section>
	);
};

export default SubscribeSection;

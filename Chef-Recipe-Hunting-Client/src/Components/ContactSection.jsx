import React from "react";

const ContactSection = () => {
	return (
		<section className="bg-gray-100 py-20">
			<div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12 flex flex-col md:flex-row items-center justify-between">
				<div className="w-full sm:w-1/2 mb-10 sm:mb-0">
					<h2 className="text-4xl font-extrabold text-gray-900 mb-6">
						Contact Us
					</h2>
					<p className="text-gray-700 leading-relaxed">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
						convallis libero ac tellus maximus auctor. Donec vel velit ut elit
						lacinia eleifend sit amet sed orci.
					</p>
				</div>
				<form className="w-full sm:w-1/2">
					<div className="flex flex-col mb-4">
						<label className="mb-2 font-bold text-gray-900" htmlFor="name">
							Name
						</label>
						<input
							className="border border-gray-400 py-2 px-3 text-gray-700 rounded-lg focus:outline-none focus:shadow-outline"
							type="text"
							id="name"
							name="name"
							placeholder="John Doe"
							required
						/>
					</div>
					<div className="flex flex-col mb-4">
						<label className="mb-2 font-bold text-gray-900" htmlFor="email">
							Email
						</label>
						<input
							className="border border-gray-400 py-2 px-3 text-gray-700 rounded-lg focus:outline-none focus:shadow-outline"
							type="email"
							id="email"
							name="email"
							placeholder="johndoe@example.com"
							required
						/>
					</div>
					<div className="flex flex-col mb-4">
						<label className="mb-2 font-bold text-gray-900" htmlFor="comment">
							Comment
						</label>
						<textarea
							className="border border-gray-400 py-2 px-3 text-gray-700 rounded-lg focus:outline-none focus:shadow-outline"
							id="comment"
							name="comment"
							placeholder="Type your comment here..."
							required
						></textarea>
					</div>
					<button
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						type="submit"
					>
						Submit
					</button>
				</form>
			</div>
		</section>
	);
};

export default ContactSection;

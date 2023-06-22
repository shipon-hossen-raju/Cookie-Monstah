import React from "react";

const Footer = () => {
	return (
		<footer className="bg-gray-800 py-8">
			<div className="px-4 sm:px-6 lg:px-8">
				<div className="flex justify-center">
					<a href="#" className="text-gray-400 hover:text-white">
						<span className="sr-only">Facebook</span>
					</a>
					<a href="#" className="text-gray-400 hover:text-white">
						<span className="sr-only">Twitter</span>
					</a>
					<a href="#" className="text-gray-400 hover:text-white">
						<span className="sr-only">GitHub</span>
					</a>
				</div>

				<p className="text-center text-gray-400 text-xs">
					©2023 Khai-Mai. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;

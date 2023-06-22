import React from "react";
import errorImage from "../../assets/errorImage.jpg";

function Error() {
	return (
		<div className="bg-gray-100 min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-md">
				<div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
					<div className="text-center">
						<img
							className="mx-auto h-4/6 w-4/6"
							src={errorImage}
							alt="Error Icon"
						/>
						<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
							Oops! Something went wrong.
						</h2>
						<p className="mt-2 text-center text-sm text-gray-600">
							Please try again later.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Error;

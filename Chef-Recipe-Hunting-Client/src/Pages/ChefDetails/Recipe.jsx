import React, { useState } from "react";
import {
	AiFillStar,
	AiOutlineHeart,
	AiOutlineStar,
	AiTwotoneHeart,
} from "react-icons/ai";
import Rating from "react-rating";
import { toast } from "react-toastify";

const Recipe = ({ recipe }) => {
	const [isLike, setLike] = useState(true);

	const { cooking_method, ingredients, rating, recipe_image, recipe_name } =
		recipe;

	return (
		<div>
			<div className="rounded-md overflow-hidden shadow-lg">
				<img className="w-full h-80" src={recipe_image} alt={recipe_name} />
				<div className="px-6 py-4">
					<div className="font-bold text-xl mb-2">{recipe_name}</div>

					<ul className=" my-3">
						<h2 className="text-lg font-semibold"> Ingredients list </h2>
						{ingredients &&
							ingredients.map((ingre, i) => (
								<li className="list-disc ml-5 " key={i}>
									{" "}
									{ingre}{" "}
								</li>
							))}
					</ul>

					<p className="text-gray-700 text-base mb-2">
						Cooking Method: {cooking_method}
					</p>
					<div className="flex justify-between items-center flex-wrap">
						<p className="text-lg text-gray-700 mb-2 flex gap-2 items-center justify-start mt-3">
							Rating:
							{rating && (
								<div>
									<Rating
										className="text-xl"
										initialRating={rating}
										readonly={true}
										fullSymbol={<AiFillStar className="text-yellow-500" />}
										emptySymbol={<AiOutlineStar className="text-yellow-500" />}
									/>{" "}
									({rating})
								</div>
							)}
						</p>
						<div>
							<button
								onClick={() => {
									setLike(!isLike);
									toast("Favorite");

									if (!isLike) {
										toast("Button disable");
									}
								}}
								className="text-3xl text-red-600 cursor-pointer"
								disabled={isLike ? false : true}
							>
								{isLike ? <AiOutlineHeart /> : <AiTwotoneHeart />}
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Recipe;

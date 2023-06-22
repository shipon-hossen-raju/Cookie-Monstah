import React, { useContext, useState } from "react";
import { AuthContext } from "../../AuthProviders/AuthProvider";
import { toast } from "react-toastify";
import { FaEye, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Login() {
	const navigate = useNavigate();
	const location = useLocation();
	const [isError, setError] = useState("");
	const [showPw, setShowPw] = useState(true);
	const [disable, setDisable] = useState(true);

	const { setUser, signIn, googleLogin, githubLogin, setLoading } =
		useContext(AuthContext);

	let from = location.state?.from?.pathname || "/";

	const loginHandle = (event) => {
		event.preventDefault();

		const form = event.target;
		const email = form.userEmail.value;
		const password = form.M_password.value;

		if (password.length < 5) {
			setError(`The Password is less than 6 characters ${password.length} `);
			return;
		}

		signIn(email, password)
			.then((result) => {
				setUser(result.user);
				toast("Account Login Success");
				navigate(from, { replace: true });
				form.reset();
			})
			.catch();
	};

	const googleHandle = () => {
		googleLogin()
			.then((result) => {
				toast("Google Login Success");
				navigate(from, { replace: true });
			})
			.catch((error) => {
				setError(error.message);
			});
	};

	const githubHandle = () => {
		githubLogin()
			.then((result) => {
				toast("Github Login Success");
				navigate(from, { replace: true });
			})
			.catch((error) => {
				setError(error.message);
			});
	};

	return (
		<div className="bg-gray-300 min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-md">
				<h2 className="text-center text-3xl font-extrabold text-gray-900 uppercase">
					Login your account
				</h2>
				<p className="mt-2 text-center text-sm text-gray-600">
					Or&nbsp;
					<Link
						to="/registration"
						className="font-medium text-indigo-600 hover:underline hover:text-indigo-400"
					>
						create a new account
					</Link>
				</p>
			</div>

			<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
				<div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
					<form onSubmit={loginHandle} className="space-y-6">
						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium text-gray-700"
							>
								Email address
							</label>
							<div className="mt-1 relative">
								<input
									id="email"
									name="userEmail"
									type="email"
									autoComplete="email"
									required
									className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
								/>
							</div>
						</div>

						<div>
							<label
								htmlFor="password"
								className="block text-sm font-medium text-gray-700"
							>
								Password
							</label>
							<div className="mt-1 relative">
								<input
									id="password"
									name="M_password"
									type={showPw ? "password" : "text"}
									autoComplete="current-password"
									required
									className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
								/>
								<FaEye
									onClick={() => setShowPw(!showPw)}
									className="absolute right-3 cursor-pointer top-1/2 -translate-y-1/2"
								/>
							</div>
						</div>

						<div className="flex items-center justify-between">
							<div className="flex items-center">
								<input
									id="remember_me"
									name="remember_me"
									type="checkbox"
									onClick={() => setDisable(!disable)}
									className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
								/>
								<label
									htmlFor="remember_me"
									className="ml-2 block text-sm text-gray-900"
								>
									Remember me
								</label>
							</div>

							<div className="text-sm">
								<a
									href="#"
									className="font-medium text-indigo-600 hover:underline hover:text-indigo-400"
								>
									Forgot your password?
								</a>
							</div>
						</div>

						<div>
							<button
								disabled={disable ? true : false}
								type="submit"
								className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
									disable
										? "bg-indigo-400 hover:bg-indigo-400"
										: "bg-indigo-600 hover:bg-indigo-700"
								} `}
							>
								Sign in
							</button>
						</div>
						<h3 className="text-red-500"> {isError} </h3>
					</form>
				</div>

				<div className="bg-white mt-5 py-3 px-4 shadow sm:rounded-lg sm:px-10">
					<div className="">
						<div className="my-5">
							<button
								onClick={googleHandle}
								className="flex justify-center items-center gap-4 w-full border border-green-500 p-5 py-3 text-green-500 text-center rounded-md shadow-md hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer"
							>
								<FaGoogle className="w-5 h-5" />
								<span> Continue With Google </span>
							</button>
						</div>
						<div className="my-5">
							<button
								onClick={githubHandle}
								className="w-full  flex justify-center items-center gap-4 border border-gray-500 p-5 py-3 text-gray-500 text-center rounded-md shadow-md hover:shadow-xl hover:scale-105  transition duration-300 cursor-pointer"
							>
								<FaGithub className="w-5 h-5" />
								<span> Continue With Github </span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;

import React, { useRef } from "react";
import Pdf from "react-to-pdf";

const Blog = () => {
	const ref = useRef();

	const options = {
		unit: "px",
		format: [window.innerWidth, window.innerHeight],
	};

	return (
		<div>
			<div className="container mx-auto">
				<div ref={ref}>
					<div className="p-6 flex flex-col gap-7 divide-y-2">
						<div className="p-3">
							<h2 className="text-2xl font-semibold">
								{" "}
								1. Tell us the differences between uncontrolled and controlled
								components.{" "}
							</h2>
							<div className="flex flex-col gap-3 mt-3">
								<p>
									{" "}
									Uncontrolled components are those where the data and state are
									managed by the DOM (Document Object Model), rather than by the
									component itself. These components do not have any internal
									state or lifecycle methods, and their behavior is entirely
									determined by their props. As a result, they are typically
									simpler to use and require less code to implement.{" "}
								</p>
								<p>
									On the other hand, controlled components are those where the
									component manages its own state and data. In this case, the
									data is passed to the component via props, and any changes to
									the data are communicated back to the parent component through
									events. Controlled components typically have internal state
									and lifecycle methods, and their behavior is more customizable
									and flexible.
								</p>
							</div>
						</div>

						<div className="p-3">
							<h2 className="text-2xl font-semibold">
								{" "}
								2. Tell us the difference between nodejs and express js?{" "}
							</h2>
							<div className="flex flex-col gap-3 mt-3">
								<p>
									{" "}
									Node.js provides an environment for running JavaScript code on
									the server-side, which enables developers to build server-side
									applications using JavaScript. Node.js is built on top of the
									Google V8 engine and uses an event-driven, non-blocking I/O
									model that allows it to handle a large number of concurrent
									connections efficiently. Express.js is a web application
									framework built on top of Node.js that simplifies the process
									of building web applications. It provides a set of features
									and tools that make it easy to define routes, handle requests,
									and manage middleware in a web application.{" "}
								</p>
							</div>
						</div>

						<div className="p-3">
							<h2 className="text-2xl font-semibold">
								{" "}
								3. How to validate React props using PropTypes?{" "}
							</h2>
							<div className="flex flex-col gap-3 mt-3">
								<p>
									{" "}
									Props and PropTypes are important mechanisms for passing
									read-only attributes between React components. React has a
									built-in package called PropTypes that allows you to validate
									the props that are passed to your components. This package
									provides a set of validators that can check the type of the
									props, whether the props are required, and even whether the
									props should match a certain pattern.{" "}
								</p>
							</div>
						</div>

						<div className="p-3">
							<h2 className="text-2xl font-semibold">
								{" "}
								4. What is a custom hook, and why will you create a custom hook?{" "}
							</h2>
							<div className="flex flex-col gap-3 mt-3">
								<p>
									{" "}
									A custom hook is a JavaScript function that allows you to
									extract and reuse logic from a React functional component.
									Custom hooks are a powerful feature of React that allows you
									to share functionality across multiple components in a clean
									and efficient way. By encapsulating a specific piece of logic
									into a custom hook, you can reuse that logic in multiple
									components and avoid duplicating code. Custom hooks can be
									created to extract logic and state management from React
									components, making them reusable across multiple components.
									They allow us to separate concerns and keep our code
									organized, reducing the amount of code repetition and making
									it easier to maintain.{" "}
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="text-center p-6">
					<Pdf
						targetRef={ref}
						filename="div-blue.pdf"
						options={options}
						scale={1}
					>
						{({ toPdf }) => (
							<button
								className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
								onClick={toPdf}
							>
								Generate pdf
							</button>
						)}
					</Pdf>
				</div>
			</div>
		</div>
	);
};

export default Blog;

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Routes from "./Routers/Routes.jsx";
import AuthProvider from "./AuthProviders/AuthProvider.jsx";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProvider>
			<RouterProvider router={Routes} />
			<ToastContainer />
		</AuthProvider>
	</React.StrictMode>
);

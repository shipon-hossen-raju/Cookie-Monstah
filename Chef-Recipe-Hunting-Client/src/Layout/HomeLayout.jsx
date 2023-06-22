import React from "react";
import Banner from "../Pages/Home/Banner";
import ChefList from "../Pages/Home/ChefList/ChefList";
import ContactSection from "../Components/ContactSection";
import SubscribeSection from "../Components/SubscribeSection";

const HomeLayout = () => {
	return (
		<div>
			<Banner />
			<ChefList />
			<ContactSection />
			<SubscribeSection />
		</div>
	);
};

export default HomeLayout;

import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Hero from "./Hero";
import { LenisScroller } from "../components/hoc/SmoothScroller";

type LayoutProps = {
	children: JSX.Element;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className="min-h-screen relative z-0 bg-primary">
			<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
				<Navbar />
				<Hero />
			</div>
			<main>{children}</main>
			<Footer />
			<LenisScroller />
		</div>
	);
};

export default Layout;

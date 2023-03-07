import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

type LayoutProps = {
	children: JSX.Element;
};

const Layout = ({ children }: LayoutProps) => {
	return (
		<div>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;

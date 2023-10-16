import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Feedback from "../components/Feedback";
import Tech from "../components/Tech";
import Work from "../components/Work";
import Lenis from "@studio-freight/lenis";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Issam | Portfolio</title>
				<link rel="icon" href="/logo.svg" />
			</Head>

			<About />
			<Experience />
			<Tech />
			<Work />
			<Feedback />
			<Contact />
		</>
	);
};

export default Home;

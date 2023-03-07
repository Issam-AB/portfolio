import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center py-2">
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="">
				<h1 className="text-red-600 underline">hellow world</h1>
			</main>
		</div>
	);
};

export default Home;

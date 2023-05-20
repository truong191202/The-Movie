function Welcome() {
	return (
		<div className="w-full h-75 mt-16 bg-cover bg-center bg-banner pl-3 pt-16 pl-6">
			<div className=" text-white ">
				<h1 className="text-4xl font-extrabold">Welcome.</h1>
				<h2 className="text-3xl font-bold">
					Millions of movies, TV shows and people to discover. Explore
					now.
				</h2>
			</div>
			<div className="w-11/12 h-12 flex mt-8 rounded-full bg-white items-center">
				<input
					type="text"
					placeholder="Search for a movie, tv show, person........"
					className="ml-4 outline-none text-black h-10 flex-1"
				/>
				<button className="button-search text-white hover:text-black font-bold rounded-full h-full w-24">
					Search
				</button>
			</div>
		</div>
	);
}

export default Welcome;

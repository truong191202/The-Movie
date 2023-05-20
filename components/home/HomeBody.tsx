import Join from "./Join";
import Popular from "./Popular";
import Trailers from "./Trailers";
import Trending from "./Trending";
import Welcome from "./Welcome";

function HomeBody() {
	return (
		<div className="w-5/6">
			<Welcome />
			<div className="w-full mt-8 relative">
				<Trending />
				<div className="bg-trending -z-10 w-full h-1/2 absolute bottom-10"></div>
			</div>
			<Trailers />
			<Popular />
			<Join />
		</div>
	);
}

export default HomeBody;

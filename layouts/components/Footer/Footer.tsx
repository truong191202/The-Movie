import Link from "next/link";

function Footer() {
	return (
		<div className="w-full bg-theme h-80 mt-7 flex justify-center">
			<div className="flex pt-12 text-white font-medium">
				<div className="flex flex-col items-end">
					<img
						src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
						alt="logo"
						className="w-32 h-24"
					/>
					<Link href='/signup'>
					    <button className="text-lightBlue bg-white px-6 py-2 rounded-md font-bold mt-4">
    						JOIN THE COMMUNITY
    					</button>
					</Link>
				</div>
				<div className="ml-9">
					<div className="font-extrabold">THE BASICS</div>
					<ul className="hover:cursor-pointer">
						<li>About TMDB</li>
						<li>Contact Us</li>
						<li>Support Forums</li>
						<li>API</li>
						<li>System Status</li>
					</ul>
				</div>
				<div className="ml-9">
					<div className="font-extrabold">GET INVOLVED</div>
					<ul className="hover:cursor-pointer">
						<li>Contribution Bible</li>
						<li>Add New Movie</li>
						<li>Add New TV Show</li>
					</ul>
				</div>
				<div className="ml-9">
					<div className="font-extrabold">COMMUNITY</div>
					<ul className="hover:cursor-pointer">
						<li>Guidelines</li>
						<li>Discussions</li>
						<li>Leaderboard</li>
						<li>Twitter</li>
					</ul>
				</div>
				<div className="ml-9">
					<div className="font-extrabold">LEGAL</div>
					<ul className="hover:cursor-pointer">
						<li>Terms of Use</li>
						<li>API Terms of Use</li>
						<li>Privacy Policy</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Footer;

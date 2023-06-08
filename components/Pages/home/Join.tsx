import Link from "next/link";
import styles from "./home.module.css";
function Join() {
	return (
		<div
			className={`w-full h-75 bg-cover bg-center flex text-white justify-center ${styles.bgJoin}`}
		>
			<div className="w-11/12 flex pt-9">
				<div className="w-7/12">
					<h2 className="text-3xl font-bold">Join Today</h2>
					<p className="mt-5 text-lg font-thin">
						Get access to maintain your own{" "}
						<span className="opacity-70 italic">
							custom personal lists, track what you&apos;ve seen
						</span>{" "}
						and search and filter for{" "}
						<span className="opacity-70 italic">
							what to watch next
						</span>
						—regardless if it&apos;s in theatres, on TV or available
						on popular streaming services like Netflix, Amazon Prime
						Video, Disney Plus, Apple TV Plus, and fuboTV.
					</p>
					<Link href={"./signup"}>
						<button className="text-white px-5 py-2 rounded-md mt-6 font-bold bg-accountPurple">
							Sign Up
						</button>
					</Link>
				</div>
				<div className="text-sm opacity-80 ml-16 mt-14">
					<ul className="list-disc">
						<li>Enjoy TMDB ad free</li>
						<li>Maintain a personal watchlist</li>
						<li>
							Filter by your subscribed streaming services and
							find something to watch
						</li>
						<li>Log the movies and TV shows you&apos;ve seen</li>
						<li>Build custom lists</li>
						<li>Contribute to and improve our database</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Join;

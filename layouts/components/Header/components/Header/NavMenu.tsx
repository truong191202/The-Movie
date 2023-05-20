import TippyMenu from "@/components/TippyMenu";
import Button from "./Button";

const moviesMenuList = [
	{
		content: "Popular",
		to: "/movie",
	},
	{
		content: "Now Playing",
		to: "/movie",
	},
	{
		content: "Upcoming",
		to: "/movie",
	},
	{
		content: "Top Rated",
		to: "/movie",
	},
];
const tvShowsMenuList = [
	{
		content: "Popular",
		to: "/movie",
	},
	{
		content: "Airing Today",
		to: "/movie",
	},
	{
		content: "On TV",
		to: "/movie",
	},
	{
		content: "Top Rated",
		to: "/movie",
	},
];

const peopleMenuList = [
	{
		content: "Popular People",
		to: "/movie",
	},
];
const moreMenuList = [
	{
		content: "Discussions",
		to: "/movie",
	},
	{
		content: "Leaderboard",
		to: "/movie",
	},
	{
		content: "Support",
		to: "/movie",
	},
	{
		content: "Api",
		to: "/movie",
	},
];
function NavMenu() {
	return (
		<>
			<TippyMenu initalArrays={moviesMenuList}>
				<div>
					<Button
						content="Movies"
						className="hover:cursor-pointer ml-7"
					/>
				</div>
			</TippyMenu>
			<TippyMenu initalArrays={tvShowsMenuList}>
				<div>
					<Button
						content="TV Shows"
						className="hover:cursor-pointer ml-7"
					/>
				</div>
			</TippyMenu>
			<TippyMenu initalArrays={peopleMenuList}>
				<div>
					<Button
						content="People"
						className="hover:cursor-pointer ml-7"
					/>
				</div>
			</TippyMenu>
			<TippyMenu initalArrays={moreMenuList}>
				<div>
					<Button
						content="More"
						className="hover:cursor-pointer ml-7"
					/>
				</div>
			</TippyMenu>
		</>
	);
}

export default NavMenu;

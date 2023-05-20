import { useRouter } from "next/router";

import DefaultLayout from "@/layouts/DefaultLayout";
import MenuDetailPage from "@/components/detailPage/MenuDetailPage";

const overViewArray = [
	{
		content: "Main",
		to: "/",
	},
	{
		content: "Alternative Titles",
		to: "/",
	},
	{
		content: "Cast & Crew",
		to: "/",
	},
	{
		content: "Episode Groups",
		to: "/",
	},
	{
		content: "Seasons",
		to: "/",
	},
	{
		content: "Translations",
		to: "/",
	},
	{
		content: "Watch Now",
		to: "/",
	},
	{
		content: "Changes",
		to: "/",
		className: "mt-5",
	},
];
const mediaArray = [
	{
		content: "Backdrops",
		to: "/",
	},
	{
		content: "Logos",
		to: "/",
	},
	{
		content: "Posters",
		to: "/",
	},
	{
		content: "Videos",
		to: "/",
		children: [
			{
				content: "Login To Add a Video",
				to: "/",
			},
		],
	},
];

const fandomArray = [
	{
		content: "Discussions",
		to: "/",
		children: [
			{
				content: "Overview",
				to: "/",
			},
			{
				content: "General",
				to: "/",
			},
			{
				content: "Content Issues",
				to: "/",
			},
		],
	},
	{
		content: "Reviews",
		to: "/",
	},
];

const shareArray = [
	{
		content: "Share Link",
		to: "/",
	},
	{
		content: "Facebook",
		to: "/",
	},
	{
		content: "Tweet",
		to: "/",
	},
];
function TvPage() {
	const router = useRouter();
	return (
		<DefaultLayout>
			<MenuDetailPage
				overViewArray={overViewArray}
				mediaArray={mediaArray}
				fandomArray={fandomArray}
				shareArray={shareArray}
			/>
		</DefaultLayout>
	);
}

export default TvPage;

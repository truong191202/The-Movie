import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

import api_key from "@/assets/api_key";
import DefaultLayout from "@/layouts/DefaultLayout";
import MenuDetailPage from "@/components/detailPage/MenuDetailPage";
import BannerDetailPage from "@/components/detailPage/BannerDetailPage";

interface Results {
	title: string;
	id: number;
	backdrop_path: string;
	poster_path: string;
}
function FilmPage() {
	const router = useRouter();
	const [results, setResults] = useState<Results>({
		title: "",
		id: NaN,
		backdrop_path: "",
		poster_path: "",
	});
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
			content: "Release Dates",
			to: "/",
		},
		{
			content: "Translations",
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
					content: "Trailers",
					to: "/",
				},
				{
					content: "Teasers",
					to: "/",
				},
				{
					content: "Clips",
					to: "/",
				},
				{
					content: "Featurettes",
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
	useEffect(() => {
		const fetchApi = async () => {
			const movieDetail = await axios.get(
				`https://api.themoviedb.org/3/movie/${router.query.MovieId}?api_key=${api_key}&language=en-US`
			);
			setResults(movieDetail.data);
		};
		if (router.isReady) {
			fetchApi();
		}
	}, [router.query.MovieId]);
	return (
		<DefaultLayout>
			<div>
				<MenuDetailPage
					overViewArray={overViewArray}
					mediaArray={mediaArray}
					fandomArray={fandomArray}
					shareArray={shareArray}
				/>
				<BannerDetailPage
					backgroundPath={results.backdrop_path}
					poster_path={results.poster_path}
				/>
			</div>
		</DefaultLayout>
	);
}

export default FilmPage;

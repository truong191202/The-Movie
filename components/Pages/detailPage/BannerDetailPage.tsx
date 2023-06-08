import Image from "next/image";
import Color, { Palette } from "color-thief-react";
import styles from "./detailPage.module.css";
import { convertDate, convertTime } from "@/utils";
import {
	ExpandIcon,
	HeartIcon,
	ListIcon,
	PlayIcon,
	StarIcon,
	WatchListIcon,
} from "@/assets/Icons";
import RatingCircle from "@/components/RatingCircle/RatingCircle";
import { useEffect, useState } from "react";
interface GenresItem {
	id: number;
	name: string;
}
interface Props {
	backgroundPath: string;
	poster_path: string;
	title: string;
	releaseDate: string;
	genres: GenresItem[];
	runtime: number;
	vote_average: number;
}

function BannerDetailPage({
	backgroundPath,
	poster_path,
	title,
	releaseDate,
	genres,
	runtime,
	vote_average,
}: Props) {
	const [backgroundImage, setBackgroundImage] = useState("");
	const date = convertDate(releaseDate, "dd/mm/yyyy");
	const time = convertTime(runtime);
	const percentNumber = Math.round(vote_average * 10);
	useEffect(() => {
		setBackgroundImage(backgroundPath);
	}, [backgroundPath]);
	return (
		<div
			style={{
				backgroundImage: `url('https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${backgroundImage}')`,
			}}
			className={`h-142 w-full bg-cover bg-no-repeat ${styles.bgBanner}`}
		>
			<Color
				src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${backgroundImage}`}
				crossOrigin="anonymous"
				format="hex"
			>
				{({ data, loading }) => {
					return (
						<div>
							Predominant color: <strong>{data}</strong>
						</div>
					);
				}}
			</Color>
			<Palette
				src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${backgroundImage}`}
				crossOrigin="anonymous"
				format="hex"
				colorCount={4}
			>
				{({ data, loading }) => {
					return (
						<div>
							Palette:
							<ul>
								{data?.map((color, index) => (
									<li key={index} style={{ color: color }}>
										<strong>{color}</strong>
									</li>
								))}
							</ul>
						</div>
					);
				}}
			</Palette>
			<div
				className={`w-full h-full flex justify-center ${styles.bgCoatBanner}`}
			>
				<div className="w-10/12 flex pt-6">
					<div className="relative max-h-112">
						<Image
							src={
								poster_path
									? `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${poster_path}`
									: ""
							}
							width={300}
							height={450}
							alt="poster"
							className="rounded-xl"
						/>
						<div
							className={`group absolute top-0 rounded-xl ease-linear duration-200 w-full h-full ${styles.posterHoverColor} hover:backdrop-blur-lg bg-transparent hover:cursor-pointer flex text-transparent text-opacity-60 font-bold text-xl items-center justify-center`}
						>
							<ExpandIcon
								color="currentColor"
								width="20.8px"
								height="20.8px"
								className="group-hover:text-white text-transparent ease-linear duration-200"
							/>
							<p className="group-hover:text-lightGrey ease-linear duration-200 ml-2">
								Expand
							</p>
						</div>
					</div>
					<div className="text-white relative mt-16 ml-8 ">
						<div>
							<span className="hover:opacity-60 hover:cursor-pointer font-bold text-3xl">
								{title}
							</span>
							<span className="opacity-60 text-3xl ml-2">
								({date?.slice(6)})
							</span>
						</div>
						<div className="text-base flex items-center">
							<span className="border border-solid opacity-60 mr-4 text-xs">
								PG
							</span>
							<span className="mr-0.5">{date}</span>
							<span className="mr-4">(US)</span>
							<div className="w-1 h-1 rounded-full bg-white mr-2 -ml-1"></div>
							{genres.map(
								(genresItem: GenresItem, index: number) => (
									<span
										className="hover:opacity-60 hover:cursor-pointer"
										key={index}
									>
										{index !== 0 ? ", " : ""}
										{genresItem.name}
									</span>
								)
							)}
							<div className="w-1 h-1 rounded-full bg-white mx-2"></div>
							<span>{time}</span>
						</div>
						<div className="flex items-center pt-7">
							<RatingCircle
								percentNumber={percentNumber}
								radius={29}
								lineWidth={8}
								className="top-10 hover:cursor-pointer ease-linear duration-150 hover:scale-110 w-16 h-16 text-2xl mt-10"
								classNamePercentNumber="ml-1 mt-1"
								classNamePercent="text-xs mt-1"
							/>
							<div className="w-10 h-10 ml-16 font-bold text-sm">
								User Score
							</div>
							<div className="w-12 h-12 rounded-full bg-theme flex justify-center items-center hover:cursor-pointer ml-5">
								<ListIcon width="16" color="white" />
							</div>
							<div className="w-12 h-12 rounded-full bg-theme flex justify-center items-center hover:cursor-pointer ml-5">
								<HeartIcon width="16" color="white" />
							</div>
							<div className="w-12 h-12 rounded-full bg-theme flex justify-center items-center hover:cursor-pointer ml-5">
								<WatchListIcon width="16" color="white" />
							</div>
							<div className="w-12 h-12 rounded-full bg-theme flex justify-center items-center hover:cursor-pointer ml-5">
								<StarIcon width="16" color="white" />
							</div>
							<div className="hover:cursor-pointer flex text-white hover:opacity-60">
								<PlayIcon
									width="22.39"
									color="currentColor"
									className="ml-5 mr-1"
								/>
								<div>Play Trailer</div>
							</div>
						</div>
						<div className="mt-4">Overview</div>
						<div className="max-w-245">
							While working underground to fix a water main,
							Brooklyn plumbers—and brothers—Mario and Luigi are
							transported down a mysterious pipe and wander into a
							magical new world. But when the brothers are
							separated, Mario embarks on an epic quest to find
							Luigi.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BannerDetailPage;

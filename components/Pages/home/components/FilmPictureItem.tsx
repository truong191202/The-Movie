/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import RatingCircle from "@/components/RatingCircle";
import styles from "./components.module.css";
import { convertDate } from "@/utils";
interface Props {
	path: string;
	title: string;
	vote_average: number;
	date: string;
	type: string;
	id: number;
}
function FilmPictureItem({ path, title, vote_average, date, type, id }: Props) {
	const percentNumber = Math.round(vote_average * 10);
	return (
		<div className={`w-40 relative ${styles.visionAnimation}`}>
			<Link href={`/${type}/${id}`}>
				<img
					alt="film-poster"
					src={`https://www.themoviedb.org/t/p/w220_and_h330_face${path}`}
					loading="lazy"
					className="rounded-lg hover:cursor-pointer w-36 h-56"
				/>
				<div className="mt-4 font-bold w-10/12 whitespace-normal hover:cursor-pointer hover:text-lightBlue">
					{title}
				</div>
			</Link>
			<div className="text-sm text-gray-600">{convertDate(date)}</div>
			<RatingCircle
				percentNumber={percentNumber}
				radius={17}
				lineWidth={3.5}
				className="top-50 left-2 w-10 h-10 text-sm absolute"
				classNamePercent="text-xxs absolute"
				classNamePercentNumber="absolute"
				classNameCanvas="absolute"
			/>
		</div>
	);
}

export default FilmPictureItem;

/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { useRef, useEffect } from "react";

import styles from "./components.module.css";
import convertDate from "@/utils/convertDate";
import Link from "next/link";
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
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const canvasCtxRef = useRef<CanvasRenderingContext2D | null>(null);
	let percentColor: string;
	let restColor: string;
	useEffect(() => {
		if (percentNumber >= 70) {
			percentColor = "#21d07a";
			restColor = "#1e4229";
		} else if (percentNumber < 70 && percentNumber >= 30) {
			percentColor = "#c9cc2f";
			restColor = "#2f3215";
		} else {
			percentColor = "#db2360";
			restColor = "#571435";
		}
		if (canvasRef.current) {
			canvasCtxRef.current = canvasRef.current.getContext("2d");
			let ctx = canvasCtxRef.current; // Assigning to a temp variable
			ctx!.beginPath(); // Note the Non Null Assertion
			ctx!.strokeStyle = `${percentColor}`; // đặt màu vẽ cho hình tròn là đỏ
			ctx!.lineWidth = 3.5; // đặt độ rộng nét vẽ là 5px
			ctx!.arc(
				17,
				17,
				17,
				-(Math.PI / 2),
				(2 * Math.PI * percentNumber) / 100 - Math.PI / 2
			);
			ctx!.stroke();
			ctx!.beginPath(); // Note the Non Null Assertion
			ctx!.strokeStyle = `${restColor}`; // đặt màu vẽ cho hình tròn là đỏ
			ctx!.lineWidth = 3.8; // đặt độ rộng nét vẽ là 5px
			ctx!.arc(
				17,
				17,
				17,
				(2 * Math.PI * percentNumber) / 100 - Math.PI / 2,
				-(Math.PI / 2)
			);
			ctx!.stroke();
		}
	}, [vote_average]);
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
			<div className="w-10 h-10 bg-theme rounded-full absolute top-50 left-4">
				<canvas
					width={34}
					height={34}
					ref={canvasRef}
					className={`rounded-full absolute ${styles.canvasPosition}`}
				></canvas>
				<div
					className={`font-bold text-white text-sm absolute select-none ${styles.percentNumber}`}
				>
					{percentNumber}
					<span className={`${styles.percent} absolute top-0`}>
						%
					</span>
				</div>
			</div>
		</div>
	);
}

export default FilmPictureItem;

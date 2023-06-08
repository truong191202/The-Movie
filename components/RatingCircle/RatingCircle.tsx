/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useEffect } from "react";

import styles from "./RatingCircle.module.css";
interface Props {
	percentNumber: number;
	radius: number;
    lineWidth: number;
	className?: string;
    classNamePercentNumber?: string;
    classNamePercent?: string;
}
function RatingCircle({ percentNumber, radius, className, lineWidth, classNamePercentNumber, classNamePercent }: Props) {
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
			ctx!.strokeStyle = `${percentColor}`; // đặt màu vẽ cho hình tròn
			ctx!.lineWidth = lineWidth; // đặt độ rộng nét vẽ là 5px
			ctx!.arc(
				radius,
				radius,
				radius,
				-(Math.PI / 2),
				(2 * Math.PI * percentNumber) / 100 - Math.PI / 2
			);
			ctx!.stroke();
			ctx!.beginPath(); // Note the Non Null Assertion
			ctx!.strokeStyle = `${restColor}`; // đặt màu vẽ cho hình tròn là đỏ
			ctx!.lineWidth = lineWidth; // đặt độ rộng nét vẽ là 5px
			ctx!.arc(
				radius,
				radius,
				radius,
				(2 * Math.PI * percentNumber) / 100 - Math.PI / 2,
				-(Math.PI / 2)
			);
			ctx!.stroke();
		}
	}, [percentNumber]);
	return (
		<div
			className={`${className} bg-theme rounded-full absolute`}
		>
			<canvas
				width={radius * 2}
				height={radius * 2}
				ref={canvasRef}
				className={`rounded-full absolute ${styles.canvasPosition}`}
			></canvas>

			<div
				className={`font-bold text-white absolute select-none ${styles.percentNumber} ${classNamePercentNumber}`}
			>
				{percentNumber}
				<span className={`absolute top-0 ${classNamePercent}`}>%</span>
			</div>
		</div>
	);
}

export default RatingCircle;

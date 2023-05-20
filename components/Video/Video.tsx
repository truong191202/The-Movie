import { MouseEventHandler } from "react";

import { PlayIcon } from "@/assets/Icons";
import styles from "./Video.module.css";
interface Props {
	src: string;
	onMouseEnter: MouseEventHandler<HTMLDivElement>;
}
function Video({ src, onMouseEnter }: Props) {
	return (
		<div
			onMouseEnter={onMouseEnter}
			className={`w-77 h-44 p-2 hover:p-0 hover:cursor-pointer ${styles.video} relative`}
		>
			<img
				alt=""
				src={src}
				className={`rounded-lg peer w-full ${styles.img}`}
			/>
			<PlayIcon
				color="white"
				className={`absolute top-10 left-28 w-24 p-4 peer-hover:p-2 hover:p-2 ${styles.playBtn}`}
			/>
		</div>
	);
}

export default Video;

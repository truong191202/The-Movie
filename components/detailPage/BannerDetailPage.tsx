import Image from "next/image";

import styles from "./detailPage.module.css";
import { ExpandIcon } from "@/assets/Icons";
interface Props {
	backgroundPath: string;
	poster_path: string;
}

function BannerDetailPage({ backgroundPath, poster_path }: Props) {
	return (
		<div
			style={{
				backgroundImage: `url('https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${backgroundPath}')`,
			}}
			className={`h-142 w-full bg-cover bg-no-repeat ${styles.bgBanner}`}
		>
			<div className={`w-full h-full ${styles.bgCoatBanner}`}>
				<div className="w-11/12 flex">
					<div className="relative">
						<Image
							src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${poster_path}`}
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
				</div>
			</div>
		</div>
	);
}

export default BannerDetailPage;

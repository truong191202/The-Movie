import { useEffect, useState } from "react";

import SelectButton from "@/components/SelectButton";
import Video from "@/components/Video";
interface List {
	path: string;
	title: string;
	subtitle: string;
	video: string;
}
const tvList = [
	{
		path: "/jWYzdSv85nncRxfDwYSQKKlnuhG.jpg",
		title: "Chashni",
		subtitle: "Chashni",
		video: "JN7Wm_gYISs",
	},
	{
		path: "/3n2TjKw3HrwDqgVgcynvantOfS3.jpg",
		title: "Teri Meri Doriyaan",
		subtitle: "Teri Meri Doriyaann | Brar Bhaaiyon Ki Kuchh Alag Hai Baat",
		video: "",
	},
	{
		path: "/mAJ84W6I8I272Da87qplS2Dp9ST.jpg",
		title: "Dirty Linen",
		subtitle: "Dirty Linen | Full Trailer",
		video: "",
	},
	{
		path: "/xkiv3e1daoqil5MRJitCJcwUgk2.jpg",
		title: "Judy Justice",
		subtitle: "Season 2 Trailer",
		video: "",
	},
	{
		path: "/3cgRI0hOq3dYyezSYrsfdmqxtMw.jpg",
		title: "Citadel",
		subtitle: "Sneak Peek - Bathroom Action",
		video: "",
	},
];
const theatersList = [
	{
		path: "/qO8uNvhYrBRKKWZLUdHrvwuuQpG.jpg",
		title: "Superman & Lois",
		subtitle: "Guess Who’s Coming to Dinner | Season 3 Episode 8 Promo",
		video: "",
	},
	{
		path: "/xOcVqlNnVUEQhQ3Xqhgh7mqeh9f.jpg",
		title: "",
		subtitle: "The Wicker Man",
		video: "Official 2023 Re-Release Trailer",
	},
	{
		path: "/bF2skCyB5jeJuO26GFaQIGHrMNl.jpg",
		title: "Clock",
		subtitle: "Official Trailer",
		video: "",
	},
	{
		path: "/8HfjrSxfTVKmjNh8cJjbu5eXzcX.jpg",
		title: "Peter Pan & Wendy",
		subtitle: "I Can Fly",
		video: "",
	},
	{
		path: "/jlh5bNiSPcbQ79Nt31kE2GxIR3h.jpg",
		title: "Hugo",
		subtitle: "Original Trailer (Without 3D Text)",
		video: "",
	},
];
function Trailers() {
	const [background, setBackground] = useState<string>(
		"/qO8uNvhYrBRKKWZLUdHrvwuuQpG.jpg"
	);
	const [listItem, setListItem] = useState<List[]>(tvList);
	return (
		<div
			style={{
				backgroundImage: `linear-gradient(to right,rgba(3, 37, 65, 0.75) 0%,rgba(3, 37, 65, 0.75) 100%), url('https://www.themoviedb.org/t/p/w1920_and_h427_multi_faces${background}')`,
			}}
			className={`w-full h-96 overflow-x-scroll bg-no-repeat bg-center bg-bottom bg-cover ease-linear`}
		>
			<div className="flex items-center pl-11 pt-6">
				<h2 className="font-semibold text-2xl text-white">Trailers</h2>
				<SelectButton
					dispatch={setListItem}
					leftSelect={tvList}
					rightSelect={theatersList}
					leftContent="On TV"
					rightContent="In Theaters"
					normalText="text-white"
					buttonText="text-theme"
					border="borderLightGreen"
					background="bgButton"
				/>
			</div>
			<div className="pl-11 flex pt-4 w-full pb-7">
				{listItem.map((item, index) => (
					<div key={index} className="text-white">
						<Video
							src={`https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${item.path}`}
							onMouseEnter={() => {
								setBackground(
									`https://www.themoviedb.org/t/p/w1920_and_h427_multi_faces/${item.path}`
								);
							}}
						/>
						<div className="w-full text-center font-bold text-lg">{item.title}</div>
						<div className="w-full text-center">
							{item.subtitle}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
export default Trailers;

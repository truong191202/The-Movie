import { useEffect, useState } from "react";
import axios from "axios";

import api_key from "@/assets/api_key/api_key";
import SelectButton from "@/components/SelectButton";
import FilmPictureItem from "./components/FilmPictureItem";
interface filmProperty {
	poster_path: string;
	title: string;
	name: string;
	media_type: string;
	vote_average: number;
	release_date: string;
	first_air_date: string;
	id: number;
}
function Trending() {
	const [listFilm, setListFilm] = useState<filmProperty[]>([]);
	const [baseApi, setBaseApi] = useState<string>(
		`https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}`
	);
	useEffect(() => {
		const fetchApi = async () => {
			const results = await axios.get(baseApi);
			setListFilm(results.data.results);
		};
		fetchApi();
	}, [baseApi]);
	return (
		<div className="w-full">
			<div className="flex items-center pl-11">
				<h2 className="font-semibold text-2xl text-black">Trending</h2>
				<SelectButton
					leftContent="Today"
					rightContent="This Week"
					dispatch={setBaseApi}
					rightSelect={`https://api.themoviedb.org/3/trending/all/week?api_key=${api_key}`}
					leftSelect={`https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}`}
				/>
			</div>
			<div className="overflow-x-scroll pb-7">
				<div className="pl-11 flex justify-between pt-4">
					{listFilm.map((film, index) => {
						return (
							<div key={index}>
								<FilmPictureItem
									id={film.id}
									type={film.title ? "movie" : "tv"}
									path={film.poster_path}
									title={film.title || film.name}
									vote_average={film.vote_average}
									date={
										film.release_date || film.first_air_date
									}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Trending;

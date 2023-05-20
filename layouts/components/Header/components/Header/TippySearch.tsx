import Tippy from "@tippyjs/react/headless";
import axios from "axios";
import { useEffect, useState, Dispatch, SetStateAction } from "react";

import {
	TrendingIcon,
	PeopleIcon,
	TvIcon,
	MovieIcon,
	SearchIcon,
} from "@/assets/Icons";
import TippySearchItem from "./TippySearchItem";
import api_key from "@/assets/api_key";

interface Props {
	children: JSX.Element;
	inputValue: string;
	isInputFocus: boolean;
	setIsInputFocus: Dispatch<SetStateAction<boolean>>;
	setIsLoading: Dispatch<SetStateAction<boolean>>;
	baseURL: string;
}

interface Result {
	title: string;
	media_type: string;
	name: string;
}

function TippySearch({
	children,
	inputValue,
	isInputFocus,
	setIsInputFocus,
	setIsLoading,
	baseURL,
}: Props) {
	const [results, setResults] = useState<Result[]>([]);
	const [noResults, setNoResults] = useState<boolean>(false);
	const [showResults, setShowResults] = useState<boolean>(true);
	const [nameMovie, setNameMovie] = useState<string | undefined>("");
	const [nameTv, setNameTv] = useState<string | undefined>("");
	const [namePeople, setNamePeople] = useState<string | undefined>("");
	useEffect(() => {
		const fetchApi = async () => {
			setIsLoading(true);
			const response = await axios.get(baseURL);
			setResults(response.data.results);
			setIsLoading(false);
		};
		fetchApi();
	}, [baseURL]);
	useEffect(() => {
		const nameOfMovie = results.find((result) => {
			return result.media_type === "movie";
		});
		setNameMovie(nameOfMovie?.title);
		const nameOfTv = results.find((result) => {
			return result.media_type === "tv";
		});
		setNameTv(nameOfTv?.name);
		const nameOfPeople = results.find((result) => {
			return result.media_type === "person";
		});
		setNamePeople(nameOfPeople?.name);
	}, [results]);
	useEffect(() => {
		if (isInputFocus) {
			setShowResults(true);
		}
	}, [isInputFocus]);
	useEffect(() => {
		if (results.length === 0 && inputValue.trim()) {
			setNoResults(true);
		} else {
			setNoResults(false);
		}
	}, [results]);
	return (
		<Tippy
			onClickOutside={() => {
				setShowResults(false);
				setIsInputFocus(false);
			}}
			zIndex={20}
			visible={showResults}
			interactive
			placement="bottom"
			render={(attrs) => (
				<div className="w-screen -ml-1.5" tabIndex={-1} {...attrs}>
					{noResults && (
						<div className="w-full bg-lightGrey py-8 font-bold text-gray-500 text-lg flex justify-center">
							NO RESULTS
						</div>
					)}
					{baseURL ===
						`https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}` && (
						<div className="w-full flex justify-center border-b border-b-lightGrey bg-lightGrey">
							<div className="w-8/12 h-11 flex items-center">
								<TrendingIcon width="22" height="22" />
								<h2 className="text-2xl font-bold">Trending</h2>
							</div>
						</div>
					)}
					{nameMovie && inputValue && (
						<TippySearchItem
							content={nameMovie}
							icon={
								<MovieIcon
									width="20px"
									height="44px"
									className="mr-2"
								/>
							}
						/>
					)}
					{nameTv && inputValue && (
						<TippySearchItem
							content={nameTv}
							icon={
								<TvIcon
									width="20px"
									height="44px"
									className="mr-2"
								/>
							}
						/>
					)}
					{namePeople && inputValue && (
						<TippySearchItem
							content={namePeople}
							icon={
								<PeopleIcon
									width="20px"
									height="44px"
									className="mr-2"
								/>
							}
						/>
					)}
					{results.map((result: Result, index: number) => {
						let contentState = "";
						switch (result.media_type) {
							case "movie":
								contentState = result.title;
								break;
							case "tv":
								contentState = result.name;
								break;
							case "person":
								contentState = result.name;
								break;
						}
						if (index > 9) {
							return;
						}
						return (
							<TippySearchItem
								icon={
									<SearchIcon
										width="20px"
										height="44px"
										className="mr-2"
									/>
								}
								key={index}
								content={contentState}
							/>
						);
					})}
				</div>
			)}
		>
			{children}
		</Tippy>
	);
}

export default TippySearch;

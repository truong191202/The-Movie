import { useRef, useState, useEffect } from "react";

import { ExitIcon, SearchIcon, LoadingIcon } from "@/assets/Icons";
import TippySearch from "./TippySearch";
import api_key from "@/assets/api_key";

interface Props {
	autoFocus: boolean;
}
function SearchBar({ autoFocus }: Props) {
	const inputRef = useRef<HTMLInputElement>(null);
	const [inputValue, setInputValue] = useState<string>("");
	const [isInputFocus, setIsInputFocus] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [baseURL, setBaseURL] = useState<string>(
		`https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}`
	);
	useEffect(() => {
		if (autoFocus) {
			inputRef.current?.focus();
		}
	}, [autoFocus]);
	useEffect(() => {
		if (!inputValue.trim()) {
			setBaseURL(
				`https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}`
			);
		}
	}, [inputValue]);
	return (
		<div className="h-11 w-full bg-white flex justify-center border-b-lightGrey border">
			<div className="w-8/12 flex items-center">
				<SearchIcon width="20px" height="44px" className="mr-4" />
				<div className="flex items-center flex-1">
					<TippySearch
						inputValue={inputValue}
						baseURL={baseURL}
						isInputFocus={isInputFocus}
						setIsInputFocus={setIsInputFocus}
						setIsLoading={setIsLoading}
					>
						<input
							onFocus={() => {
								setIsInputFocus(true);
							}}
							onChange={(e) => {
								setInputValue(e.target.value);
								setBaseURL(
									`https://api.themoviedb.org/3/search/multi?api_key=${api_key}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
								);
							}}
							value={inputValue}
							className="flex-1 outline-none peer placeholder:select-none"
							placeholder="Search for a movie, tv show, person..."
							ref={inputRef}
							spellCheck={false}
						/>
					</TippySearch>
					{isLoading ? (
						<LoadingIcon
							width="15px"
							height="15px"
							className="animate-spin"
						/>
					) : (
						<ExitIcon
							width="17px"
							height="17px"
							className="hover:cursor-pointer fill-slate-500 hover:fill-black"
							onClick={() => {
								inputRef.current?.focus();
								setInputValue("");
							}}
						/>
					)}
				</div>
			</div>
		</div>
	);
}

export default SearchBar;

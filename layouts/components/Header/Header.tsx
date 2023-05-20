import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Button, NavMenu } from "./components/Header";
import SearchBar from "./components/Header/SearchBar";
import { ExitIcon, SearchIcon } from "@/assets/Icons";
import images from "@/assets/images";

function Header() {
	const [searchState, setSearchState] = useState(false);
	const [autoFocus, setAutoFocus] = useState(false);
	return (
		<header className="fixed top-0 left-0 w-full z-50">
			<div className="w-full h-16 bg-theme flex justify-center items-center">
				<div className="w-4/5 flex justify-between">
					<nav className="flex items-center">
						<Link href={"/"}>
							<Image
								src={images.logo}
								alt="logo"
								height={20}
								width={154}
							/>
						</Link>
						<NavMenu />
					</nav>
					<div className="flex justify-between w-4/12 items-center">
						<div className="hover:cursor-pointer h-6 w-6 bg-[url('https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-371-plus-white-0bac34f16124808a12ea863b4d9cc6e599dee7c0a80658cfe9ead26939e64517.svg')]"></div>
						<div className="px-2 py-1 select-none border-solid border-white border rounded-md text-white text-xs text-center leading-6 font-bold hover:cursor-pointer hover:bg-white hover:text-theme">
							VI
						</div>
						<Link href={"./signup"}>
							<Button
								content="Đăng nhập"
								className="hover:cursor-pointer"
							/>
						</Link>
						<Button
							content="Tham gia TMDB"
							className="hover:cursor-pointer"
						/>
						{searchState ? (
							<ExitIcon
								color="white"
								width="29"
								height="29"
								className="hover:cursor-pointer "
								onClick={() => {
									setSearchState(false);
									setAutoFocus(false);
								}}
							/>
						) : (
							<SearchIcon
								color="#01B4E4"
								width="29"
								height="29"
								className="hover:cursor-pointer "
								onClick={() => {
									setSearchState(true);
									setAutoFocus(true);
								}}
							/>
						)}
					</div>
				</div>
			</div>
			{searchState && <SearchBar autoFocus={autoFocus} />}
		</header>
	);
}

export default Header;

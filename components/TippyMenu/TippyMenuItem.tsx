import Tippy from "@tippyjs/react/headless";
import Link from "next/link";

import { CaretRightIcon } from "@/assets/Icons";
import MenuItem from "./TippyMenuItem";
interface ChildrenObject {
	content: string;
	to: string;
	className?: string;
}
interface Props {
	content: string;
	className?: string;
	isParent: boolean;
	childrenArray?: ChildrenObject[];
}

function TippyMenuItem({ content, className, isParent, childrenArray }: Props) {
	return (
		<Tippy
			interactive
			placement="right-start"
			render={(attrs) =>
				isParent && (
					<div
						className={`bg-white py-3 rounded-lg ring-black select-none border-lightGrey border border-solid -ml-2 ${className}`}
						tabIndex={-1}
						{...attrs}
					>
						{childrenArray?.map((childrenObject, index) => (
							<Link href={childrenObject.to} key={index}>
								<MenuItem
									content={childrenObject.content}
									className={childrenObject.className}
									isParent={childrenObject.hasOwnProperty(
										"children"
									)}
								/>
							</Link>
						))}
					</div>
				)
			}
		>
			<div
				className={`hover:cursor-pointer hover:bg-lightGrey w-full pl-6 pr-14  h-7 font-normal hover:bg-slate-100 flex items-center relative ${className}`}
			>
				{content}
				{isParent && (
					<CaretRightIcon className="w-3 h-3 absolute right-4" />
				)}
			</div>
		</Tippy>
	);
}

export default TippyMenuItem;

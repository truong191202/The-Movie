import Tippy from "@tippyjs/react/headless";
import Link from "next/link";

import TippyMenuItem from "./TippyMenuItem";
interface ChildrenObject {
	content: string;
	to: string;
	className?: string;
	children?: ChildrenObject[];
}
interface Props {
	children: JSX.Element;
	initalArrays: ChildrenObject[];
	className?: string;
}
function TippyMenu({ children, initalArrays, className }: Props) {
	return (
		<Tippy
			interactive
			render={(attrs) => (
				<div
					className={`bg-white py-3 rounded-lg ring-black select-none border-lightGrey border border-solid ${className}`}
					tabIndex={-1}
					{...attrs}
				>
					{initalArrays.map((initalChildren, index) => (
						<Link href={initalChildren.to} key={index}>
							<TippyMenuItem
								content={initalChildren.content}
								className={initalChildren.className}
								childrenArray={initalChildren.children}
								isParent={initalChildren.hasOwnProperty(
									"children"
								)}
							/>
						</Link>
					))}
				</div>
			)}
		>
			{children}
		</Tippy>
	);
}

export default TippyMenu;

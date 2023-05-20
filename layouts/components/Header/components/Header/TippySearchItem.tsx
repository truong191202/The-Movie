
interface Props {
	content: string;
	icon: JSX.Element;
}

function TippySearchItem({ content, icon }: Props) {
	return (
		<div className="w-full h-7 border-b border-b-lightGrey flex justify-center hover:cursor-pointer hover:bg-lightGrey bg-white select-none">
			<div className="w-8/12 flex items-center">
				{icon}
				{content}
			</div>
		</div>
	);
}

export default TippySearchItem;

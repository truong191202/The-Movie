interface Props {
	content: string;
	className?: string;
}

function Button({ content, className }: Props) {
	return (
		<div className="text-white text-base font-semibold select-none">
			<div className={className}>{content}</div>
		</div>
	);
}

export default Button;

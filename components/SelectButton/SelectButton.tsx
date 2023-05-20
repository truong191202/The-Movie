import { useState, Dispatch, SetStateAction } from "react";
import styles from "./SelectButton.module.css";
interface Props {
	dispatch: Dispatch<SetStateAction<any>>;
	leftSelect: any;
	rightSelect: any;
	leftContent: string;
	rightContent: string;
	border?: string;
	background?: string;
	normalText?: string;
	buttonText?: string;
}
function SelectButton({
	dispatch,
	leftSelect,
	rightSelect,
	leftContent,
	rightContent,
	border = "border-theme",
	background = "bg-theme",
	normalText = "text-theme",
	buttonText = styles.textBtn,
}: Props) {
	const [classNameRight, setClassNameRight] = useState(
		`z-10 w-28 ${normalText} font-semibold ${styles.toLeft}`
	);
	const [classNameLeft, setClassNameLeft] = useState(
		`z-10 w-20 font-semibold ${buttonText} ${styles.toRight}`
	);
	const [classNameBackground, setClassNameBackground] = useState(
		`${background} h-full w-20 rounded-full left-0 absolute`
	);
	return (
		<div
			className={`flex ml-6 h-7 ${border} border border-solid rounded-full relative`}
		>
			<button
				className={classNameLeft}
				onClick={() => {
					dispatch(leftSelect);
					setClassNameRight(`z-10 w-28 ${normalText} font-semibold`);
					setClassNameLeft(`z-10 w-20 font-semibold ${buttonText}`);
					setClassNameBackground(
						`${background} h-full w-20 rounded-full absolute left-0 ${styles.toLeft}`
					);
				}}
			>
				{leftContent}
			</button>
			<button
				className={classNameRight}
				onClick={() => {
					dispatch(rightSelect);
					setClassNameRight(`z-10 w-28 font-semibold ${buttonText}`);
					setClassNameLeft(`z-10 w-20 ${normalText} font-semibold`);
					setClassNameBackground(
						`${background} h-full w-28 rounded-full absolute left-20 ${styles.toRight}`
					);
				}}
			>
				{rightContent}
			</button>
			<div className={classNameBackground}></div>
		</div>
	);
}

export default SelectButton;

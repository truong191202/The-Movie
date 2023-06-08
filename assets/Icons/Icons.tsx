interface PropsIcon {
	width?: string;
	height?: string;
	onClick?: () => void;
	className?: string;
	color?: string;
}

export const ExitIcon = ({
	width,
	height,
	onClick,
	className,
	color,
}: PropsIcon) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 32 32"
		width={width}
		height={height}
		onClick={onClick}
		className={className}
	>
		<path
			fill={color}
			id="menu-close"
			d="M25.83881,23.01038a.5.5,0,0,1,0,.70715l-2.12128,2.12134a.50011.50011,0,0,1-.70709,0L16,18.82837l-7.01044,7.0105a.50011.50011,0,0,1-.70709,0L6.16119,23.71753a.5.5,0,0,1,0-.70715L13.17163,16,6.16119,8.9895a.49982.49982,0,0,1,0-.707L8.28247,6.16113a.5.5,0,0,1,.70709,0L16,13.17163l7.01044-7.0105a.5.5,0,0,1,.70709,0l2.12128,2.12134a.49982.49982,0,0,1,0,.707L18.82843,16Z"
		/>
	</svg>
);

export const SearchIcon = ({
	width,
	height,
	onClick,
	className,
	color,
}: PropsIcon) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 32 32"
		width={width}
		height={height}
		onClick={onClick}
		className={className}
	>
		<path
			fill={color}
			id="search"
			d="M27.207,24.37866,20.6106,17.78235a9.03069,9.03069,0,1,0-2.82825,2.82825L24.37878,27.207a1,1,0,0,0,1.41425,0l1.414-1.41418A1,1,0,0,0,27.207,24.37866ZM13,19a6,6,0,1,1,6-6A6.00657,6.00657,0,0,1,13,19Z"
		/>
	</svg>
);

export const TrendingIcon = ({
	width,
	height,
	onClick,
	className,
	color,
}: PropsIcon) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 32 32"
		width={width}
		height={height}
		onClick={onClick}
		className={className}
	>
		<path
			fill={color}
			id="trending"
			d="M29,9v8a1,1,0,0,1-1,1H26a1,1,0,0,1-1-1V14.82812l-7.79291,7.793a1.00022,1.00022,0,0,1-1.41418,0L12,18.82812,7.12115,23.707a1.00022,1.00022,0,0,1-1.41418,0L4.293,22.293a.99986.99986,0,0,1,0-1.41406l6.99988-7a1.00022,1.00022,0,0,1,1.41418,0L16.5,17.67188,22.17188,12H20a1,1,0,0,1-1-1V9a1,1,0,0,1,1-1h8A1,1,0,0,1,29,9Z"
		/>
	</svg>
);
export const PeopleIcon = ({
	width,
	height,
	onClick,
	className,
	color,
}: PropsIcon) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 32 32"
		width={width}
		height={height}
		onClick={onClick}
		className={className}
	>
		<path
			fill={color}
			id="user"
			d="M27,24.23669V27a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V24.23669a1.57806,1.57806,0,0,1,.93115-1.36462L10.0672,20.167A5.02379,5.02379,0,0,0,14.55273,23h1.89454a5.02336,5.02336,0,0,0,4.48535-2.83313l5.13623,2.7052A1.57806,1.57806,0,0,1,27,24.23669ZM9.64478,14.12573a2.99143,2.99143,0,0,0,1.31073,1.462l.66583,3.05176A2.99994,2.99994,0,0,0,14.55237,21h1.89526a2.99994,2.99994,0,0,0,2.931-2.36047l.66583-3.05176a2.99115,2.99115,0,0,0,1.31073-1.462l.28-.75146A1.2749,1.2749,0,0,0,21,11.62988V9c0-3-2-5-5.5-5S10,6,10,9v2.62988a1.2749,1.2749,0,0,0-.63519,1.74439Z"
		/>
	</svg>
);
export const TvIcon = ({
	width,
	height,
	onClick,
	className,
	color,
}: PropsIcon) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 32 32"
		width={width}
		height={height}
		onClick={onClick}
		className={className}
	>
		<path
			fill={color}
			id="tv"
			d="M23,26v1a1,1,0,0,1-1,1H10a1,1,0,0,1-1-1V26a1,1,0,0,1,1-1H22A1,1,0,0,1,23,26ZM30,6.5v15A1.50008,1.50008,0,0,1,28.5,23H3.5A1.50008,1.50008,0,0,1,2,21.5V6.5A1.50008,1.50008,0,0,1,3.5,5h25A1.50008,1.50008,0,0,1,30,6.5ZM27,8H5V20H27Z"
		/>
	</svg>
);
export const MovieIcon = ({
	width,
	height,
	onClick,
	className,
	color,
}: PropsIcon) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 32 32"
		width={width}
		height={height}
		onClick={onClick}
		className={className}
	>
		<path
			fill={color}
			id="film"
			d="M27,5H5A1,1,0,0,0,4,6V26a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1V6A1,1,0,0,0,27,5ZM9,25H6V23H9Zm0-4H6V19H9Zm0-4H6V15H9Zm0-4H6V11H9ZM9,9H6V7H9ZM21,25H11V17H21Zm0-10H11V7H21Zm5,10H23V23h3Zm0-4H23V19h3Zm0-4H23V15h3Zm0-4H23V11h3Zm0-4H23V7h3Z"
		/>
	</svg>
);
export const LoadingIcon = ({
	width,
	height,
	onClick,
	className,
	color,
}: PropsIcon) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 512 512"
		width={width}
		height={height}
		onClick={onClick}
		className={className}
	>
		<path
			fill={color}
			d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"
		/>
	</svg>
);
export const PlayIcon = ({
	width,
	height,
	onClick,
	className,
	color,
}: PropsIcon) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 32 32"
		width={width}
		height={height}
		onClick={onClick}
		className={className}
	>
		<path
			fill={color}
			d="M24.8175,16.86432,9.503,25.77667A1,1,0,0,1,8,24.91235V7.08765a1,1,0,0,1,1.503-.86432L24.8175,15.13568A1.00006,1.00006,0,0,1,24.8175,16.86432Z"
		/>
	</svg>
);

export const CaretDownIcon = ({
	width,
	height,
	onClick,
	className,
	color,
}: PropsIcon) => (
	<svg
		width={width}
		height={height}
		onClick={onClick}
		className={className}
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 320 512"
	>
		<path
			fill={color}
			d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
		/>
	</svg>
);

export const CaretRightIcon = ({
	width,
	height,
	onClick,
	className,
	color,
}: PropsIcon) => (
	<svg
		width={width}
		height={height}
		onClick={onClick}
		className={className}
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 256 512"
	>
		<path
			fill={color}
			d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"
		/>
	</svg>
);
export const ExpandIcon = ({
	width,
	height,
	onClick,
	className,
	color,
}: PropsIcon) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 32 32"
		width={width}
		height={height}
		onClick={onClick}
		className={className}
	>
		<path
			fill={color}
			id="fullscreen"
			d="M13.72156,12.06732a.5.5,0,0,1-.06812.62219l-.96374.96375a.5.5,0,0,1-.6222.06811L7.89624,11.064,6.19342,12.76642a.49983.49983,0,0,1-.847-.27521L4.10779,4.67969a.49976.49976,0,0,1,.57184-.57184L12.491,5.34619a.50011.50011,0,0,1,.27527.8476L11.06378,7.896Zm5.58874,1.58594a.5.5,0,0,0,.6222.06811L24.10376,11.064l1.70282,1.70246a.49983.49983,0,0,0,.847-.27521l1.23858-7.81152a.49976.49976,0,0,0-.57184-.57184L19.509,5.34619a.50011.50011,0,0,0-.27527.8476L20.93622,7.896l-2.65778,4.17132a.5.5,0,0,0,.06812.62219Zm-6.6206,4.69348a.5.5,0,0,0-.6222-.06811L7.89624,20.936,6.19342,19.23358a.49983.49983,0,0,0-.847.27521L4.10779,27.32031a.49976.49976,0,0,0,.57184.57184l7.8114-1.23834a.50011.50011,0,0,0,.27527-.8476L11.06378,24.104l2.65778-4.17132a.5.5,0,0,0-.06812-.62219Zm13.11688.88684L24.10376,20.936,19.9325,18.27863a.5.5,0,0,0-.6222.06811l-.96374.96375a.5.5,0,0,0-.06812.62219L20.93622,24.104,19.2337,25.80621a.50011.50011,0,0,0,.27527.8476l7.8114,1.23834a.49976.49976,0,0,0,.57184-.57184l-1.23858-7.81152A.49983.49983,0,0,0,25.80658,19.23358Z"
		/>
	</svg>
);
export const ListIcon = ({
	width,
	height,
	onClick,
	className,
	color,
}: PropsIcon) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 32 32"
		width={width}
		height={height}
		onClick={onClick}
		className={className}
	>
		<path
			fill={color}
			id="thumbnails-list"
			d="M11,14v4a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V14a1,1,0,0,1,1-1h4A1,1,0,0,1,11,14Zm-1,7H6a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V22A1,1,0,0,0,10,21ZM10,5H6A1,1,0,0,0,5,6v4a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V6A1,1,0,0,0,10,5Zm17,6H14a1,1,0,0,0-1,1v1a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1V12A1,1,0,0,0,27,11Zm0-6H14a1,1,0,0,0-1,1V7a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1V6A1,1,0,0,0,27,5Zm0,18H14a1,1,0,0,0-1,1v1a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1V24A1,1,0,0,0,27,23Zm0-6H14a1,1,0,0,0-1,1v1a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1V18A1,1,0,0,0,27,17Z"
		/>
	</svg>
);
export const HeartIcon = ({
	width,
	height,
	onClick,
	className,
	color,
}: PropsIcon) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 32 32"
		width={width}
		height={height}
		onClick={onClick}
		className={className}
	>
		<path
			fill={color}
			id="heart"
			d="M27.78131,11.92578c0,4.82666-6.13562,8.68128-11.0376,14.0686a.99978.99978,0,0,1-1.48742,0c-4.902-5.38732-11.03748-9.24194-11.03748-14.0686,0-5.52954,7.53626-9.48682,11.57507-3.82544a.25855.25855,0,0,0,.42029.00562C20.47992,2.43628,27.78131,6.39453,27.78131,11.92578Z"
		/>
	</svg>
);
export const WatchListIcon = ({
	width,
	height,
	onClick,
	className,
	color,
}: PropsIcon) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 32 32"
		width={width}
		height={height}
		onClick={onClick}
		className={className}
	>
		<path
			fill={color}
			id="bookmark"
			d="M25,6V26.58582a1,1,0,0,1-1.70709.70715L16.5,20.5,9.70709,27.293A1,1,0,0,1,8,26.58582V6a2.00006,2.00006,0,0,1,2-2H23A2.00006,2.00006,0,0,1,25,6Z"
		/>
	</svg>
);
export const StarIcon = ({
	width,
	height,
	onClick,
	className,
	color,
}: PropsIcon) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 32 32"
		width={width}
		height={height}
		onClick={onClick}
		className={className}
	>
		<path
			fill={color}
			id="star"
			d="M27.34766,14.17944l-6.39209,4.64307,2.43744,7.506a.65414.65414,0,0,1-.62238.85632.643.643,0,0,1-.38086-.12744l-6.38568-4.6383-6.38574,4.6383a.643.643,0,0,1-.38086.12744.65419.65419,0,0,1-.62238-.85632l2.43744-7.506L4.66046,14.17944A.65194.65194,0,0,1,5.04358,13h7.89978L15.384,5.48438a.652.652,0,0,1,1.24018,0L19.06476,13h7.89978A.652.652,0,0,1,27.34766,14.17944Z"
		/>
	</svg>
);

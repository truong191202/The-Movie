import Head from "next/head";
interface Props {
	children: JSX.Element;
}
function IndexPage({ children }: Props) {
	return (
		<div>
			<Head>
				<title>The Movie</title>
				<meta
					http-equiv="Content-Security-Policy"
					content="upgrade-insecure-requests"
				/>
			</Head>
			{children}
		</div>
	);
}

export default IndexPage;

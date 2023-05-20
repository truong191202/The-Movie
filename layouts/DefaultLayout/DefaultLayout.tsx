import Header from "../components/Header";
import Footer from "../components/Footer";
interface Props {
	children: JSX.Element;
}
function DefaultLayout({ children }: Props) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default DefaultLayout;

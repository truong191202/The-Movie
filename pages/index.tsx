import HomeBody from "@/components/Pages/home/HomeBody";
import DefaultLayout from "@/layouts/DefaultLayout";
import IndexPage from "./head";
export default function Home() {
	return (
		<IndexPage>
			<div className="w-full flex flex-col items-center">
				<DefaultLayout>
					<HomeBody />
				</DefaultLayout>
			</div>
		</IndexPage>
	);
}

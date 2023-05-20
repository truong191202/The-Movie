import HomeBody from "@/components/home/HomeBody";
import DefaultLayout from "@/layouts/DefaultLayout";

export default function Home() {
	return (
		<div className="w-full flex flex-col items-center">
			<DefaultLayout>
				<HomeBody />
			</DefaultLayout>
		</div>
	);
}

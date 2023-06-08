import { CaretDownIcon } from "@/assets/Icons";
import TippyMenu from "@/components/TippyMenu";
interface MenuItem {
	content: string;
	to: string;
	children?: MenuItem[];
}
interface Props {
	overViewArray: MenuItem[];
	mediaArray: MenuItem[];
	fandomArray: MenuItem[];
	shareArray: MenuItem[];
}
function MenuDetailPage({
	overViewArray,
	mediaArray,
	fandomArray,
	shareArray,
}: Props) {
	return (
		<div className="w-full flex justify-center mt-16">
			<div className="flex justify-around gap-9 items-center h-11">
				<TippyMenu initalArrays={overViewArray} className="ml-28 -mt-2">
					<div className="flex items-center hover:cursor-pointer">
						Overview
						<CaretDownIcon className="w-3 h-3 ml-2 -mt-1" />
					</div>
				</TippyMenu>
				<TippyMenu initalArrays={mediaArray} className="ml-24 -mt-2"> 
					<div className="flex items-center hover:cursor-pointer">
						Media <CaretDownIcon className="w-3 h-3 ml-2 -mt-1" />
					</div>
				</TippyMenu>
				<TippyMenu initalArrays={fandomArray} className="ml-24 -mt-2">
					<div className="flex items-center hover:cursor-pointer">
						Fandom <CaretDownIcon className="w-3 h-3 ml-2 -mt-1" />
					</div>
				</TippyMenu>
				<TippyMenu initalArrays={shareArray} className="ml-24 -mt-2">
					<div className="flex items-center hover:cursor-pointer">
						Share <CaretDownIcon className="w-3 h-3 ml-2 -mt-1" />
					</div>
				</TippyMenu>
			</div>
		</div>
	);
}

export default MenuDetailPage;

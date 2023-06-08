interface Props {
	minutes: number;
}
function convertTime(minutes: number) {
	const hours = Math.floor(minutes / 60);
	const minutesRemainder = minutes % 60;
	return `${hours}h${minutesRemainder}m`;
}
export default convertTime;

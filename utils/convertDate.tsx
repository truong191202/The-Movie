function convertDate(dateString: string) {
	const date = new Date(dateString);
	const monthNames = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];
	const monthIndex = date.getMonth();
	const day = date.getDate();
	const year = date.getFullYear();

	return `${monthNames[monthIndex]} ${day}, ${year}`;
}
export default convertDate;

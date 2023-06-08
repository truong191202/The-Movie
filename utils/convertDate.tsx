function convertDate(
	dateString: string,
	convertType: string = "ddLetter mm, yyyy"
) {
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
	const day = date.getDate().toString().padStart(2, "0");
	const year = date.getFullYear();
	switch (convertType) {
		case "ddLetter mm, yyyy": {
			const monthIndex = date.getMonth();
			return `${monthNames[monthIndex]} ${day}, ${year}`;
		}
		case "dd/mm/yyyy": {
			const monthIndex = date.getMonth();
			return `${(monthIndex + 1)
				.toString()
				.padStart(2, "0")}/${day}/${year}`;
		}
	}
}
export default convertDate;

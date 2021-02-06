export function today() {
	return new Date();
}

export function currentYear() {
	return today().getFullYear();
}

export function lastYear() {
	return currentYear() - 1;
}

export function nextYear() {
	return currentYear() + 1;
}

export function currentMonth() {
	const month = today().getMonth() + 1;
	return month < 10 ? `0${month}` : month;
}

export function currentDay() {
	const day = today().getDate();
	return day < 10 ? `0${day}` : day;
}

export function date(opt = 'current') {
	let year = currentYear();
	let month = currentMonth();
	let day = currentDay();

	if (opt === 'last') year = lastYear();
	if (opt === 'next') year = nextYear();

	return `${year}-${month}-${day}`;
}

export function today() {
	return new Date();
}

export function currentYear() {
	return today().getFullYear();
}

export function lastYear(count = 1) {
	return currentYear() - count;
}

export function nextYear(count = 1) {
	return currentYear() + count;
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

export function resizeImage(path, size) {
	const image = path.match(/media\/screenshots/)
		? path.replace('/media/screenshots', `/media/resize/${size}/-/screenshots`)
		: path.replace('/media/games/', `/media/resize/${size}/-/games/`);

	return image;
}

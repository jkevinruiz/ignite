import { date } from './utils';

const base_url = 'https://api.rawg.io/api';

export const popular_games_url = `${base_url}/games?dates=${date(
	'last'
)},${date()}&ordering=-rating&page_size=10`;

export const upcoming_games_url = `${base_url}/games?dates=${date()},${date(
	'next'
)}&ordering=-added&page_size=10`;

export const new_games_url = `${base_url}/games?dates=${date(
	'last'
)},${date()}&ordering=-released&page_size=10`;

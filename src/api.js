import { date } from './utils';

const base_url = 'https://api.rawg.io/api';

export const popular_games_url = `${base_url}/games?dates=${date(
	'last'
)},${date()}&ordering=-rating&page_size=10`;

export const upcoming_games_url = `${base_url}/games?dates=${date()},${date(
	'next'
)}&ordering=-added&page_size=10`;

export const recent_games_url = `${base_url}/games?dates=${date(
	'last'
)},${date()}&ordering=-released&page_size=10`;

export const search_games_url = (name) =>
	`${base_url}/games?search=${name}&page_size=9`;

export const game_details_url = (id) => `${base_url}/games/${id}`;

export const game_screenshots_url = (id) =>
	`${base_url}/games/${id}/screenshots`;

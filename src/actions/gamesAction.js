import axios from 'axios';
import {
	popular_games_url,
	upcoming_games_url,
	recent_games_url,
	search_games_url,
} from '../api';

export const getGames = () => async (dispatch) => {
	const popular = await axios.get(popular_games_url);
	const upcoming = await axios.get(upcoming_games_url);
	const recent = await axios.get(recent_games_url);
	dispatch({
		type: 'FETCH_GAMES',
		payload: {
			popular: popular.data.results,
			upcoming: upcoming.data.results,
			recent: recent.data.results,
		},
	});
};

export const searchGames = (name) => async (dispatch) => {
	const searched = await axios.get(search_games_url(name));
	dispatch({
		type: 'SEARCH_GAMES',
		payload: {
			searched: searched.data.results,
		},
	});
};

export const clearSearchgames = () => async (dispatch) => {
	dispatch({
		type: 'CLEAR_SEARCH_GAMES',
	});
};

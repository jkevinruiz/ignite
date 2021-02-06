import axios from 'axios';
import {
	popular_games_url,
	upcoming_games_url,
	recent_games_url,
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

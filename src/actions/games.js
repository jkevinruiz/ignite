import axios from 'axios';
import { popular_games_url } from '../api';

export const getPopularGames = () => async (dispatch) => {
	const response = await axios.get(popular_games_url);
	const games = response.data.results;
	dispatch({
		type: 'FETCH_GAMES',
		payload: {
			popular: games,
		},
	});
};

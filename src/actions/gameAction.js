import axios from 'axios';
import { game_details_url, game_screenshots_url } from '../api';

export const loadDetails = (id) => async (dispatch) => {
	dispatch({ type: 'LOAD_GAME_DETAILS' });

	const [details, screenshots] = await Promise.all([
		axios.get(game_details_url(id)),
		axios.get(game_screenshots_url(id)),
	]);

	dispatch({
		type: 'FETCH_GAME_DETAILS',
		payload: {
			details: details.data,
			screenshots: screenshots.data.results,
		},
	});
};

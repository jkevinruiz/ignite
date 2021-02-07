import axios from 'axios';
import { game_details_url, game_screenshots_url } from '../api';

export const loadDetails = (id) => async (dispatch) => {
	const details = await axios.get(game_details_url(id));
	const screenshots = await axios.get(game_screenshots_url(id));
	dispatch({
		type: 'FETCH_GAME_DETAILS',
		payload: {
			details: details.data,
			screenshots: screenshots.data.results,
		},
	});
};

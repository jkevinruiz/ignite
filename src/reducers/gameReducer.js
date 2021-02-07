const initialState = {
	game: {},
	screenshots: {},
};

export default function gameReducer(state = initialState, action) {
	switch (action.type) {
		case 'FETCH_GAME_DETAILS':
			return {
				...state,
				details: action.payload.details,
				screenshots: action.payload.screenshots,
			};
		default:
			return { ...state };
	}
}

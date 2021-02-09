const initialState = {
	details: {},
	screenshots: {},
	isLoading: true,
};

export default function gameReducer(state = initialState, action) {
	switch (action.type) {
		case 'FETCH_GAME_DETAILS':
			return {
				...state,
				details: action.payload.details,
				screenshots: action.payload.screenshots,
				isLoading: false,
			};
		case 'LOAD_GAME_DETAILS':
			return {
				...state,
				isLoading: true,
			};
		default:
			return { ...state };
	}
}

const initialState = {
	popular: [],
	new: [],
	upcoming: [],
};

export default function gamesReducer(state = initialState, action) {
	switch (action.type) {
		case 'FETCH_GAMES':
			return { ...state, popular: action.payload.popular };
		default:
			return { ...state };
	}
}

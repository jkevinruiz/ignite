const initialState = {
	popular: [],
	recent: [],
	upcoming: [],
	searched: [],
};

export default function gamesReducer(state = initialState, action) {
	switch (action.type) {
		case 'FETCH_GAMES':
			return { ...state, ...action.payload };
		case 'SEARCH_GAMES':
			return { ...state, ...action.payload };
		case 'CLEAR_SEARCH_GAMES':
			return { ...state, searched: [] };
		default:
			return { ...state };
	}
}

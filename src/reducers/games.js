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
		default:
			return { ...state };
	}
}

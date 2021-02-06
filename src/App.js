import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPopularGames } from './actions/games';

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getPopularGames());
	}, [dispatch]);
	return <div></div>;
}

export default App;

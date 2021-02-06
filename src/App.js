import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getGames } from './actions/games';

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getGames());
	}, [dispatch]);
	return <div></div>;
}

export default App;

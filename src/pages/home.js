import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getGames } from '../actions/games';

function Home() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getGames());
	}, [dispatch]);

	return (
		<div>
			<h1>Home</h1>
		</div>
	);
}

export default Home;

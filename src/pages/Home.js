import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getGames, clearSearchgames } from '../actions/gamesAction';
import styled from 'styled-components';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import Game from '../components/Game';
import Games from '../components/Games';
import GameDetail from '../components/GameDetail';

function Home() {
	const { id: pathId } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getGames());
	}, [dispatch]);

	const games = useSelector((state) => state.games);

	const { popular, upcoming, recent, searched } = games;

	function handleClearSearchGames() {
		dispatch(clearSearchgames());
	}

	return (
		<GameList>
			<AnimateSharedLayout type='crossfade'>
				<AnimatePresence>
					{pathId && <GameDetail pathId={pathId} />}
				</AnimatePresence>
				{searched.length ? (
					<>
						<h2>
							Search Games{' '}
							{<button onClick={handleClearSearchGames}>Clear</button>}
						</h2>
						<Games games={searched} />
					</>
				) : null}
				<h2>Popular Games</h2>
				<Games games={popular} />
				<h2>Upcoming Games</h2>
				<Games games={upcoming} />
				<h2>Recent Games</h2>
				<Games games={recent} />
			</AnimateSharedLayout>
		</GameList>
	);
}

const GameList = styled(motion.div)`
	padding: 0rem 5rem;

	h2 {
		padding: 5rem 0rem;
		display: flex;
		justify-content: space-between;
		align-items: center;

		button {
			font-size: 1rem;
			padding: 0.5rem 2rem;
			cursor: pointer;
			border: none;
			background: #ff7676;
			color: white;
			border-radius: 0.25rem;
		}
	}
`;

export default Home;

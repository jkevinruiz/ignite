import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getGames } from '../actions/gamesAction';
import styled from 'styled-components';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import Game from '../components/Game';
import GameDetail from '../components/GameDetail';

function Home() {
	const { id: pathId } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getGames());
	}, [dispatch]);

	const { popular, upcoming, recent } = useSelector((state) => state.games);

	return (
		<GameList>
			<AnimateSharedLayout type='crossfade'>
				<AnimatePresence>
					{pathId && <GameDetail pathId={pathId} />}
				</AnimatePresence>
				<h2>Popular Games</h2>
				<Games>
					{popular.map((game) => (
						<Game key={game.id} game={game} />
					))}
				</Games>
				<h2>Upcoming Games</h2>
				<Games>
					{upcoming.map((game) => (
						<Game key={game.id} game={game} />
					))}
				</Games>
				<h2>Recent Games</h2>
				<Games>
					{recent.map((game) => (
						<Game key={game.id} game={game} />
					))}
				</Games>
			</AnimateSharedLayout>
		</GameList>
	);
}

const GameList = styled(motion.div)`
	padding: 0rem 5rem;

	h2 {
		padding: 5rem 0rem;
	}
`;
const Games = styled(motion.div)`
	min-height: 80vh;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(31.25rem, 1fr));
	grid-column-gap: 3rem;
	grid-row-gap: 5rem;
`;

export default Home;

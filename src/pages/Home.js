import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGames } from '../actions/games';
import Game from '../components/Game';
import styled from 'styled-components';
import { motion } from 'framer-motion';

function Home() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getGames());
	}, [dispatch]);

	const { popular, upcoming, recent } = useSelector((state) => state.games);

	return (
		<GameList>
			<h2>Upcoming Games</h2>
			<Games>
				{upcoming.map((game) => (
					<Game key={game.id} game={game} />
				))}
			</Games>
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

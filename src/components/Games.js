import Loading from './Loading';
import Game from './Game';
import styled from 'styled-components';
import { motion } from 'framer-motion';

function Games({ games }) {
	const isEmpty = !Boolean(games?.length);

	return isEmpty ? (
		<Loading />
	) : (
		<StyledGames>
			{games.map((game) => (
				<Game key={game.id} game={game} />
			))}
		</StyledGames>
	);
}

const StyledGames = styled(motion.div)`
	min-height: 80vh;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
	grid-column-gap: 3rem;
	grid-row-gap: 5rem;

	@media (max-width: 40.625rem) {
		display: block;
	}
`;

export default Games;

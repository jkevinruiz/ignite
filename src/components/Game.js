import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadDetails } from '../actions/gameAction';
import styled from 'styled-components';
import { motion } from 'framer-motion';

function Game({ game }) {
	const { name, released, id, background_image: image } = game;
	const dispatch = useDispatch();

	function handleLoadDetails() {
		dispatch(loadDetails(id));
	}

	return (
		<StyledGame onClick={handleLoadDetails}>
			<Link to={`/game/${id}`}>
				<h3>{name}</h3>
				<p>{released}</p>
				<img src={image} alt={name} />
			</Link>
		</StyledGame>
	);
}

const StyledGame = styled(motion.div)`
	min-height: 30vh;
	box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
	text-align: center;
	border-radius: 1rem;
	cursor: pointer;

	img {
		width: 100%;
		height: 40vh;
		object-fit: cover;
	}
`;

export default Game;

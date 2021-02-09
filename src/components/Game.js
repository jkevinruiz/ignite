import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadDetails } from '../actions/gameAction';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { resizeImage } from '../utils';

function Game({ game }) {
	const { name, released, id, background_image: image } = game;
	const dispatch = useDispatch();

	function handleLoadDetails() {
		// hide body scrollbar
		document.body.style.overflow = 'hidden';

		dispatch(loadDetails(id));
	}

	const pathId = id.toString();

	return (
		<StyledGame layoutId={pathId} onClick={handleLoadDetails}>
			<Link to={`/game/${id}`}>
				<motion.h3 layoutId={'title ' + pathId}>{name}</motion.h3>
				<p>{released}</p>
				<motion.img
					layoutId={'image ' + pathId}
					src={resizeImage(image, 640)}
					alt={name}
				/>
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
	overflow: hidden;

	img {
		width: 100%;
		height: 40vh;
		object-fit: cover;
	}
`;

export default Game;

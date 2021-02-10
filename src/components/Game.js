import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadDetails } from '../actions/gameAction';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { resizeImage } from '../utils';
import placeholder from '../images/placeholder-image.png';
import { popInOut } from '../animations/animation';

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
		<StyledGame
			variants={popInOut}
			initial='hidden'
			animate='show'
			layoutId={pathId}
			onClick={handleLoadDetails}
		>
			<Link to={`/game/${id}`}>
				<motion.h3 layoutId={'title ' + pathId}>{name}</motion.h3>
				<p>{released}</p>
				<motion.img
					layoutId={'image ' + pathId}
					src={image ? resizeImage(image, 640) : placeholder}
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

	@media (max-width: 40.625em) {
		margin: 2rem 0;
	}
`;

export default Game;

import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { resizeImage } from '../utils';
import placeholder from '../images/placeholder-image.png';

import playstation4 from '../images/playstation.svg';
import playstation5 from '../images/ps5.svg';
import steam from '../images/steam.svg';
import nintendo from '../images/nintendo.svg';
import apple from '../images/apple.svg';
import xbox from '../images/xbox.svg';
import gamepad from '../images/gamepad.svg';
import startempty from '../images/star-empty.png';
import startfull from '../images/star-full.png';

function GameDetail({ pathId }) {
	const history = useHistory();
	const { screenshots, details, isLoading } = useSelector(
		(state) => state.game
	);

	function handleCloseOverlay(e) {
		const el = e.target;
		if (el.classList.contains('overlay')) {
			document.body.style.overflow = 'auto';
			history.push('/');
		}
	}

	function getPlatformImage(platform) {
		switch (platform) {
			case 'PlayStation 4':
				return playstation4;
			case 'PlayStation 5':
				return playstation5;
			case 'Xbox One':
				return xbox;
			case 'Xbox Series S/X':
				return xbox;
			case 'PC':
				return steam;
			case 'Nintendo Switch':
				return nintendo;
			case 'iOS':
				return apple;
			default:
				return gamepad;
		}
	}

	function getStarRating() {
		const stars = [];
		const rating = Math.floor(details.rating);

		for (let i = 1; i <= 5; i++) {
			if (i <= rating) stars.push(<Star key={i} />);
			else stars.push(<Star key={i} option='empty' />);
		}

		return stars;
	}

	return !isLoading ? (
		<CardOverlay className='overlay' onClick={handleCloseOverlay}>
			<Detail layoutId={pathId}>
				<Stats>
					<Ratings>
						<motion.h3 layoutId={'title ' + pathId}>{details.name}</motion.h3>
						<p>Rating: {details.rating} </p>
						{getStarRating()}
					</Ratings>
					<Info>
						<h3>Platforms</h3>
						<Platforms>
							{details.platforms.map((data) => (
								<img
									key={data.platform.id}
									src={getPlatformImage(data.platform.name)}
									alt={data.platform.name}
								/>
							))}
						</Platforms>
					</Info>
				</Stats>
				<Media>
					<motion.img
						layoutId={'image ' + pathId}
						src={
							details.background_image
								? resizeImage(details.background_image, 1280)
								: placeholder
						}
						alt={`${details.name} cover`}
					/>
				</Media>
				<Description>
					<p>{details.description_raw}</p>
				</Description>
				<Gallery>
					{screenshots.map((data, i) => (
						<img
							src={resizeImage(data.image, 1280)}
							key={data.id}
							alt={`screenshot_${i + 1}`}
						/>
					))}
				</Gallery>
			</Detail>
		</CardOverlay>
	) : null;
}

const CardOverlay = styled.div`
	width: 100%;
	min-height: 100vh;
	overflow-y: scroll;
	background: rgba(0, 0, 0, 0.5);
	position: fixed;
	top: 0;
	left: 0;
	z-index: 10;

	scrollbar-width: thin;
	scrollbar-color: #ff7676 white;
	&::-webkit-scrollbar {
		width: 0.5rem;
	}
	&::-webkit-scrollbar-thumb {
		background-color: #ff7676;
	}
	&::-webkit-scrollbar-track-color {
		background-color: white;
	}
`;

const Detail = styled(motion.div)`
	margin: 5rem 0;
	width: 80%;
	border-radius: 1rem;
	padding: 2rem 5rem;
	background: white;
	position: absolute;
	left: 10%;
	color: black;

	img {
		width: 100%;
	}
`;

const Stats = styled(motion.div)`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Info = styled(motion.div)`
	text-align: center;
`;

const Platforms = styled(motion.div)`
	display: flex;
	justify-content: space-evenly;

	img {
		margin-left: 3rem;
		max-width: 2rem;
		max-height: 2rem;
	}
`;

const Media = styled(motion.div)`
	margin-top: 5rem;

	img {
		width: 100%;
	}
`;

const Description = styled(motion.div)`
	margin: 4rem 0;
`;

const Ratings = styled.div`
	h3 {
		padding: 1.5rem 0;
	}

	img {
		max-width: 1.5rem;
		max-height: 1.5rem;
		display: inline;
	}
`;

const Gallery = styled.div``;

function Star({ option }) {
	if (option === 'empty') {
		return <img src={startempty} alt='star' />;
	}

	return <img src={startfull} alt='star' />;
}

export default GameDetail;

import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loadDetails } from '../actions/gameAction';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { resizeImage } from '../utils';
import Loading from './Loading';

import playstation3 from '../images/ps3.svg';
import playstation4 from '../images/ps4.svg';
import playstation5 from '../images/ps5.svg';
import pc from '../images/pc.svg';
import nintendo from '../images/nintendo.svg';
import apple from '../images/apple.svg';
import xbox from '../images/xbox.svg';
import xboxseries from '../images/xboxseries.svg';
import gamepad from '../images/gamepad.svg';
import chrome from '../images/chrome.svg';
import startempty from '../images/star-empty.png';
import startfull from '../images/star-full.png';
import placeholder from '../images/placeholder-image.png';

function GameDetail({ pathId }) {
	const dispatch = useDispatch();
	const history = useHistory();

	const { screenshots, details, isLoading } = useSelector(
		(state) => state.game
	);

	useEffect(() => {
		if (isLoading && !details.name) {
			dispatch(loadDetails(pathId));
		}
	}, [details.name, dispatch, isLoading, pathId]);

	function handleCloseOverlay(e) {
		const el = e.target;
		if (el.classList.contains('overlay') || el.classList.contains('close')) {
			document.body.style.overflow = 'auto';
			history.push('/');
		}
	}

	function getPlatformImage(platform) {
		switch (platform) {
			case 'PlayStation 3':
				return playstation3;
			case 'PlayStation 4':
				return playstation4;
			case 'PlayStation 5':
				return playstation5;
			case 'Xbox One':
				return xbox;
			case 'Xbox 360':
				return xbox;
			case 'Xbox Series S/X':
				return xboxseries;
			case 'PC':
				return pc;
			case 'Nintendo Switch':
				return nintendo;
			case 'iOS':
				return apple;
			case 'Web':
				return chrome;
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
			<button className='close' onClick={handleCloseOverlay}>
				X
			</button>
			<Detail layoutId={pathId}>
				<Stats>
					<Ratings>
						<motion.h3 layoutId={'title ' + pathId}>{details.name}</motion.h3>
						<p>Rating: {details.rating} </p>
						<div className='stars'>{getStarRating()}</div>
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
	) : (
		<CardOverlay style={{ '--flex': 'flex' }}>
			<Loading />
		</CardOverlay>
	);
}

const CardOverlay = styled.div`
	display: var(--flex);
	align-items: center;
	justify-content: center;

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

	.close {
		visibility: hidden;
	}

	@media (max-width: 40.625em) {
		.close {
			visibility: visible;
			position: fixed;
			top: 0.75rem;
			right: 0.75rem;
			min-height: 2rem;
			min-width: 2rem;
			color: black;
			background-color: #ff7676;
			outline: none;
			border: none;
			border-radius: 1rem;
			font-weight: bold;
			z-index: 15;
		}

		.close:active {
			background-color: #c6c6c6;
			color: white;
		}
	} ;
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

	@media (max-width: 40.625em) {
		padding: 0.5rem;
		width: 95%;
		left: 3%;
	}
`;

const Stats = styled(motion.div)`
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media (max-width: 40.625em) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
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

	@media (max-width: 40.625rem) {
		img {
			margin: 0 0.5rem;
		}
	}
`;

const Media = styled(motion.div)`
	margin-top: 5rem;

	img {
		margin: 0 auto;
		width: 95%;
		min-width: 20rem;
		border-radius: 0.25rem;
	}
`;

const Description = styled(motion.div)`
	margin: 4rem 0;

	p {
		text-align: justify;
	}
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

	@media (max-width: 40.625rem) {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

const Gallery = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-wrap: wrap;

	img {
		max-width: 26.25rem;
		min-width: 20rem;
		margin: 1rem 0;
		border-radius: 0.25rem;
	}
`;

function Star({ option }) {
	if (option === 'empty') {
		return <img src={startempty} alt='star' />;
	}

	return <img src={startfull} alt='star' />;
}

export default GameDetail;

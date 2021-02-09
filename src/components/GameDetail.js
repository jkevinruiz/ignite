import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { motion } from 'framer-motion';

function GameDetail() {
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

	return !isLoading ? (
		<CardOverlay className='overlay' onClick={handleCloseOverlay}>
			<Detail>
				<Stats>
					<Ratings>
						<h3>{details.name}</h3>
						<p>Rating: {details.rating}</p>
					</Ratings>
					<Info>
						<h3>Platforms</h3>
						<Platforms>
							{details.platforms.map((data) => (
								<h3 key={data.platform.id}>{data.platform.name}</h3>
							))}
						</Platforms>
					</Info>
				</Stats>
				<Media>
					<img src={details.background_image} alt={`${details.name} cover`} />
				</Media>
				<Description>
					<p>{details.description_raw}</p>
				</Description>
				<Gallery>
					{screenshots.map((data, i) => (
						<img src={data.image} key={data.id} alt={`screenshot_${i + 1}`} />
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

const Detail = styled.div`
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
`;

const Gallery = styled.div``;

export default GameDetail;

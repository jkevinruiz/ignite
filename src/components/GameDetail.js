import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

function GameDetail() {
	const { screenshots, details } = useSelector((state) => state.game);

	return details ? (
		<CardShadow className='card-shadow'>
			<Detail className='detail'>
				<div className='stats'>
					<div className='rating'>
						<h3>{details.name}</h3>
						<p>Rating: {details.rating}</p>
					</div>
					<div className='info'>
						<h3>Platforms</h3>
						<div className='platforms'>
							{details.platforms.map((data) => (
								<h3 key={data.platform.id}>{data.platform.name}</h3>
							))}
						</div>
					</div>
				</div>
				<div className='media'>
					<img src={details.background_image} alt={`${details.name} cover`} />
				</div>
				<div className='description'>
					<p>{details.description_raw}</p>
				</div>
				<div className='gallery'>
					{screenshots.map((data, i) => (
						<img src={data.image} key={data.id} alt={`screenshot_${i + 1}`} />
					))}
				</div>
			</Detail>
		</CardShadow>
	) : null;
}

const CardShadow = styled.div`
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
	width: 80%;
	border-radius: 1rem;
	padding: 2rem 20rem;
	background: white;
	position: absolute;
	left: 10%;
	color: black;

	img {
		width: 100%;
	}
`;

export default GameDetail;

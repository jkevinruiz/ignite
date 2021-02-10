import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
	waveContainer,
	waveCircle,
	bounceTransition,
} from '../animations/animation';

function Loading() {
	return (
		<Container>
			<LoadingContainer variants={waveContainer} initial='start' animate='end'>
				<LoadingCircle variants={waveCircle} transition={bounceTransition} />
				<LoadingCircle variants={waveCircle} transition={bounceTransition} />
				<LoadingCircle variants={waveCircle} transition={bounceTransition} />
			</LoadingContainer>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const LoadingContainer = styled(motion.div)`
	width: 2rem;
	height: 2rem;
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

const LoadingCircle = styled(motion.span)`
	display: block;
	width: 0.5rem;
	height: 0.5rem;
	background-color: #ff7676;
	border-radius: 0.25rem;
`;

export default Loading;

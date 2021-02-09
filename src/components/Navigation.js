import styled from 'styled-components';
import { motion } from 'framer-motion';
import ignite from '../images/logo.svg';

function Navigation() {
	return (
		<StyledNav>
			<Logo>
				<img src={ignite} alt='ignite' />
				<h1>Ignite</h1>
			</Logo>
			<div className='search'>
				<input type='text' spellCheck='false' />
				<button>Search</button>
			</div>
		</StyledNav>
	);
}

const StyledNav = styled(motion.div)`
	padding: 3rem 5rem;
	text-align: center;

	input {
		width: 30%;
		font-size: 1.5rem;
		padding: 0.5rem;
		margin-top: 1rem;
		border: none;
		box-shadow: 0 0 1.875rem rgba(0, 0, 0, 0.2);
		border-radius: 0.25rem 0 0 0.25rem;
	}

	button {
		font-size: 1.5rem;
		padding: 0.5rem 2rem;
		cursor: pointer;
		border: none;
		background: #ff7676;
		color: white;
		border-radius: 0 0.25rem 0.25rem 0;
	}
`;

const Logo = styled(motion.div)`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1rem;
	cursor: pointer;
	img {
		height: 2rem;
		width: 2rem;
		margin-right: 0.5rem;
	}
`;

export default Navigation;

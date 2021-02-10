import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ignite from '../images/logo.svg';
import { searchGames } from '../actions/gamesAction';
import { useDispatch } from 'react-redux';
import { fadeInOut } from '../animations/animation';

function Navigation() {
	const dispatch = useDispatch();
	const [input, setInput] = useState('');

	function handleSearch(e) {
		e.preventDefault();
		if (input) {
			dispatch(searchGames(input));
			setInput('');
		}
	}

	return (
		<StyledNav variants={fadeInOut} initial='hidden' animate='show'>
			<Logo>
				<img src={ignite} alt='ignite' />
				<h1>Ignite</h1>
			</Logo>
			<form className='search' onSubmit={handleSearch}>
				<input
					type='text'
					spellCheck='false'
					value={input}
					onChange={(e) => setInput(e.target.value)}
					placeholder='search games'
					required
				/>
				<button type='submit'>Search</button>
			</form>
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
		margin-right: 0.5rem;
		border: none;
		box-shadow: 0 0 1.875rem rgba(0, 0, 0, 0.2);
		border-radius: 0.25rem;

		:focus {
			outline-color: #ff7676;
		}
	}

	button {
		font-size: 1.5rem;
		padding: 0.5rem 2rem;
		cursor: pointer;
		border: none;
		background: #ff7676;
		color: white;
		border-radius: 0.25rem;
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

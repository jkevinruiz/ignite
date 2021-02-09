import { Switch, Route, Link } from 'react-router-dom';
import Nav from './components/Navigation';
import Home from './pages/Home';

function App() {
	return (
		<>
			<Nav></Nav>
			<Switch>
				<Route exact path={['/', '/game/:id']} component={Home} />
			</Switch>
		</>
	);
}

export default App;

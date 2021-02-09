import { Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';

function App() {
	return (
		<Switch>
			<Route exact path={['/', '/game/:id']} component={Home} />
		</Switch>
	);
}

export default App;

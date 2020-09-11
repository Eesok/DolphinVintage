import { Route, Switch, Link } from 'react-router-dom';
import React, { Component } from 'react';
import ItemsList from './components/ItemsList';
import ItemDetails from './components/ItemDetails';
import ItemEdit from './components/ItemEdit';
import ItemCreate from './components/ItemCreate';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<header>
					<Link to='/'>Home</Link>
					<Link to='/items/create'>Create New Item</Link>
				</header>
				<main>
					<p className='title'>Dolphin Vintage</p>
					<Switch>
						<Route path='/' exact component={ItemsList} />
						<Route path='/item/:id' exact component={ItemDetails} />
						<Route path='/item/:id/edit' exact component={ItemEdit} />
						<Route path='/items/create' exact component={ItemCreate} />
					</Switch>
				</main>
			</div>
		);
	}
}
export default App;

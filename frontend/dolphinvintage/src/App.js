import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import ItemsList from './components/ItemsList';
import ItemDetails from './components/ItemDetails';
import ItemEdit from './components/ItemEdit';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<main>
					<p className='title'>Dolphin Vintage</p>
					<Switch>
						<Route path='/' exact component={ItemsList} />
						<Route path='/item/:id' exact component={ItemDetails} />
						<Route path='/item/:id/edit' exact component={ItemEdit} />
					</Switch>
				</main>
			</div>
		);
	}
}
export default App;

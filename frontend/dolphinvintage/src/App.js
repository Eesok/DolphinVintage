import { Route, Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import axios from 'axios';
import ItemsList from './components/ItemsList';

import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			itemData: [],
		};
	}

	componentDidMount() {
		axios
			.get('http://localhost:8000/items/')
			.then((json) => {
				this.setState({
					itemData: json.data,
				});
			})
			.catch(console.error);
	}

	render() {
		return (
			<div className='App'>
				<main>
					<p className='title'>Dolphin Vintage</p>
					<Route
						path='/'
						exact
						render={() => {
							return (
								<div>
									<ItemsList itemData={this.state.itemData} />
								</div>
							);
						}}
					/>
				</main>
			</div>
		);
	}
}
export default App;

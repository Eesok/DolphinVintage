import { Route, Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import axios from 'axios';
import ItemsList from './components/ItemsList';
import Search from './components/Search';
import ItemInfo from './components/ItemInfo';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			itemData: [],
			searchValue: '',
		};
	}

	eventHandler = (data) => {
		this.setState({ searchValue: data.searchValue });
	};

	componentDidMount() {
		axios('https://new-dolphin-backend.herokuapp.com/items/')
			.then((json) => {
				this.setState({
					itemData: json.data,
				});
				console.log(this.state.itemData[0].name);
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
									<Search onChange={this.eventHandler} />
									<ItemsList
										searchValue={this.state.searchValue}
										itemData={this.state.itemData}
									/>
								</div>
							);
						}}
					/>
					<Route
						path='/item/:id'
						exact
						render={(routerProps) => {
							return (
								<div>
									<ItemInfo
										match={routerProps.match}
										itemData={this.state.itemData}
									/>
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

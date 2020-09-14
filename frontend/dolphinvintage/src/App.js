import { Route, Switch, Link } from 'react-router-dom';
import React, { Component } from 'react';
import ItemsList from './components/ItemsList';
import ItemDetails from './components/ItemDetails';
import ItemEdit from './components/ItemEdit';
import ItemCreate from './components/ItemCreate';
import Nav from './components/Nav';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			displayed_form: '',
			logged_in: localStorage.getItem('token') ? true : false,
			username: '',
		};
	}

	//  Credit due to Dakota Lillie @ https://medium.com/@dakota.lillie/django-react-jwt-authentication-5015ee00ef9a

	componentDidMount() {
		if (this.state.logged_in) {
			fetch('http://localhost:8000/accounts/current_user/', {
				headers: {
					Authorization: `JWT ${localStorage.getItem('token')}`,
				},
			})
				.then((res) => res.json())
				.then((json) => {
					this.setState({ username: json.username });
				});
		}
	}

	handle_login = (e, data) => {
		e.preventDefault();
		fetch('http://localhost:8000/token-auth/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((json) => {
				localStorage.setItem('token', json.token);
				this.setState({
					logged_in: true,
					displayed_form: '',
					username: json.user.username,
				});
			});
	};

	// handle_signup = (e, data) => {
	// 	e.preventDefault();
	// 	fetch('http://localhost:8000/accounts/users/', {
	// 		method: 'POST',
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 		},
	// 		body: JSON.stringify(data),
	// 	})
	// 		.then((res) => res.json())
	// 		.then((json) => {
	// 			localStorage.setItem('token', json.token);
	// 			this.setState({
	// 				logged_in: true,
	// 				displayed_form: '',
	// 				username: json.username,
	// 			});
	// 		});
	// };

	handle_logout = () => {
		localStorage.removeItem('token');
		this.setState({ logged_in: false, username: '' });
	};

	display_form = (form) => {
		this.setState({
			displayed_form: form,
		});
	};

	render() {
		let form;
		switch (this.state.displayed_form) {
			case 'login':
				form = <LoginForm handle_login={this.handle_login} />;
				break;
			// case 'signup':
			// 	form = <SignupForm handle_signup={this.handle_signup} />;
			// 	break;
			default:
				form = null;
		}
		return (
			<div className='App'>
				<header>
					<Link to='/'>Home</Link>
				</header>
				<main>
					<p className='title'>Dolphin Vintage</p>
					<Nav
						logged_in={this.state.logged_in}
						display_form={this.display_form}
						handle_logout={this.handle_logout}
					/>
					{form}
					<h3>
						{this.state.logged_in
							? `Hello, ${this.state.username}`
							: 'Please Log In'}
					</h3>
					<Switch>
						<Route path='/' exact component={ItemsList} />
						<Route
							path='/item/:id'
							exact
							render={(routerProps) => {
								return (
									<ItemDetails
										match={routerProps.match}
										logged_in={this.state.logged_in}
									/>
								);
							}}
							logged_in={this.logged_in}
						/>
						<Route path='/item/:id/edit' exact component={ItemEdit} />
						<Route path='/items/create' exact component={ItemCreate} />
					</Switch>
				</main>
			</div>
		);
	}
}
export default App;

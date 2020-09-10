import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
	render() {
		function refreshPage() {
			window.location.reload();
		}
		return (
			<div>
				<Link to='/' onClick={refreshPage}>
					Home
				</Link>
			</div>
		);
	}
}

export default Header;

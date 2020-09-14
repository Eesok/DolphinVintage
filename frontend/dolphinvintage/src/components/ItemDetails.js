import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';

class ItemDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {
			infoData: {},
			detailData: {},
			deleted: false,
			error: false,
		};
	}
	componentDidMount() {
		const id = this.props.match.params.id;
		axios(`http://localhost:8000/items/${id}`)
			.then((json) => {
				this.setState({
					infoData: json.data,
				});

				axios(
					`http://localhost:8000/details/${this.state.infoData.details}`
				).then((json) => {
					this.setState({
						detailData: json.data,
					});
				});
			})
			.catch(() => {
				this.setState({
					error: true,
				});
			});
	}
	onDeleteMovie = (event) => {
		const id = this.props.match.params.id;
		const url = `http://localhost:8000/items/${id}`;
		axios
			.delete(url, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `JWT ${localStorage.getItem('token')}`,
				},
			})
			.then((res) => {
				this.setState({
					deleted: true,
				});
			})
			.catch(console.error);
	};

	render() {
		if (this.state.deleted) {
			return <Redirect to='/' />;
		}
		if (this.state.error) {
			return <div>Sorry, there was a problem getting the item</div>;
		}
		if (!this.state.infoData || !this.state.detailData) {
			return <div>Loading...</div>;
		}
		const logged_in_permissions = (
			<div>
				<button onClick={this.onDeleteMovie}>Delete Item</button>
				<button>
					<Link to={`/item/${this.props.match.params.id}/edit`}>
						Update Item
					</Link>
				</button>
			</div>
		);

		return (
			<div>
				<div>{this.props.logged_in ? logged_in_permissions : null}</div>
				<h3>{this.state.infoData.name}</h3>
				<h4>${this.state.infoData.price}</h4>
				<p>{this.state.infoData.description}</p>
				<img src={this.state.infoData.item_photo} />
				<div>
					<h2>{this.state.detailData.measurements}</h2>
					<h2>{this.state.detailData.brand}</h2>
					<h2>{this.state.detailData.styles}</h2>
					<h2>{this.state.detailData.materials}</h2>
				</div>
			</div>
		);
	}
}
export default ItemDetails;

ItemDetails.propTypes = {
	logged_in: PropTypes.bool.isRequired,
};

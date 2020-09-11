import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class ItemInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			infoData: {},
			detailData: {},
			deleted: false,
			error: false,
		};
	}
	async componentDidMount() {
		const id = this.props.match.params.id;
		await axios(`https://new-dolphin-backend.herokuapp.com/items/${id}`)
			.then((json) => {
				this.setState({
					infoData: json.data,
				});

				axios(
					`https://new-dolphin-backend.herokuapp.com/details/${this.state.infoData.details}`
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
		const url = `https://new-dolphin-backend.herokuapp.com/items/${id}`;
		axios
			.delete(url)
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
		return (
			<div>
				<button onClick={this.onDeleteMovie}>Delete Item</button>
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
export default ItemInfo;

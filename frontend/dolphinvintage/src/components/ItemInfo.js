import React, { Component } from 'react';
import axios from 'axios';
import ItemDetails from './ItemDetails';

class ItemInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			infoData: {},
			detailData: {},
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

			.catch(console.error);
	}

	render() {
		return (
			<div>
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

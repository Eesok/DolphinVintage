import React, { Component } from 'react';
import axios from 'axios';

class ItemDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {
			detailData: [],
		};
	}
	componentDidMount() {
		const id = this.props.match.params.id;
		axios(`https://new-dolphin-backend.herokuapp.com/items/${id}`)
			.then((json) => {
				this.setState({
					detailData: json.data,
				});
			})
			.catch(console.error);
	}

	render() {
		return (
			<div>
				<h3>{this.state.detailData.name}</h3>
				<h4>${this.state.detailData.price}</h4>
				<p>{this.state.detailData.description}</p>
				<img src={this.state.detailData.item_photo} />
			</div>
		);
	}
}
export default ItemDetails;

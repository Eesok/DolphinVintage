import React, { Component } from 'react';
import axios from 'axios';

class ItemDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {
			itemDetails: [],
		};
	}
	componentDidMount() {
		const detailId = this.props.infoData;
		console.log(detailId);
		axios(`https://new-dolphin-backend.herokuapp.com/details/`)
			.then((json) => {
				this.setState({
					itemDetails: json.data,
				});
			})
			.catch(console.error);
	}

	render() {
		
		return <div></div>;
	}
}

export default ItemDetails;

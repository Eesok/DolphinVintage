import React, { Component } from 'react';
import Item from './Item';
import axios from 'axios';

class ItemsList extends Component {
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
		axios('http://localhost:8000/items/')
			.then((json) => {
				this.setState({
					itemData: json.data,
				});
				console.log(this.state.itemData[0].name);
			})
			.catch(console.error);
	}
	render() {
		const renderItem = this.state.itemData
			.filter(
				(item) =>
					this.state.searchValue === '' ||
					item.name.toLowerCase().includes(this.state.searchValue.toLowerCase())
			)
			.map((item) => <Item key={item.id} item={item} />);
		return <div className='item-list'>{renderItem}</div>;
	}
}

export default ItemsList;

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import ItemForm from './ItemForm';

class ItemEdit extends Component {
	constructor(props) {
		super(props);
		this.state = {
			itemData: {
				name: '',
				price: '',
				description: '',
				item_photo: '',
				category: '',
			},
			categoryValue: '',
			updated: false,
			error: false,
		};
		this.handleChange = this.handleChange.bind(this);
		this.options = [
			{ value: 'chair', label: 'Chair' },
			{ value: 'table', label: 'Chair' },
			{ value: 'chair', label: 'Chair' },
		];
	}

	componentDidMount() {
		const id = this.props.match.params.id;
		axios(`https://new-dolphin-backend.herokuapp.com/items/${id}`)
			.then((json) => {
				this.setState({
					itemData: json.data,
					categoryValue: this.state.itemData.category,
				});
			})
			.catch(() => {
				this.setState({
					error: true,
				});
			});
	}
	handleChange = (event, selectedOption) => {
		event.persist();
		this.setState({
			itemData: {
				...this.state.itemData,
				[event.target.name]: event.target.value,
			},
			categoryValue: selectedOption.target.value,
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		const id = this.props.match.params.id;
		axios
			.put(`https://new-dolphin-backend.herokuapp.com/items/${id}`)
			.then((json) => {
				this.setState({
					updated: true,
				});
			})
			.catch(() => {
				this.setState({
					error: true,
				});
			});
	};

	render() {
		if (this.state.error) {
			return <div>Sorry, there seems to be a problem.</div>;
		}

		if (this.state.updated) {
			return <Redirect to={`/item/${this.props.match.params.id}`} />;
		}
		return (
			<div>
				<h3>Update an item</h3>
				<ItemForm
					options={this.options}
					categoryValue={this.categoryValue}
					itemData={this.state.itemData}
					handleChange={this.handleChange}
					handleSubmit={this.handleSubmit}
				/>
			</div>
		);
	}
}

export default ItemEdit;

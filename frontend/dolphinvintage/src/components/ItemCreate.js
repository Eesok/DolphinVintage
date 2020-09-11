import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class ItemCreate extends Component {
	constructor(props) {
		super(props);
		this.state = {
			itemData: {
				details: [],
			},
			error: false,
			createdId: null,
		};
	}

	handleChange = (event) => {
		event.persist();
		this.setState({
			itemData: {
				...this.state.itemData,
				[event.target.name]: event.target.value,
			},
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		axios
			.post(
				'https://new-dolphin-backend.herokuapp.com/items/',
				this.state.itemData
			)
			.then((json) => {
				console.log(json);
				this.setState({
					createdId: this.state.itemData.id,
				});
			})
			.catch(() => {
				this.setState({ error: true });
			});
	};

	render() {
		const { createdId } = this.state;
		if (createdId) {
			return <Redirect to={`/items/${createdId}`} />;
		}
		return (
			<div>
				<h2>Create an Item</h2>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor='name'>Name</label>
					<input
						placeholder='Item Name'
						name='name'
						onChange={this.handleChange}
						required
						id='name'
					/>
					<label htmlFor='price'>Price</label>
					<input
						placeholder='Price'
						name='price'
						required
						onChange={this.handleChange}
						id='price'
					/>
					<label htmlFor='description'>Description</label>
					<input
						placeholder='Description'
						name='description'
						required
						onChange={this.handleChange}
						id='description'
					/>
					<label htmlFor='item_photo'>Photo</label>
					<input
						placeholder='Photo'
						name='item_photo'
						required
						onChange={this.handleChange}
						id='item_photo'
					/>
					<label htmlFor='category'>Category</label>
					<select name='category' id='category' onChange={this.handleChange}>
						<option value='Chairs'>Chairs</option>
						<option value='Tables'>Tables</option>
						<option value='Sofas'>Sofas</option>
					</select>
					<button type='submit'>Submit</button>
				</form>
			</div>
		);
	}
}

export default ItemCreate;

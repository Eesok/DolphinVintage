import React from 'react';

const ItemForm = ({ itemData, category, handleSubmit, handleChange }) => (
	<form onSubmit={handleSubmit}>
		<label htmlFor='name'>Name</label>
		<input
			type='text'
			placeholder='Item Name'
			value={itemData.name}
			name='name'
			onChange={handleChange}
			required
			id='name'
		/>

		<label htmlFor='price'>Price</label>
		<input
			type='text'
			placeholder='Price'
			value={itemData.price}
			name='price'
			onChange={handleChange}
			id='price'
		/>
		<label htmlFor='description'>Description</label>
		<input
			type='text'
			placeholder='Description'
			value={itemData.description}
			name='description'
			onChange={handleChange}
			id='description'
		/>
		<label htmlFor='item_photo'>Photo</label>
		<input
			type='text'
			placeholder='Photo'
			value={itemData.item_photo}
			name='item_photo'
			onChange={handleChange}
			id='item_photo'
		/>
		<label htmlFor='category'>Category</label>
		<select
			name='category'
			id='category'
			placeholder='category'
			onChange={handleChange}>
			<option selected={category === 'Chairs' ? true : false} value='Chairs'>
				Chairs
			</option>
			<option selected={category === 'Tables' ? true : false} value='Tables'>
				Tables
			</option>
			<option selected={category === 'Sofas' ? true : false} value='Sofas'>
				Sofas
			</option>
		</select>
		<button type='submit'>Submit</button>
	</form>
);

export default ItemForm;

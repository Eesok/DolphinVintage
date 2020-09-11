import React from 'react';

const ItemForm = ({
	itemData,
	categoryValue,
	options,
	handleSubmit,
	handleChange,
}) => (
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
			onChange={handleChange}
			options={options}
			value={options.filter(({ value }) => value === categoryValue)}>
			<option value='chairs'>Chairs</option>
			<option value='tables'>Tables</option>
			<option value='sofas'>Sofas</option>
		</select>
	</form>
);

export default ItemForm;

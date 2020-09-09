import React, { Component } from 'react';
import Item from './Item';

class ItemsList extends Component {
	render() {
		const renderItem = this.props.itemData
			.filter(
				(item) =>
					this.props.searchValue === '' ||
					item.name.toLowerCase().includes(this.props.searchValue.toLowerCase())
			)
			.map((item) => <Item key={item.id} item={item} />);
		return <div className='item-list'>{renderItem}</div>;
	}
}

export default ItemsList;

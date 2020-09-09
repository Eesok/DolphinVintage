import React, { Component } from 'react';
import Item from './Item';

class ItemsList extends Component {
	render() {
		const renderItem = this.props.itemData.map((item) => (
			<Item key={item.id} item={item} />
		));
		return <div className='item-list'>{renderItem}</div>;
	}
}

export default ItemsList;

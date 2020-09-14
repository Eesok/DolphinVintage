import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			categoryData: [],
		};
	}

	componentDidMount() {
		axios('http://localhost:8000/categories/')
			.then((json) => {
				this.setState({
					categoryData: json.data,
				});
			})
			.catch(console.error);
	}

	render() {
		const renderCategory = this.state.itemData.map((category) => (
			<Category key={category.id} category={category} />
		));
		return <div className='category-list'>{renderCategory}</div>;
	}
}

export default Home;

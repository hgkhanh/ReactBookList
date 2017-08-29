import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProductList extends Component {
	renderList() {
		return this.props.products.map((product) => {
			return (
				<li key={product.title} className="list-group-item">
					<a href={product.url}>{product.name}</a>
					<div>{product.id}</div>
					<img src={product.image} width="200" hieght="200"/>
				</li>
			)
		});
	}
	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		)
	}
}

function mapStateToProps(state) {
	return {
		products: state.products
	}
}

export default connect(mapStateToProps)(ProductList);
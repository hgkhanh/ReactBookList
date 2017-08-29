import React, { Component } from 'react';
import ProductList from '../containers/product_list';
import BookList from '../containers/book_list';

export default class App extends Component {
  render() {
    return (
    	<div>
      		<ProductList />
      		<BookList />
      	</div>
    );
  }
}

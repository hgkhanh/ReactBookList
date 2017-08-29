import { combineReducers } from 'redux';
import BooksReducer from './books_reducer';
import ProductReducer from './products_reducer';

const rootReducer = combineReducers({
	books: BooksReducer,
	products: ProductReducer
});

export default rootReducer;

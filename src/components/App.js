import React from 'react';
import Menu from './Menu';
import ListVehicles from './ListVehicles';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Config from './Config';
import Incomes from './Incomes';

export default function App() {
	return (
		<div id='App' className='row'>
			<Provider store={store}>
				<Menu />
				<ListVehicles />
				<Config/>
				<Incomes/>
			</Provider>
		</div>
	);
}
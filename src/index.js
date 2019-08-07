import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ClearableInput } from './ClearableInput/ClearableInputComponent';

import './styles.css';

function App() {
	const [term, setTerm] = useState('');

	return (
		<div className="App">
			<h1>Search</h1>
			<ClearableInput
				onChange={handleInput}
				value={term}
				isSearch={true}
				placeholder="Enter search term"
			/>
			<div>Showing results for term "{term}"</div>
			<div>(results placeholder)</div>
		</div>
	);

	function handleInput(evt) {
		setTerm(evt.target.value);
	}
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

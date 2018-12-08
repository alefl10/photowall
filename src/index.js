import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import rootReducer from './redux/reducer';
import App from './Components/App';
import './styles/stylesheet.css';

const store = createStore(rootReducer);

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

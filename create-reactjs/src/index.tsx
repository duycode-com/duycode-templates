import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import "./assets/reset.css";
import App from './App';
import { store } from './app/store.js';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);

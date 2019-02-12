import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import {Provider} from 'react-redux';
import store from './store';

import "./styles.css";

const RootApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<RootApp/>, rootElement);

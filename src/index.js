import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./assets/common/styles.scss";
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import {createStore, applyMiddleware} from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/store/index";
import thunk from "redux-thunk";

let store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter basename="/">
      <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

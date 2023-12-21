import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, compose } from "redux";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { reducer } from './redux';
import thunk from "redux-thunk";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/index.js";

const store = createStore(reducer, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Provider store={store}>
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <App />
    </ChakraProvider>
  </React.StrictMode>
  </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

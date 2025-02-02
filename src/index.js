import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "./Redux/store.js"
import store from "./Redux/store.js"
import { Provider} from "react-redux";

console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store} >
    <App />
    </Provider>
);

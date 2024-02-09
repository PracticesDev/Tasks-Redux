import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';


import './styles.css';
import { TravelApp } from './TravelApp';
import store from './store/Store';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <TravelApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)

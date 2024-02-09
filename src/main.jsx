import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';


import './styles.css';
import { TravelApp } from './TravelApp';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <TravelApp/>
    </BrowserRouter>
  </React.StrictMode>
)

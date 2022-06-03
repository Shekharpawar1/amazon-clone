import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { StateProvider } from './component/StateProvider';
import { intitalState } from './component/reducer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider intitalState={intitalState} reduce={reducer}> <App /></StateProvider>
   
  </React.StrictMode>
);

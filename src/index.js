import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './component/NavBar';
import BmiCal from './page/BmiCal';

ReactDOM.render(
  <React.StrictMode>
    
    <NavBar />

    <BmiCal />
    
  </React.StrictMode>,
  document.getElementById('root')
);
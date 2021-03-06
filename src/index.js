import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import NavBar from './component/NavBar';
import Home from './page/Home';
import BmiCal from './page/BmiCal';
import BmrCal from './page/BmrCal';
import BfpCal from './page/BfpCal';

ReactDOM.render(

  <React.StrictMode>
    
    <HashRouter>

      <NavBar />

      <Switch>

        <Route path="/" component={Home} exact />
        <Route path="/bmi_calculator" component={BmiCal} exact />
        <Route path="/bmr_calculator" component={BmrCal} exact />
        <Route path="/bfp_calculator" component={BfpCal} exact />

      </Switch>

    </HashRouter>

  </React.StrictMode>,
  
  document.getElementById('root')
);
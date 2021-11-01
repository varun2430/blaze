import './App.css';
import { Switch, Route, HashRouter } from "react-router-dom";
import NavBar from './component/NavBar';
import home from './page/home';
import bmi_cal from './page/bmi_cal';

function App() {
  return (

    <HashRouter>

      <div className="App">

        <NavBar />

        <Switch>

          <Route path="/" component={home} exact />
          <Route path="/bmi_calculator" component={bmi_cal} exact />
        </Switch>

      </div>

    </HashRouter>
  );
}

export default App;
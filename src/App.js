import './App.css';
import { Route, Switch, HashRouter } from 'react-router-dom';
import SignUpPage from './Components/SignUpPage/SignUpPage';
import LoginPage from './Components/LoginPage/LoginPage';
import Home from './Components/LandingPage/LandingPage';
import TreeMap from './Components/TreePlantation/TreeMap';
import RouteOps from './Components/RouteOps/RouteOps';
import TreePlantation from './Components/TreePlantation/TreePlantation';
import IssueTracker from './Components/IssueTracker/IssueTracker';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <HashRouter>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={LoginPage}/>
            <Route exact path="/signup" component={SignUpPage}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/tree" component={TreePlantation}/>
            <Route exact path="/tracker" component={IssueTracker}/>
            <Route exact path="/treemap" component={TreeMap}/>
            <Route exact path="/route" component={RouteOps}/>
          </Switch>
      </HashRouter>
      {/* </header> */}
    </div>
  );
}

export default App;
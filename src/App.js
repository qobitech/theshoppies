import React from 'react'
import './components/assets/bootstrap-css/bootstrap.css'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import LandingPage from './components/view/landingpage'
import Page404 from './components/view/page404'
import  { LANDINGPAGE } from './components/utils/url/pageurl'

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>    
          <Switch>
            <Route exact path={ LANDINGPAGE } component={LandingPage} />
            <Route exact path="*" component={ Page404 } />
          </Switch>
    </Router>
  );
}

export default App;

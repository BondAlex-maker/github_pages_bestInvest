import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import browserHistory from './browserHistory';
import './App.css';
import Home from './pages/Home/Home';
import DisposalOfHazardousSlag from "./pages/DisposalOfHazardousSlag";
import Services from "./pages/Services";
import Contacts from "./pages/Contacts";
import SocialResponsibility from "./pages/SocialResponsibility";
import Metals from "./pages/Metals";
import Waste from "./pages/Waste";





const App = () => {

  return (
      <Router history={browserHistory}>
        {

              <Switch>


                <Route exact path='/' component={Home}/>
                <Route exact path='/disposalofhazardousslag' component={DisposalOfHazardousSlag}/>
                <Route exact path='/socialresponsibility' component={SocialResponsibility}/>
                <Route exact path='/metals' component={Metals}/>
                <Route exact path='/waste' component={Waste}/>
                <Route exact path='/contacts' component={Contacts}/>
                <Route exact path='/services' component={Services}/>

              </Switch>}

      </Router>
  );
}


export default App;




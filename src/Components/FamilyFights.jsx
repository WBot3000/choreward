import React from 'react'
import Myfights from './myfights'
import OtherFights from './OtherFights'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';

function FamilyFights() {
  
  return (
    <div>
      <Router>
      <div>
        <div class="grid">
        <Link to='/MyFights'><button className='secondary'>My Fights</button></Link>
        <Link to='/OtherFights'><button className='secondary'>Other Fights</button></Link>
        </div>
        <div>
        <Switch>
        <Route exact path='/MyFights'>
          <Myfights/>
          </Route>
          <Route path='/OtherFights'><OtherFights/></Route>
          </Switch>
          </div>
          
      </div>
      </Router>
    
    </div>
  )
}

export default FamilyFights
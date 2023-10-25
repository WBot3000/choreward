import '@picocss/pico'
import Navbar from './Components/NavBar';
import Foot from './Components/Foot';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import FamilyFights from './Components/FamilyFights';
import Weekly from './Components/Weekly';
import './App.css'

function App() {
  return (
    <Router>
    <div className="container">
      <Navbar/>
      <div>
        <Switch>
          <Route exact path='/'>
          <Weekly/>
          </Route>
          <Route exact path='/FamilyFights'>
          <FamilyFights/>
          </Route>
        </Switch>
      </div>
      <div>
      <Foot/>
      </div>
      
    </div>
    </Router>
  );
}

export default App;
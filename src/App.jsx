import '@picocss/pico'
import Navbar from './Components/NavBar';
import Foot from './Components/Foot';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FamilyFights from './Components/FamilyFights';
import Weekly from './Components/Weekly';
import MyFamilies from './Components/MyFamilies';
import './App.css'

function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <Navbar/>
      <div>
        <Routes>
          <Route exact path='/' element={<Weekly/>} />
          <Route exact path='/FamilyFights/*' element={<FamilyFights/>} />
          <Route exact path='/MyFamilies' element={<MyFamilies/>} />
        </Routes>
      </div>
      <div>
      <Foot/>
      </div>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
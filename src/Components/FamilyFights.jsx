import React from 'react'
import Myfights from './myfights'
import OtherFights from './OtherFights'
import {BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';

function FamilyFights() {
  
  return (
    <div>
        <div className="grid">
            <Link to='/FamilyFights/MyFights'><button className='secondary'>My Fights</button></Link>
            <Link to='/FamilyFights/OtherFights'><button className='secondary'>Other Fights</button></Link>
        </div>
        <div>
            <Routes>
                <Route exact path='/MyFights' element={<Myfights/>} />
                <Route path='/OtherFights' element={<OtherFights/>} />
            </Routes>
        </div>
    </div>
  )
}

export default FamilyFights
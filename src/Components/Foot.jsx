import React from 'react'
import { Link } from 'react-router-dom';
function Foot() { 
  return (
    <div className="grid">
        <Link to="/"><button>Weekly Fights</button></Link>
        <Link to='/FamilyFights'><button>Family Fights</button></Link>
        <Link to="/MyFamilies"><button >My Families</button></Link>
    
    
  </div>
  )
}

export default Foot
import React from 'react'
import Weekly from './Weekly'
import FamilyFightsCard from './FamilyFightsCard'

function Myfights() {
  return (
    <div>
        <h6>Challenge Family</h6>
    <progress value="25" max="100"></progress>
    <button className='contrast'>Send Challenge</button>
    <FamilyFightsCard/>
    </div>
  )
}

export default Myfights
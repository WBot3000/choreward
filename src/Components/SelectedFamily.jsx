// import React from 'react'

import { useState } from 'react'
import { Listbox } from '@headlessui/react'

const family = [
  { id: 1, name: 'Fam 1', unavailable: false },
  { id: 2, name: 'Fam 2', unavailable: false },
  { id: 3, name: 'Fam 3', unavailable: false },
  { id: 4, name: 'Fam 4', unavailable: false },
  { id: 5, name: 'Fam 5', unavailable: false },
]


function SelectedFamily() {
    const [selectedFamily, setSelectedFamily] = useState(family[0])
  return (
    <div>
    <h4>Selected Family</h4>
    <div class="grid">
    <div>


    <details role="list" value={selectedFamily} onChange={setSelectedFamily}>
    <summary aria-haspopup="listbox" role="button" class="secondary">
    {selectedFamily.name}
    </summary>
    <ul role="listbox">
        {family.map((fam)=>(
            <li key={fam.id}
            value={fam}
            disabled={fam.unavailable}>
                <a>{fam.name}</a>
            </li>
        ))}
    </ul>
    </details>

     {/* <details role="list">
    <summary aria-haspopup="listbox" role="button" class="secondary">
        Family 1
    </summary>
    <ul role="listbox">
        <li><a>Family 1</a></li>
        <li><a>Family 2</a></li>
        <li><a>Family 3</a></li>
    </ul>
    </details> */}

    </div>
    <div>
    <a href="#" role="button">Create New Family</a>
    </div>
    </div>
    </div>
  )
}

export default SelectedFamily

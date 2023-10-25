import React from 'react'

function FamilyFightsCard() {
    const items = [
        {
          id: 1,
          text: 'Family Fight 1 VS Family Fight 2',
        //   trashIcon: <FaClock />,
          viewButton: <button>View Video</button>,
        },
        {
          id: 2,
          text: 'Family Fight 1 VS Family Fight 2',
        //   trashIcon:     <FaClock />,
          viewButton: <button>View Video</button>,
        },
  ];
  return (
    <div>
    {items.map((item) => (
    <article key={item.id}>
    {/* {item.trashIcon} */}
    <header>{item.text}</header>
    <body>
      <div className="grid">
        <div></div>
        <p>00:00:0000</p>
        <button role="button">View</button>
        <div></div>
      </div>
    </body>
  </article>
    ))}
    </div>
  )
}

export default FamilyFightsCard

import React from 'react'

function MyFamilies() {
    const items = [
        {
          id: 1,
          text: 'Ice Cream',
          points:'500',
        //   trashIcon: <FaClock />,
          viewButton: <button>Redeem</button>,
        },
        {
          id: 2,
          text: 'New Video Game',
          points:'2000',
        //   trashIcon:     <FaClock />,
          viewButton: <button>Redeem</button>,
        },
        {
            id: 3,
            text: 'New Shoes',
            points:'2500',
          //   trashIcon:     <FaClock />,
            viewButton: <button>Redeem</button>,
          }
  ];

  return (
    <div>
        <h4>Rewards</h4>
        <table>
        {items.map((item) => (
            <thead>
                <tr>
                    <th scope='col'>{item.text}</th>
                    <th scope='col'>({item.points})</th>
                    <th scope="col">{item.viewButton}</th>
                </tr>
            </thead>
        
        ))}
        </table>
    </div>
  )
}

export default MyFamilies

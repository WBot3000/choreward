import React from "react";

const Weekly=()=>{
    const items = [
          {
            id: 1,
            text: 'Take Out the Trash',
            // trashIcon: <FaTrash />,
            viewButton: <button>View Video</button>,
            deleteButton: <button>Post Video</button>,
          },
          {
            id: 2,
            text: 'Make The Bed',
            // trashIcon:     <FaBed />,
            viewButton: <button>View Video</button>,
            deleteButton: <button>Post Video</button>,
          },
    ];

    return (
        <div>
        {items.map((item) => (
        <article key={item.id}>
        <header>{item.text}</header>
        <body className="grid">
          <button>View</button>
          <button>Delete</button>
        </body>
      </article>
        ))}
        </div>
    )
}

export default Weekly
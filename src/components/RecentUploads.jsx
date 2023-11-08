import React from 'react'

function RecentUploads() {
  return (
    <div>
    <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">Recent Family Uploads</h2>
      <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
    <li className="mr-2">
        <a href="#" className="inline-block px-20 py-10 text-white bg-blue-600 rounded-lg active" aria-current="page">Upload 1</a>
    </li>
    <li className="mr-2">
        <a href="#"  className="inline-block px-20 py-10 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">Upload 2</a>
    </li>
    <li className="mr-2">
        <a href="#" className="inline-block px-20 py-10 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">Upload 3</a>
    </li>
    <li className="mr-2">
        <a href="#" className="inline-block px-20 py-10 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">Upload 4</a>
    </li>
    <li>
        <a className="inline-block px-20 py-10 text-gray-400 cursor-not-allowed dark:text-gray-500">Upload 5</a>
    </li>
</ul>
    </div>
  )
}

export default RecentUploads

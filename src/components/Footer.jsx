import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Footer = () => {
  return (

<footer className=" bg-white shadow dark:bg-gray-800">
    <div className="w-full mx-auto container md:p-6 p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to="/" className="hover:underline">MovieFlow</Link>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <NavLink to="#" className="mr-4 hover:underline md:mr-6 ">About</NavLink>
        </li>
        <li>
            <NavLink to="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</NavLink>
        </li>
        <li>
            <NavLink to="#" className="mr-4 hover:underline md:mr-6">Licensing</NavLink>
        </li>
        <li>
            <NavLink to="#" className="hover:underline">Contact</NavLink>
        </li>
    </ul>
    </div>
</footer>

  )
}

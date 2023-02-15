import {useState} from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import {closing, mymenu} from '../assets'
import { YearLinks } from '../constants'



const Navbar = () => {
  const [toggle, settoggle] = useState(false);

  return (

    
    <div className="root-layout">


      <nav className='w-full bg-white py-[1rem] navbar'>
      
        <ul className='list-none sm:flex hidden justify-center items-center'>
          {YearLinks.map((nav, index) => (
            <li
              key={nav.id}
              className = {`font-montserrat text-[#838383] hover:text-[#ed2939]  duration-700 cursor-pointer font-medium text-[.85rem] mx-6 `}>
              <NavLink to ={`${nav.path}`}>
                {nav.title}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center px-4 '>
          <img src={toggle ? closing : mymenu} alt="menu-icon" className='w-[28px] h-[28px] object-contain'
          onClick={() => settoggle((prev) => !prev)} />
          <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-white absolute justify-center top-10 right-0 my-2 w-full h-screen sidebar `}>
          <ul className='list-none flex flex-col  justify-center items-center '>
          {YearLinks.map((nav, index) => (
            <li
              key={nav.id}
              className = {`font-montserrat text-[#838383] cursor-pointer font-bold text-[1.5rem] my-6`}>
              <NavLink to ={`${nav.path}`}>
                {nav.title}
              </NavLink>
            </li>
          ))}
        </ul>
          </div>
        </div>

      </nav>

      <main>
        <Outlet />
      </main>

    </div>
  )
}

export default Navbar
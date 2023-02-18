import { NavLink, Outlet } from 'react-router-dom'
import { Y1Semesters} from '../constants'



const Navbar = () => {

  return (

    
    <div className="year_layout">


      <nav className='w-full bg-[#0a0a23] py-[1rem] navbar'>
      
        <ul className='list-none sm:flex sm:text-center justify-center items-center'>
          {Y1Semesters.map((nav) => (
            <li
              key={nav.id}
              className = {`font-montserrat text-[#838383] hover:text-[#ffffff] font-bold duration-700 cursor-pointer my-5 md:my-1 text-[.85rem] mx-6 `}>
              <NavLink to ={`${nav.path}`}>
                {nav.title}
              </NavLink>
            </li>
          ))}
        </ul>

      </nav>

      <main>
        <Outlet />
      </main>

    </div>
  )
}

export default Navbar
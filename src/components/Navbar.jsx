import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { closing, mymenu } from "../assets";
import { navLinks } from "../constants";
import { logout } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Dropdown } from ".";

const Navbar = () => {
  const [toggle, settoggle] = useState(false);
  const [user, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) navigate("/login");
  }, [user]);

  return (
    <div className="root-layout ">
      <nav className="w-full  bg-[#002ead] py-[0.8rem] navbar fixed z-40">
        <ul className="list-none sm:flex hidden justify-center items-center">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-montserrat  text-[#edf2f4] hover:text-[#0a0a23]  duration-700 cursor-pointer font-bold text-[.76rem] py-1 mx-6 `}
            >
              <NavLink to={`${nav.path}`}>{nav.title}</NavLink>
            </li>
          ))}
          
          <div className="fixed right-6">< Dropdown/></div>
        </ul>

        {/* For Mobile devices */}
        
        <div className="sm:hidden flex flex-1 justify-end items-center px-4 ">
          <img
            src={toggle ? closing : mymenu}
            alt="menu-icon"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => settoggle((prev) => !prev)}
          />
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-white absolute justify-center top-10 right-0 my-2 w-full h-screen sidebar `}
          >
            <ul className="list-none flex flex-col  justify-center items-center ">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  src={toggle ? closing : mymenu}
                  onClick={() => settoggle((prev) => !prev)}
                  className={` ${
                    toggle ? "flex" : "hidden"
                  } font-montserrat duration-700 text-[#838383] cursor-pointer font-bold text-[1.5rem] my-6`}
                >
                  <NavLink to={`${nav.path}`}>{nav.title}</NavLink>
                </li>
              ))}
              {user ? (
            <li
              className={`font-montserrat  text-[#838383]  duration-700 cursor-pointer font-bold text-[1.5rem] py-4 mx-6 mb-14 `}
              onClick={logout}
            >
              LOG OUT
            </li>
          ) : null}
            </ul>
          </div>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Navbar;

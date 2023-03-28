import React from 'react'
import { footerNavLinks } from '../constants'
import { NavLink } from 'react-router-dom'
import { socialMedia } from '../constants'
import { footerLinks } from '../constants'
import {drunkenwizard_dark} from '../assets'

const Footer = () => (

  <footer className="font-montserrat text-[#838383]">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <img src={drunkenwizard_dark} alt="site-logo" className='w-[12rem] h-[12rem] cursor-pointer object-contain  ' />
      </a>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">

      <div className="lg:w-1/3 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium tracking-widest text-white text-[1rem] mb-4">SITE LINKS</h2>
        <nav className="list-none mb-10">
        <ul className='text-white '>

            {footerNavLinks.map((nav, index) => (
              <li 
                key={nav.id}
                className = {`pb-[1.6rem] `}
                >

                <a href={`#${nav.id}`} 
                className = {` cursor-pointer  hover:text-[#ed2939] duration-700 text-[.8rem] `}>
                  {nav.title}
                </a>

              </li>
            ))}

        </ul>
        </nav>
      </div>

      <div className="lg:w-1/3 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium tracking-widest text-white text-[1rem] mb-4">OUR SITES</h2>
        <nav className="list-none mb-10">
        <ul className='text-white'>

            {footerLinks.map((nav, index) => (
              <li 
                key={nav.id}
                className = {` pb-[1.6rem] `}>

                <a href={`${nav.link}`}
                target="_blank"
                className = {` cursor-pointer  hover:text-[#ed2939] duration-700 text-[.8rem] `}>
                  {nav.name}
                </a>

              </li>
            ))}
            

        </ul>
        </nav>
      </div>

      <div className="lg:w-1/3 md:w-1/2 text-white w-full  px-4">
      <h2 className="title-font font-medium tracking-widest  text-[1rem] mb-4">OUR SOCIALS</h2>
        <nav className="list-none mb-10">
        <ul className='social'>

            {socialMedia.map((nav, index) => (

              <li className=''>
                  <a href={nav.href} target="_blank" className = {` cursor-pointer`}>
                  <img
                    src={nav.icon}
                    className="pb-5"
                  />
                  </a>

              </li>

            ))}

        </ul>
        </nav>
      </div>

    </div>
  </div>

  <div className="bg-gray-100">
    <div className="container mx-auto py-4 px-5 text-center">
      <p className="text-gray-500 text-sm">© 2023 Campus Kuppiya —
        <a href="https://www.linkedin.com/in/d-p-patabandi/" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@DrunkenWizards</a>
      </p>
      <p className="text-gray-500  pt-2 text-[0.6rem]">A PRODUCT OF DUMINDU PATABANDI</p>
        
    </div>
  </div>
</footer>

)

export default Footer
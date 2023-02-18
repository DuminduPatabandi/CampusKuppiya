import React from 'react'
import { navLinks } from '../constants'
import { socialMedia } from '../constants'
import { footerLinks } from '../constants'
import {drunkenwizard_dark} from '../assets'

const FooterLarge = () => (

  <footer class="font-montserrat text-[#838383]">
  <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <img src={drunkenwizard_dark} alt="site-logo" className='w-[12rem] h-[12rem] cursor-pointer object-contain  ' />
      </a>
    </div>
    <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">

      <div class="lg:w-1/3 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium tracking-widest text-white text-[1rem] mb-4">SITE LINKS</h2>
        <nav class="list-none mb-10">
        <ul className='text-white '>

            {navLinks.map((nav, index) => (
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

      <div class="lg:w-1/3 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium tracking-widest text-white text-[1rem] mb-4">OUR SITES</h2>
        <nav class="list-none mb-10">
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

      <div class="lg:w-1/3 md:w-1/2 text-white w-full px-4">
      <h2 class="title-font font-medium tracking-widest  text-[1rem] mb-4">OUR SOCIALS</h2>
        <nav class="list-none mb-10">
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

  <div class="bg-gray-100">
    <div class="container mx-auto py-4 px-5 text-center">
      <p class="text-gray-500 text-sm">© 2023 Drunkenwizards —
        <a href="https://www.linkedin.com/in/d-p-patabandi/" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank">@Wizards</a>
      </p>
      <p class="text-gray-500  pt-2 text-[0.6rem]">A PRODUCT OF DUMINDU PATBANDI</p>
        
    </div>
  </div>
</footer>

)

export default FooterLarge
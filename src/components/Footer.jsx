import styles from '../style'
import {socialMedia} from '../constants'
import {drunkenwizard_dark} from '../assets'

const Footer = () => {

return (    

  <div className="hehe">

      <footer class="font-montserrat text-[#838383]">
      <div class="container px-5 py-24 mx-auto flex md:flex-row">
        <div class="flex text-center">          
          <div class="w-full px-4">
          <h2 class="font-medium text-[1rem] mb-4">OUR SITES</h2>
            <nav class="list-none mb-10">
            <ul className='social'>
                {socialMedia.map((nav) => (
                  <li className=''>
                      <a key={nav.id} href={nav.href}>
                      <img
                        src={nav.icon}
                        className = {`cursor-pointer hover:text-[#ed2939] duration-700 text-black pb-5 `}
                      />
                      </a>
                  </li>
                ))}
            </ul>
            </nav>
          </div>
        </div>

      </div>



      </footer>


  </div>

)
}
export default Footer
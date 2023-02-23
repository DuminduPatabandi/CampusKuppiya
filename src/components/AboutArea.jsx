import styles from '../style'
import { kuppilogodark} from '../assets'

const LogoArea = () => {
  return (
    <section id='home' className={` ${styles.paddingY} my-0 sm:my-4 `}>
    <div className='flex flex-col  justify-center items-center '>
      <img src={kuppilogodark} alt="site-logo" className='w-[8rem] h-[8rem] object-contain mt-8  sm:mt-10 ' />
      <h3 className='font-eb pt-12 font-medium	text-[1.2rem] text-[#002ead]'>About Us</h3>
      <p className=' font-eb w-3/4  text-[#939393] text-[1.6rem] text-center pt-5'>Campus Kuppiya is designed for undergraduates who are seeking to expand their knowlage 
        as well as those who need study references for their course codes. Through this site 
        you can study well designed short notes, study references, kuppi videos and download
        them.
      </p>
      <p className=' font-eb w-3/4  text-[#939393] text-[1.6rem] text-center pt-14'>
      We are <a class="text-[#002ead] font-medium after:content-['_↗'] ..." href="https://drunked.netlify.app" target="_blank">Drunken Wizards</a> , a software company who are eager to develop and design
      any custom made applications for you. Visit our official site for more information.
      </p>
    </div>
  </section>
  )
}

export default LogoArea
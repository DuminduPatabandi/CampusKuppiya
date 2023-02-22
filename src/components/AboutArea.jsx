import styles from '../style'
import { kuppilogodark} from '../assets'

const LogoArea = () => {
  return (
    <section id='home' className={` ${styles.paddingY} my-0 sm:my-4 `}>
    <div className='flex flex-col  justify-center items-center '>
      <img src={kuppilogodark} alt="site-logo" className='w-[8rem] h-[8rem] object-contain mt-8  sm:mt-10 ' />
    </div>
  </section>
  )
}

export default LogoArea
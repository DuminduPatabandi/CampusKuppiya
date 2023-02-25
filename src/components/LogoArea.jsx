import styles from '../style'
import { kuppilogo} from '../assets'

const LogoArea = () => {
  return (
    <section id='home' className={` ${styles.paddingY} my-0 sm:my-4 `}>
    <div className='flex flex-col  justify-center items-center '>
      <img src={kuppilogo} alt="site-logo" className='w-[8rem] h-[8rem] logo object-contain mt-32  sm:mt-10 ' />
    </div>

  </section>
  )
}

export default LogoArea
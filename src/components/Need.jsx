import styles from '../style'
import { kuppilogo} from '../assets'

const Need = () => {
  return (
    <section id='home' className={` ${styles.paddingY} my-0 sm:my-4 `}>
    <div className='flex flex-col  justify-center items-center '>
    <p className=' font-poppins md:mt-16 font-bold w-1/2  text-[#ffffff] text-[2.8rem] text-center pt-14'>
      Hay there Padawan! </p>
      <p className='font-poppins md:mt-16 font-bold w-1/2  text-[#ffffff] text-[1.2rem] text-center'>You <span className='text-[#e72a4f] text-[1.9rem]'>need</span> an account to see the content.</p>
    </div>

  </section>
  )
}

export default Need
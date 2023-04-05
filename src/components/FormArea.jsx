import styles from '../style'
import { kuppilogo } from '../assets'
import { formElements } from '../constants'

const FormArea = () => {
  return (
    <section id='home' className={` ${styles.paddingY} my-0 sm:my-4 `}>
    <div className='flex flex-col  justify-center items-center '>
      <img src={kuppilogo} alt="site-logo" className='w-[6rem] h-[6rem] object-contain mt-4  sm:mt-10 ' />
      <p className=' font-poppins md:mt-16 font-bold w-1/2  text-[#ffffff] text-[2.8rem] text-center pt-14'>
      Let's talk! </p>
      <p className=' md:mb-44 text-[#cacaca] text-[0.8rem]'>Feel free to contact us.</p>
    </div>
   

{/* Form */}

<div className="flex items-center justify-center p-12">

  <div className="mx-auto w-full max-w-[550px]">
    <form action="https://formbold.com/s/FORM_ID" method="POST">
      <div className="mb-5">
      {formElements.map((product) => (
        <div className=''>
        <label
          for={product.for}
          className="mb-3 block text-base font-montserrat  text-[#ffffff]">
          {product.title}
        </label>
        <input
          type={product.type}
          name={product.name}
          id={product.id}
          placeholder={product.placeholder}
          className="w-full outline outline-[#e0e0e0] bg-[#e0e0e0] font-eb py-3 px-6 text-base font-medium text-[#6B7280] outline-offset-0 outline-none focus:outline-[#819be1] focus:shadow-md mb-8 focus:outline-4"/>
          </div>
        ))}
      </div>

      <div className="mb-5">
        <label
          for="message"
          className="mb-3 block text-base font-montserrat  text-[#ffffff]"
        >
          Message
        </label>
        <textarea
          rows="4"
          name="message"
          id="message"
          placeholder="Type what you need to say to us!"
          className="w-full outline outlinr-[#e0e0e0] bg-[#e0e0e0] font-eb py-3 px-6 text-base font-medium text-[#6B7280] outline-offset-0 outline-none focus:outline-[#819be1] focus:shadow-md mb-8 focus:outline-4"></textarea>
      </div> 
      <div className='text-center'>
        <button
          className="hover:shadow-form bg-[#002ead] hover:bg-[#0a0a23] hover:px-16 hover:text-[#002ead] duration-700 py-3 px-10 mt-8 font-montserrat font-bold text-white outline-none"
        >
          SEND
        </button>
      </div>
    </form>
  </div>
</div>
  </section>
  )
}

export default FormArea
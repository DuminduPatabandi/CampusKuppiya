import styles from '../style'
import { kuppilogo } from '../assets'
import { formElements } from '../constants'

const FormArea = () => {
  return (
    <section id='home' className={` ${styles.paddingY} my-0 sm:my-4 `}>
    <div className='flex flex-col  justify-center items-center '>
      <img src={kuppilogo} alt="site-logo" className='w-[6rem] h-[6rem] object-contain mt-4  sm:mt-10 ' />
      <p className=' font-eb w-1/2  text-[#ffffff] text-[1.6rem] text-center pt-14'>
      Hay Education seekers! Feel free to contact us for anything at all. We are here for you!
      </p>
    </div>
   

{/* Form */}

<div class="flex items-center justify-center p-12">

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
          className="w-full  border border-[#e0e0e0] bg-white font-eb py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#819be1] focus:shadow-md mb-8 focus:border-4"/>
          </div>
        ))}
      </div>

      <div class="mb-5">
        <label
          for="message"
          class="mb-3 block text-base font-montserrat  text-[#ffffff]"
        >
          Message
        </label>
        <textarea
          rows="4"
          name="message"
          id="message"
          placeholder="Type what you need to say to us!"
          class="w-full border border-[#e0e0e0] bg-white font-eb py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#819be1] focus:shadow-md focus:border-4"></textarea>
      </div> 
      <div className='text-center'>
        <button
          class="hover:shadow-form bg-[#002ead] hover:bg-white hover:text-[#002ead] duration-700 py-3 px-10 mt-8 font-montserrat font-medium text-white outline-none"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</div>
  </section>
  )
}

export default FormArea
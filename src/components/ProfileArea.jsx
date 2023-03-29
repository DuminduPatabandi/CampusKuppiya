import { me } from '../assets'

export default function Example() {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl px-4  lg:px-5">
        <div className="mx-auto  py-16 md:py-24 lg:max-w-none lg:py-32">

          <div className=" pt-4 space-y-12 sm:flex sm:gap-x-20 sm:space-y-0 ">
            <div className="infotab  bg-white sm:w-[25rem]  border border-[#dfdfe1] ">
              <div className="flex justify-center">
                <img className="object-cover mt-8 w-36 h-36  rounded-full" src={me} alt="Profile picture"/>
              </div>
              <h1 className='text-center font-montserrat  text-[1.25rem] pt-6 font-semibold'>Dumindu Patabandi</h1>
              <p className='text-center font-montserrat  text-[.85rem] pt-1 '>drunkenwizards@gmail.com</p>
              <hr className='my-7 '/>
            </div>
            <div className="infotab bg-white sm:w-[48rem]  border border-[#dfdfe1]">
              <>
                ppp
              </>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

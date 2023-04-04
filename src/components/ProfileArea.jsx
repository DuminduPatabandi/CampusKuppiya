import { me } from '../assets'
import { BuildingLibraryIcon, PhotoIcon, UserCircleIcon, UserIcon } from '@heroicons/react/24/solid'

export default function Example() {
  return (
    <div className="">
      <div className="mx-auto max-w-max px-4  sm:px-5">
        <div className="mx-auto  py-16 md:py-24 lg:max-w-none lg:py-32">

          <div className=" pt-4 space-y-12 sm:flex sm:gap-x-20 sm:space-y-0 ">
            <div className="infotab  bg-white sm:w-[36rem] lg:w-[25rem] sm:px-4 border border-[#dfdfe1] ">
              <div className="grid place-items-center">
                <img className="object-cover mt-8 w-36 h-36  rounded-full" src={me} alt="Profile picture"/>
                <h1 className='text-center font-montserrat  text-[1.25rem] pt-6 font-semibold'>Dumindu Patabandi</h1>
                <p className='text-center font-montserrat  text-[.85rem]  text-[#939393] pt-1 '>drunkenwizards@gmail.com</p>
                <p className='text-center font-montserrat font-medium text-[.80rem]  text-[#2ec4b6] pt-4 '>Online</p>
                <hr className='my-7 w-11/12'/>
              </div>
              <div className="grid grid-cols-6 gap-4 px-4">
                <div className="col-span-4 flex">
                  <BuildingLibraryIcon className="h-5 w-5 text-[#62646a]" aria-hidden="true" />
                  <p className='font-medium font-montserrat  ml-3 text-[.85rem] text-[#939393] pt-1 '>From</p>
                </div>
                <p className='font-medium font-montserrat  text-[.85rem]  text-[#939393] pt-1 col-span-2  text-right'>UOK</p>
              </div>
              <div className="grid grid-cols-6 gap-4 py-3 px-4">
                <div className="col-span-4 flex">
                  <UserIcon className="h-5 w-5 text-[#62646a]" aria-hidden="true" />
                  <p className='font-medium font-montserrat  ml-3 text-[.85rem] text-[#939393] pt-1 '>Member since</p>
                </div>
                <p className='font-medium font-montserrat  text-[.85rem]  text-[#939393] pt-1 pb-6 col-span-2  text-right'>Dec 2022</p>
              </div>

            </div>
            <div className="infotab bg-white sm:w-[37rem] lg:w-[48rem]  border border-[#dfdfe1]">
              <>
                ppp
              </>
            </div>
          </div>

          {/* Second part */}
          <div className=" pt-6 space-y-12 sm:flex sm:gap-x-20 sm:space-y-0 ">
            <div className="infotab  bg-white sm:w-[36rem] lg:w-[25rem] sm:px-4 border border-[#dfdfe1] ">
              <div className="px-4">
                <h1 className=' font-montserrat  text-[1rem] pt-8 font-semibold'>Description</h1>
                <p className='font-montserrat  text-[.85rem]  text-[#939393] pt-5 '>I love designing. I create websites, logos, 3d – models, and magazines, giving my clients the utmost delight. To accomplish this, I focus on delivering key outcomes, using the newest technology, and quickly adapting to new learnings. Designing websites and doing 3d models is my favorite thing from all of the above. I love to do them.</p>
                <hr className='my-7 w-11/12'/>
              </div>
              <div className="px-4">
                <h1 className=' font-montserrat  text-[1rem] font-semibold'>Education</h1>
                <p className='font-montserrat  text-[.85rem]  text-[#939393] pt-5 '>B.Sc. - honors in computer science</p>
                <p className='font-montserrat  text-[.85rem]  text-[#939393] pt-5 '>University of Kelaniya, Sri Lanka, Graduated 2023</p>
                <hr className='my-7 w-11/12'/>
              </div>
             

            </div>
            <div className="infotab bg-white sm:w-[37rem] lg:w-[48rem]  border border-[#dfdfe1]">
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

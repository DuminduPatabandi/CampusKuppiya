import { me } from '../../assets'
import { BuildingLibraryIcon, PhotoIcon, UserCircleIcon, UserIcon } from '@heroicons/react/24/solid'
import { certificates, education, skills, profileLinks } from '../../constants'
import { NavLink } from 'react-router-dom'

export default function UserSetting() {
  return (
    <div className="">
      <div className="mx-auto max-w-max sm:px-5">
        <div className="mx-auto  py-12  lg:max-w-none ">

          <div className=" pt-4 sm:gap-x-20  ">
          <h1 className='text-center pb-6 font-montserrat text-white text-[1.25rem] pt-6 font-semibold'>Profile Settings</h1>
            <div className="infotab  bg-white sm:w-[36rem] lg:w-[25rem] sm:px-4 border border-[#dfdfe1] ">
              <div className="grid place-items-center">

                
                <UserCircleIcon className="object-cover text-gray-300 mt-8 w-36 h-36  rounded-full" src={me} alt="Profile picture"/>
                <input
                    type="text"
                    name="username"
                    value=""
                    onChange={(e) => setUserName(e.target.value)}
                    id="username"
                    // autoComplete="username"
                    className="block bg-slate-100  flex-1 border-0  pl-3  py-1.5 text-gray-400 placeholder:text-gray-400 outline-offset-0 outline-none focus:outline-[#819be1] sm:text-sm sm:leading-6"
                    placeholder="Your public user name"
                  />
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

          </div>

          {/* Second part */}
          <div className=" pt-6 space-y-12 sm:flex sm:gap-x-20 sm:space-y-0 ">
            <div className="infotab  bg-white sm:w-[36rem] lg:w-[25rem] sm:px-4 border border-[#dfdfe1] ">

              {/* Description Section */}
              <div className="px-4">
                <h1 className=' font-montserrat  text-[1rem] pt-8 font-semibold'>Description</h1>
                <p className='font-montserrat  text-[.85rem]  text-[#62646A] pt-5 '>I love designing. I create websites, logos, 3d – models, and magazines, giving my clients the utmost delight. To accomplish this, I focus on delivering key outcomes, using the newest technology, and quickly adapting to new learnings. Designing websites and doing 3d models is my favorite thing from all of the above. I love to do them.</p>
                <hr className='my-7 w-11/12'/>
              </div>

              {/* Education Section */}
              <div className="px-4">
                <h1 className=' font-montserrat  text-[1rem] font-semibold'>Education</h1>
                {education.map((education) => (
                  <>
                  <p className='font-montserrat  text-[.85rem]  text-[#555555] pt-5 '>{education.title}</p>
                  <p className='font-montserrat  text-[.85rem]  text-[#B2B2B2] pt-1 '>{education.institution}</p>
                  </>
                ))}
                <hr className='my-7 w-11/12'/>
              </div>

              {/* Certification Section */}
              <div className="px-4">
                <h1 className=' font-montserrat  text-[1rem] font-semibold'>Certification</h1>
                {certificates.map((certificates) => (
                  <>
                  <p className='font-montserrat  text-[.85rem]  text-[#555555] pt-5 '>{certificates.title}</p>
                  <p className='font-montserrat  text-[.85rem]  text-[#B2B2B2] pt-1 '>{certificates.institution}</p>
                  </>
                ))}
                <hr className='my-7 w-11/12'/>
              </div>

              {/* Skills Section */}
              <div className="px-4">
                <h1 className=' font-montserrat text-[1rem] font-semibold'>Skills</h1>
                <div className=" mb-7">
                  {skills.map((skills) => (
                    <p className='font-montserrat border inline-block rounded-full py-2 px-3 mx-1 text-[.75rem]  text-[#555555] mt-5 '>{skills.title}</p>
                  ))}
                </div>
              </div>
             

            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

import { BuildingLibraryIcon, UserIcon } from '@heroicons/react/24/solid'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { PencilSquareIcon } from '@heroicons/react/24/outline'
import newRequest from "../utils/newRequest";
import { MyDocuments, AddNew } from '.'


export default function Example() {


  const navigate = useNavigate();

  const currentUser = JSON.parse(localStorage.getItem("currentUser"))


  return (
    <div className="">
      <div className="mx-auto max-w-max sm:px-5">
        <div className="mx-auto  py-24  lg:max-w-none ">

          <div className=" pt-4  sm:flex sm:gap-x-20  ">
            <div className="infotab  bg-white sm:w-[38rem] lg:w-[25rem] sm:px-4 border border-[#dfdfe1] ">
                <div className="edit text-center grid place-content-end">
                  <PencilSquareIcon className="h-6 w-6 mt-4 mr-4 sm:mr-1 text-slate-200 hover:text-[#002ead] duration-700" aria-hidden="true" />
                </div>
              <div className="grid place-items-center">
                <img className="object-cover w-36 h-36  rounded-full" src={currentUser.img || "noavatar.jpg"} alt="Profile picture"/>
                <h1 className='text-center font-montserrat  text-[1.25rem] pt-6 font-semibold'>{currentUser?.username}</h1>
                <p className='text-center font-montserrat  text-[.85rem]  text-[#939393] pt-1 '>{currentUser?.email}</p>
                <p className='text-center font-montserrat font-medium text-[.80rem]  text-[#2ec4b6] pt-4 '>Online</p>
                <hr className='my-7 w-11/12'/>
              </div>
              <div className="grid grid-cols-6 gap-4 px-4">
                <div className="col-span-3 flex">
                  <BuildingLibraryIcon className="h-5 w-5 text-[#62646a]" aria-hidden="true" />
                  <p className='font-medium font-montserrat  ml-3 text-[.85rem] text-[#939393] pt-1 '>University</p>
                </div>
                <p className='font-medium font-montserrat  text-[.85rem]  text-[#939393] pt-1 col-span-3  text-right'>{currentUser?.university}</p>
              </div>
              <div className="grid grid-cols-6 gap-4 py-3 px-4">
                <div className="col-span-4 flex">
                  <UserIcon className="h-5 w-5 text-[#62646a]" aria-hidden="true" />
                  <p className='font-medium font-montserrat  ml-3 text-[.85rem] text-[#939393] pt-1 '>Member since</p>
                </div>
                <p className='font-medium font-montserrat  text-[.85rem]  text-[#939393] pt-1 pb-6 col-span-2  text-right'>DEC 2022</p>
              </div>

            </div>

            {/* Course contents */}
            {currentUser.isTeacher ? (
            <div className="infotab  sm:w-[37rem] lg:w-[48rem] ">
              
              <div className="adminnav  border bg-white ">
                <ul className="list-none flex justify-center">
                    <span
                      className={`font-montserrat py-5 px-6 hover:bg-[#002ead] text-[#838383] hover:text-white  font-bold duration-700 cursor-pointer text-[.85rem] `}
                    >
                      <NavLink to="mydocuments">My Uploads</NavLink>
                    </span>
                    <span
                      className={`font-montserrat py-5 px-6 hover:bg-[#002ead] text-[#838383] hover:text-white  font-bold duration-700 cursor-pointer text-[.85rem]  `}
                    >
                      <NavLink to="addnew">Add new Courses</NavLink>
                    </span>
                </ul>
              </div>

              <main>
                <Outlet />
              </main>
              
            </div>
            ) : (
              <div className="padawan">

              </div>
            )}

          </div>

          {/* Second part */}
          <div className=" pt-6  sm:flex sm:gap-x-20  ">
            <div className="infotab  bg-white sm:w-[36rem] lg:w-[25rem] sm:px-4 border border-[#dfdfe1] ">

              <div className="edit text-center grid place-content-end">
                  <PencilSquareIcon className="h-6 w-6 mt-4 mr-4 sm:mr-1 text-slate-200 hover:text-[#002ead] duration-700" aria-hidden="true" />
              </div>

              {/* Description Section */}
              <div className="px-4">
                <h1 className=' font-montserrat  text-[1rem]  font-semibold'>Description</h1>
                <p className='font-montserrat  text-[.85rem]  text-[#62646A] pt-5 '>{currentUser?.desc}</p>
                <hr className='mt-7 w-11/12'/>
              </div>

              {/* Education Section */}
              <div className="px-4">

                <div className="edit text-center grid place-content-end">
                    <PencilSquareIcon className="h-6 w-6 mt-4  sm:-mr-3 text-slate-200 hover:text-[#002ead] duration-700" aria-hidden="true" />
                </div>

                <h1 className=' font-montserrat  text-[1rem] font-semibold'>Education</h1>
                {currentUser?.education.map((education, index) => (
                  <>
                    <p className='font-montserrat text-[.85rem] text-[#555555] pt-5 '>{education}</p>
                    <p className='font-montserrat text-[.85rem] text-[#B2B2B2] pt-1 '>{currentUser?.institution[index]}</p>
                  </>
                ))}

                <hr className='mt-7 w-11/12'/>
              </div>

              {/* Certification Section */}
              <div className="px-4">

                <div className="edit text-center grid place-content-end">
                    <PencilSquareIcon className="h-6 w-6 mt-4  sm:-mr-3 text-slate-200 hover:text-[#002ead] duration-700" aria-hidden="true" />
                </div>

                <h1 className=' font-montserrat  text-[1rem] font-semibold'>Certification</h1>
                {currentUser?.certification.map((certification, index) => (
                  <>
                    <p className='font-montserrat text-[.85rem] text-[#555555] pt-5 '>{certification}</p>
                    <p className='font-montserrat text-[.85rem] text-[#B2B2B2] pt-1 '>{certification?.certification_uni[index]}</p>
                  </>
                ))}
                <hr className='mt-7 w-11/12'/>
              </div>

              {/* Skills Section */}
              <div className="px-4">

                <div className="edit text-center grid place-content-end">
                    <PencilSquareIcon className="h-6 w-6 mt-4  sm:-mr-3 text-slate-200 hover:text-[#002ead] duration-700" aria-hidden="true" />
                </div>

                <h1 className=' font-montserrat text-[1rem] font-semibold'>Skills</h1>
                <div className=" mb-7">
                  {currentUser?.skills.map((skills) => (
                    <p className='font-montserrat border inline-block rounded-full py-2 px-3 mx-1 text-[.75rem]  text-[#555555] mt-5 '>{skills}</p>
                  ))}
                </div>
              </div>
             

            </div>
            {currentUser.isTeacher ? (
            <div className="infotab sm:w-[37rem] lg:w-[48rem]"></div>
            ) : (
              <div className="padawan"></div>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}

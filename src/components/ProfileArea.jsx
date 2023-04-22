import { me } from '../assets'
import { BuildingLibraryIcon, PhotoIcon, UserCircleIcon, UserIcon } from '@heroicons/react/24/solid'
import { certificates, education, skills, profileLinks } from '../constants'
import { NavLink } from 'react-router-dom'
import { PencilSquareIcon } from '@heroicons/react/24/outline'
import { useState, useEffect } from 'react'
import { Firestore, addDoc, collection, serverTimestamp, setDoc ,query,where,getDocs, getDoc, doc, limit} from 'firebase/firestore'
import { auth, db } from '../firebase'


export default function Example() {


  const [user, setUser] = useState({

  })

  useEffect(() => {
  
    auth.onAuthStateChanged(user => {
      if (user) {
        console.log(user.uid);
        async function fetchUser() {
          const q = query(collection(db, 'users'), where('uid', '==', user.uid), limit(1));
          const querySnapshot = await getDocs(q);
          if (!querySnapshot.empty) {
            setUser(querySnapshot.docs[0].data());
            console.log(user)
          } else {
          console.log('No matching documents!');
      }
    }
    fetchUser();
      } else {
        // setUser(null);
        
      }
    });
  
  }, []);


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
                <img className="object-cover w-36 h-36  rounded-full" src={me} alt="Profile picture"/>
                <h1 className='text-center font-montserrat  text-[1.25rem] pt-6 font-semibold'>{user.name}</h1>
                <p className='text-center font-montserrat  text-[.85rem]  text-[#939393] pt-1 '>{user.email}</p>
                <p className='text-center font-montserrat font-medium text-[.80rem]  text-[#2ec4b6] pt-4 '>Online</p>
                <hr className='my-7 w-11/12'/>
              </div>
              <div className="grid grid-cols-6 gap-4 px-4">
                <div className="col-span-4 flex">
                  <BuildingLibraryIcon className="h-5 w-5 text-[#62646a]" aria-hidden="true" />
                  <p className='font-medium font-montserrat  ml-3 text-[.85rem] text-[#939393] pt-1 '>From</p>
                </div>
                <p className='font-medium font-montserrat  text-[.85rem]  text-[#939393] pt-1 col-span-2  text-right'>{user.district}</p>
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
            <div className="infotab bg-white sm:w-[37rem] lg:w-[48rem] h-20 border hidden sm:block py-8 border-[#dfdfe1]">
              <>
              <ul className="list-none flex">
                {profileLinks.map((nav) => (
                  <li
                    className={`font-montserrat  text-[#62646A] hover:text-[#48c0f8]  duration-700 cursor-pointer font-semibold text-[0.89rem] mx-6 `}
                  >
                    <NavLink to={`${nav.path}`}>{nav.title}</NavLink>
                  </li>
                ))}
          
              </ul>
              </>
            </div>

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
                <p className='font-montserrat  text-[.85rem]  text-[#62646A] pt-5 '>{user.description}</p>
                <hr className='mt-7 w-11/12'/>
              </div>

              {/* Education Section */}
              <div className="px-4">

                <div className="edit text-center grid place-content-end">
                    <PencilSquareIcon className="h-6 w-6 mt-4  sm:-mr-3 text-slate-200 hover:text-[#002ead] duration-700" aria-hidden="true" />
                </div>

                <h1 className=' font-montserrat  text-[1rem] font-semibold'>Education</h1>
                {education.map((education) => (
                  <>
                  <p className='font-montserrat  text-[.85rem]  text-[#555555] pt-5 '>{education.title}</p>
                  <p className='font-montserrat  text-[.85rem]  text-[#B2B2B2] pt-1 '>{education.institution}</p>
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
                {certificates.map((certificates) => (
                  <>
                  <p className='font-montserrat  text-[.85rem]  text-[#555555] pt-5 '>{certificates.title}</p>
                  <p className='font-montserrat  text-[.85rem]  text-[#B2B2B2] pt-1 '>{certificates.institution}</p>
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
                  {skills.map((skills) => (
                    <p className='font-montserrat border inline-block rounded-full py-2 px-3 mx-1 text-[.75rem]  text-[#555555] mt-5 '>{skills.title}</p>
                  ))}
                </div>
              </div>
             

            </div>
            <div className="infotab sm:w-[37rem] lg:w-[48rem]">
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

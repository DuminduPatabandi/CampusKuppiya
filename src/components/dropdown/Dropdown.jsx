import { Popover, Transition } from '@headlessui/react'
import { NavLink, useNavigate } from 'react-router-dom'
import { me, noavatar } from '../../assets'
import {BeakerIcon, CogIcon, PowerIcon, UserIcon, } from '@heroicons/react/24/outline'
import { Fragment } from 'react'
import newRequest from "../../utils/newRequest";

const solutions = [
  { name: 'Profile', description: 'See how your profile is', path: 'profile', icon: UserIcon },
  { name: 'Settings', description: 'Edit your profile settings', path: 'update_profile', icon: CogIcon },
  { name: 'Update to Master', description: "Ask for a Master Account", path: '#', icon: BeakerIcon },
]



export default function Example() {


  const navigate = useNavigate();

  const currentUser = JSON.parse(localStorage.getItem("currentUser"))

  // Logging out

  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout")
      localStorage.setItem("currentUser", null)
      navigate("/")
    } catch (err) {
      console.log(err)
    }
  }


  return (

    
    <div className="myuser">
    {currentUser ? (
      <Popover className="relative">
        <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
          <span>
          <img
          className="object-cover w-9 h-9 mt-[6px] rounded-full"
          src={currentUser.img ||"/noavatar.jpg"}
          alt="Profile picture"/>
          </span>
        </Popover.Button>
      
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-[15.5rem] min-[375px]:-translate-x-[18.8rem] min-[425px]:-translate-x-[21.6rem] sm:-translate-x-[24rem] px-4">
            <div className="w-screen max-w-sm flex-auto overflow-hidden rounded-[.6rem] bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
              <div className="p-4">
                <div key={''} className="group relative flex gap-x-6 rounded-lg p-4 border-b">
                    <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 ">
                    <img className="object-cover w-12 h-12 mt-[6px] rounded-full" src={currentUser.img ||"/noavatar.jpg"} alt="Profile picture"/>
                    </div>
                    <div>
                      <p className='font-semibold text-gray-900 text-[1.3rem] font-montserrat uppercase'>{currentUser?.username}</p>
                      <p className="mt-[.1rem] text-gray-600">{currentUser?.email}</p>
                      <p className="mt-[.1rem] text-gray-600">{currentUser?.university}</p>
                    </div>
                </div>
                {solutions.map((item) => (
                  <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                    <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon className="h-6 w-6 text-gray-600 group-hover:text-[#002ead]" aria-hidden="true" />
                    </div>
                    <div>
                      <NavLink to={item.path} className="font-semibold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </NavLink>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}

                <div key={''} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                    <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <PowerIcon className="h-6 w-6 text-gray-600 group-hover:text-[#002ead]" aria-hidden="true" />
                    </div>
                    <div>
                      <NavLink onClick={handleLogout} className="font-semibold text-gray-900">
                        Log Out
                        <span className="absolute inset-0" />
                      </NavLink>
                      {currentUser.isTeacher ? (
                        <p className="mt-1 text-gray-600">Come again Master</p>
                      ) : (
                        <p className="mt-1 text-gray-600">Come again Padawan</p>

                      )}
                    </div>
                </div>


              </div>
      
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    ) : (
      <>
        <NavLink className="link" to="/register">
          <button className='text-white py-[.4rem] font-semibold rounded-md px-5 bg-[#0a0a23] hover:bg-[#e72a4f] duration-700'>Join Us</button>
        </NavLink>
      </>
    )}  
    </div>


  )
  
}

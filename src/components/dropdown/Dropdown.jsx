import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { NavLink } from 'react-router-dom'
import { me } from '../../assets'
import {
  BeakerIcon,
  CogIcon,
  PowerIcon,
  UserIcon,
} from '@heroicons/react/24/outline'

const solutions = [
  { name: 'Profile', description: 'See how your profile is', path: 'profile', icon: UserIcon },
  { name: 'Settings', description: 'Edit your profile settings', path: '#', icon: CogIcon },
  { name: 'Update to Master', description: "Ask for an Admin account", path: '#', icon: BeakerIcon },
  { name: 'Log Out', description: 'Come again learner', path: '#', icon: PowerIcon },
]

export default function Example() {
  return (
    <Popover className="relative">
      <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
        <span>
        <img class="object-cover w-8 h-8 mt-[6px] rounded-full ring ring-gray-300 dark:ring-white" src={me} alt=""/>
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
        <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-[24rem] px-4">
          <div className="w-screen max-w-sm flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="p-4">
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
            </div>
            
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

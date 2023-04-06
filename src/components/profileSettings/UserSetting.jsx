import { me } from '../../assets'
import { BuildingLibraryIcon, MinusCircleIcon, PlusCircleIcon, UserCircleIcon, UserIcon } from '@heroicons/react/24/solid'
import { certificates, education, skills, profileLinks, cities } from '../../constants'
import { useState } from 'react'
import { addDoc, collection, serverTimestamp, setDoc } from 'firebase/firestore'
import { auth, db, registerWithEmailAndPassword } from '../../firebase'
// import {createUserWithEmailAndPassword, registerWithEmailAndPassword } from 'firebase/auth'



export default function UserSetting() {


  // Adding fields
  const [fields, setFields] = useState([{ value: '' }]);

  const addField = () => {
    setFields([...fields, { value: '' }]);
  };

  const removeField = (indexToRemove) => {
    setFields(fields.filter((field, index) => index !== indexToRemove));
  };

  const handleInputChange = (index, event) => {
    const newFields = [...fields];
    newFields[index].value = event.target.value;
    setFields(newFields);
  };

  const handleBothChanges = (event) => {
    handleInput(event);
    handleInputChange(index, event);
  }

  // End of adding fields............

  const [file, setFile] = useState("");
  const [data, setData] = useState({});

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({...data, [id]: value});
  }

  console.log(data)

  const handleAdd = async (e) => {
    e.preventDefault();
    try {

      const res = await registerWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )

      await setDoc(doc(db,"users", res.user.uid), {
        ...data,
        class: "saman",
        timeStamp: serverTimestamp()
      });

    } catch(err) {
      console.log(err)
    }
  }

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
                    onChange={handleInput}
                    id="username"
                    autoComplete="username"
                    className="block bg-slate-100  flex-1 border-0 text-center py-1.5 text-gray-400 placeholder:text-gray-400 outline-offset-0 outline-none focus:outline-[#819be1] sm:text-sm sm:leading-6"
                    placeholder="Your public user name"
                  />
                <input
                    type="email"
                    name="email"
                    onChange={handleInput}
                    id="public_email"
                    autoComplete="email"
                    className="block bg-slate-100  flex-1 border-0 text-center mt-3 py-1.5 text-gray-400 placeholder:text-gray-400 outline-offset-0 outline-none focus:outline-[#819be1] sm:text-sm sm:leading-6"
                    placeholder="Your public email"
                  />
                
                <hr className='my-7 w-11/12'/>

              </div>

              <div className="grid grid-cols-6 gap-4 px-4">
                <div className="col-span-3 flex">
                  <BuildingLibraryIcon className="h-5 w-5 text-[#62646a]" aria-hidden="true" />
                  <p className='font-medium font-montserrat  ml-3 text-[.85rem] text-[#939393] pt-1 '>From</p>
                </div>

                <select
                  id="district"
                  name="district"
                  onChange={handleInput}
                  autoComplete="district_name"
                  className="block w-full font-medium font-montserrat text-[.85rem]  outline-offset-0 outline-none focus:outline-[#819be1] text-[#939393] py-2 px-4 col-span-3  border-0 "
                >
                  {cities.map((cities) => (
                    <option>{cities.title}</option>
                  ))}
                </select>
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
                <textarea
                  rows="6"
                  onChange={handleInput}
                  name="message"
                  id="message"
                  placeholder="Tell us who you are, what are you passionate about."
                  className="w-full  font-montserrat p-5 mt-6 bg-slate-100 text-[.85rem]  outline-offset-0 outline-none focus:outline-[#819be1] text-[#939393]  focus:outline-4"></textarea>
                <hr className='my-7 w-11/12'/>
              </div>

              {/* Education Section */}
              <div className="px-4">
                <h1 className=' font-montserrat  text-[1rem] font-semibold'>Education</h1>
                
                <div className="container mx-auto px-4 py-8">
                  {fields.map((field, index) => (
                    <div key={index} className="mb-4">
                      <input
                        type="text"
                        className="w-full  font-montserrat p-3 mt-4 bg-slate-100 text-[.85rem]  outline-offset-0 outline-none focus:outline-[#819be1] text-[#939393]  focus:outline-4"
                        placeholder="Degree or Field"
                        onChange={handleBothChanges}
                      />
                      <input
                        type="text"
                        className="w-full  font-montserrat p-3 mt-4 bg-slate-100 text-[.85rem]  outline-offset-0 outline-none focus:outline-[#819be1] text-[#939393]  focus:outline-4"
                        placeholder="University or Institution"
                        onChange={handleBothChanges}
                      />
                    </div>
                  ))}
                  <button
                    className=" text-white  px-3 py-2 "
                    onClick={addField}
                  >
                    <PlusCircleIcon className="h-8 w-8 text-slate-300" />
                    <span></span>
                  </button>
                  <button
                    className=" text-white  px-3 py-2 "
                    onClick={() => removeField(index)}
                  >
                    <MinusCircleIcon className="h-8 w-8 text-slate-300" />
                    <span></span>
                  </button>
                </div>

                <hr className='my-7 w-11/12'/>
              </div>

              {/* Certification Section */}
              <div className="px-4">
                <h1 className=' font-montserrat  text-[1rem] font-semibold'>Certification</h1>

                <div className="container mx-auto px-4 py-8">
                  {fields.map((field, index) => (
                    <div key={index} className="mb-4">
                      <input
                        type="text"
                        className="w-full  font-montserrat p-3 mt-4 bg-slate-100 text-[.85rem]  outline-offset-0 outline-none focus:outline-[#819be1] text-[#939393]  focus:outline-4"
                        placeholder="Certificate name"
                        onChange={handleBothChanges}
                      />
                      <input
                        type="text"
                        className="w-full  font-montserrat p-3 mt-4 bg-slate-100 text-[.85rem]  outline-offset-0 outline-none focus:outline-[#819be1] text-[#939393]  focus:outline-4"
                        placeholder="University or Institution"
                        onChange={handleBothChanges}
                      />
                    </div>
                  ))}
                  <button
                    className=" text-white  px-3 py-2 "
                    onClick={addField}
                  >
                    <PlusCircleIcon className="h-8 w-8 text-slate-300" />
                    <span></span>
                  </button>
                  <button
                    className=" text-white  px-3 py-2 "
                    onClick={() => removeField(index)}
                  >
                    <MinusCircleIcon className="h-8 w-8 text-slate-300" />
                    <span></span>
                  </button>
                </div>    

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
          <form onSubmit={handleAdd}>

             <button 
                className="w-full px-6 mt-6 py-3 text-sm font-medium tracking-wide text-[#0a0a23] capitalize transition-colors duration-300 transform bg-slate-100  hover:bg-[#002ead] "
                type='submit'                
                >
                    Save Changes
                </button>
                </form>

        </div>

        
      </div>
    </div>
  )
}

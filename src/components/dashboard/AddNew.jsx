import { useReducer, useState } from "react";
import {useNavigate } from "react-router-dom";
import { gigReducer, INITIAL_STATE } from "../../reducers/gigReducer";
import newRequest from "../../utils/newRequest";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {BuildingLibraryIcon, UserIcon, } from '@heroicons/react/24/outline'



const AddNew = () => {

  const [state, dispatch] = useReducer(gigReducer, INITIAL_STATE);

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (gig) => {
      return newRequest.post("/gigs", gig);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["docs"]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(state);
    // navigate("/docs")
  };

  return (
    <section className="">
      <div className="container flex items-center justify-center min-h-screen px-6 mx-auto mt-12">
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <div class="relative flex items-center mt md:-mt-40">
            <span className="absolute">
            <UserIcon className="w-6 h-6 mx-3 text-gray-300" aria-hidden="true" />
            </span>

            <input
              type="text"
              name="title"
              className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={handleChange}
              placeholder="Title"
            />
          </div>
          <div class="relative flex items-center mt-4">
            <span className="absolute">
            <UserIcon className="w-6 h-6 mx-3 text-gray-300" aria-hidden="true" />
            </span>

            <input
              type="text"
              name="sub_title"
              className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={handleChange}
              placeholder="Sub Title"
            />
          </div>
          <div class="relative flex items-center mt-4">
            <span className="absolute">
            <UserIcon className="w-6 h-6 mx-3 text-gray-300" aria-hidden="true" />
            </span>

            <input
              type="text"
              name="subject"
              className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={handleChange}
              placeholder="Subject"
            />
          </div>
          <div class="relative flex items-center mt-4">
            <span className="absolute">
            <UserIcon className="w-6 h-6 mx-3 text-gray-300" aria-hidden="true" />
            </span>

            <input
              type="text"
              name="sub_code"
              className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={handleChange}
              placeholder="Subject Code"
            />
          </div>
          <div class="relative flex items-center mt-4">

            <textarea 
              rows="4"
              name="desc"
              className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={handleChange}
              placeholder="Description"
            ></textarea>
          </div>
          <div class="relative flex items-center mt-4">
            <span className="absolute">
            <BuildingLibraryIcon className="w-6 h-6 mx-3 text-gray-300" aria-hidden="true" />
            </span>
            <select onChange={handleChange} name="year" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
              <option >First Year</option>
              <option >Second Year</option>
              <option >Third Year</option>
              <option >Fourth Year</option>
            </select>

          </div>

          <div class="relative flex items-center mt-4">
            <span className="absolute">
            <BuildingLibraryIcon className="w-6 h-6 mx-3 text-gray-300" aria-hidden="true" />
            </span>
            <select onChange={handleChange} name="semester" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
              <option >First Semester</option>
              <option >Second Semester</option>
            </select>

          </div>
{/* 
          <div className="relative flex items-center mt-4">
            <span className="absolute">
            <UserCircleIcon className="w-6 h-6 mx-3 text-gray-300" aria-hidden="true" />
            </span>

            <input
              type="file"
              name="img"
              className="block w-full px-10 py-3 text-gray-700"
              onChange={(e) => setFile(e.target.files[0])}
              placeholder="image"
            />
          </div> */}

          <div className="mt-6">
            <button
              className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              type="submit"
            >
              Add Document
            </button>
 

          </div>
        </form>
      </div>
    </section>
  );
};
export default AddNew;

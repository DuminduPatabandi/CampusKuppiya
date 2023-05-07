import { useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import GigCard from '../gigCard/GigCard';


export default function Example() {

  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);

  const {search} =  useLocation();

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["gigs"],
    queryFn: () => 
      newRequest
      .get(`/gigs${search}&sort=${sort}`)
      .then((res) => {
      return res.data;
    })
  });


  console.log(data);

  const reSort = (type) =>{
    setSort(type)
    setOpen(false)
  }

  useEffect(() => {
    refetch();
  }, [sort])

  const apply = () => {
    refetch();
  };


  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 ">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Computer Science</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>

            {/* Sorter */}
            <nav className='w-full bg-white pt-[4rem] navbar'>
          
              <ul className='list-none flex  bg-slate-100  sm:text-center justify-center items-center'>
                  <span
                    key="newest"
                    className = {`font-montserrat text-[#838383] hover:text-white hover:bg-[#002ead] py-3 px-5 font-bold duration-700 cursor-pointer  md:my-1 text-[.85rem] mx-2 `}
                    onClick={() => reSort("createdAt")}
                    >
                      Newest
                  </span>
                  <span
                    key="populest"
                    className = {`font-montserrat hover:bg-[#002ead] py-3 px-5 text-[#838383] hover:text-white  font-bold duration-700 cursor-pointer md:my-1 text-[.85rem] mx-2 `}
                    onClick={() => reSort("sales")}
                    >
                      Popular
                  </span>
              </ul>

            </nav>       

        </div>

        <div className="border-b mb-16"></div>

        <div className="mx-auto grid max-w-2xl grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-16  border-gray-200 pt-4 sm:mt-4 sm:pt-4 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {isLoading
              ? "loading"
              : error
              ? "Something went wrong!"
              : data.map((gig) => <GigCard key={gig._id} item={gig}/>)}
        </div>
      </div>
    </div>
  )
}

import {TrashIcon } from "@heroicons/react/24/outline"
import { NavLink } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";


export default function MyDocuments() {

  const currentUser = JSON.parse(localStorage.getItem("currentUser"))
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["myGigs"],
    queryFn: () =>
      newRequest
      .get(`/gigs?userId=${currentUser.id}`)
      .then((res) => {
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: (id) => {
      return newRequest.delete(`/gigs/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["myGigs"]);
    },
  });

  const handleDelete = (id) => {
    mutation.mutate(id);
  };

  return (
    <ul role="list" className="divide-y divide-gray-100">
      {isLoading ? (
        "loading"
      ) : error ? (
        "error"
      ) : (
        <>
        {data.map((gig) => (
        <li key={gig._id} className="flex justify-between gap-x-6 py-5">
          <div className="flex gap-x-4">
            <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={gig.img || "/noavatar.jpg"} alt="" />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">{gig.title}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">{gig.sub_title}</p>
            </div>
          </div>
          <div className="sm:flex sm:flex-col sm:items-end">
            <TrashIcon onClick={() => handleDelete(gig._id)} className="h-6 w-6 mt-4 mr-4 sm:mr-1 text-slate-900 hover:text-[#e72a4f] duration-700" aria-hidden="true" />            
          </div>
        </li>
        ))}
        </>
      )}
    </ul>
  )
}

import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { noavatar, me } from '../../assets'

const GigCard = ({ item }) => {

  const { isLoading, error, data } = useQuery({
    queryKey: [item.userId],
    queryFn: () =>
      newRequest.get(
        `/users/${item.userId}`
      )
      .then((res) => {
        return res.data;
      }),
  });

  return (
      <div className="gigCard">
              <article key={item.id} className="flex max-w-xl rounded-lg flex-col border drop-shadow-lg p-6  items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  {/* <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time> */}
                  <div className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                    {item.sub_code}
                    </div>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-[1.5rem] font-semibold font-montserrat leading-6 text-gray-900 group-hover:text-gray-600">
                      {item.title}
                  </h3>
                  <h3 className="mt-3 text-[.8rem] font-semibold font-montserrat leading-6 text-gray-400 group-hover:text-gray-600">
                      {item.sub_title}
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{item.desc}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  {isLoading ? (
                    "loading"
                  ) : error ? (
                    "Something went wrong!"
                  ) : (
                  <div className="user">
                    <img src={data.img ||"/noavatar.jpg"} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                        <a href="#">
                          <span className="absolute inset-0" />
                          {data.username}
                        </a>
                      </p>
                      <p className="text-gray-600">{data.university}</p>
                    </div>
                  </div>
                  )}
                </div>
              </article>
      </div>

  );
};

export default GigCard;
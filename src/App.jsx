import { motion, useScroll } from "framer-motion";

import {
  Footer,
  Navbar,
  Year1,
  Year2,
  Year3,
  Year4,
  Semester1,
  Semester2,
  MyDocuments,
  AddNew,
} from "./components";

import { Home, About, Kuppiya, Video, Contact, Login, Register, Profile, UpdateProfile, Docs } from "./pages";

import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import { subjectsLoader } from "./components/Semester1";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="about" element={<About />} />

      <Route path="kuppiya" element={<Kuppiya />}>

        <Route path="year1" element={<Year1 />}>
          <Route path="sem1" element={<Semester1 />} loader={subjectsLoader} />
          <Route path="sem2" element={<Semester2 />} loader={subjectsLoader} />
        </Route>

        <Route path="year2" element={<Year2 />}>
          <Route path="sem1" element={<Semester1 />} loader={subjectsLoader} />
          <Route path="sem2" element={<Semester2 />} loader={subjectsLoader} />
        </Route>

        <Route path="year3" element={<Year3 />}>
          <Route path="sem1" element={<Semester1 />} loader={subjectsLoader} />
          <Route path="sem2" element={<Semester2 />} loader={subjectsLoader} />
        </Route>

        <Route path="year4" element={<Year4 />}>
          <Route path="sem1" element={<Semester1 />} loader={subjectsLoader} />
          <Route path="sem2" element={<Semester2 />} loader={subjectsLoader} />
        </Route>
      </Route>
      
      <Route path="videos" element={<Video />} />
      <Route path="contact" element={<Contact />} />


      <Route path="profile" element={<Profile />} >
      <Route path="mydocuments" element={<MyDocuments />} />
      <Route path="addnew" element={<AddNew />} />
      </Route>
      <Route path="update_profile" element={<UpdateProfile />} />
      <Route path="docs" element={<Docs />} />


    </Route>
  )
);

const App = () => {

  const queryClient = new QueryClient();
  const { scrollYProgress } = useScroll();

  return (

    <div className=" overflow-hidden bg-[#002ead] w-full">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />
        <Footer />
      </QueryClientProvider>

    </div>
  );
};

export default App;

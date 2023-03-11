import styles from "./style";
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
} from "./components";

import {
  PHYS,
  PMAT,
  CHEM,
  COSC,
  COST,
  STAT,
  AMAT,
  Music,
  More,
} from "./subjects";



import { Home, About, Kuppiya, Video, Contact, Login, Register } from "./pages";

import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { subjectsLoader } from "./components/Semester1";

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

      {/* Subject Routes */}

      <Route path="cosc" element={<COSC />} />
      <Route path="amat" element={<AMAT />} />
      <Route path="chem" element={<CHEM />} />
      <Route path="cost" element={<COST />} />
      <Route path="phys" element={<PHYS />} />
      <Route path="stat" element={<STAT />} />
      <Route path="pmat" element={<PMAT />} />
      <Route path="music" element={<Music />} />
      <Route path="more" element={<More />} />


    </Route>
  )
);

const App = () => {
  // var cursor = document.querySelector(".cursor");
  // var cursor2 = document.querySelector(".cursor2");
  // document.addEventListener("mousemove", function (e) {
  //   cursor.style.cssText = cursor2.style.cssText =
  //     "left:" + e.clientX + "px; top: " + e.clientY + "px;";
  // });

  const { scrollYProgress } = useScroll();

  return (
    // Navigation bar

    <div className=" overflow-hidden bg-[#002ead] w-full">
      <RouterProvider router={router} />

      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />

      {/* <div class="cursor"></div>
        <div class="cursor2"></div> */}

      <Footer />
    </div>
  );
};

export default App;

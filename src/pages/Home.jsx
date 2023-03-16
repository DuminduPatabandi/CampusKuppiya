import { LogoArea, Work } from "../components";
import styles from "../style";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [user, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) navigate("/login");
  }, [user]);
  return (
    <div className="home ">
      <div
        className={` ${styles.paddingX} ${styles.flexStart} bg-[#0a0a23] py-[12.1rem]  w-full`}
      >
        <div className={`${styles.boxWidth}`}>
          <LogoArea />
        </div>
      </div>
      <div
        className={` ${styles.paddingX} ${styles.flexStart} bg-[#ffffff]   w-full`}
      >
        <div className={`${styles.boxWidth}`}>
          <Work />
        </div>
      </div>
    </div>
  );
};

export default Home;

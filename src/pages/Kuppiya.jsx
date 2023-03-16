import {LogoArea, YearNav} from '../components'
import styles from '../style'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Kuppiya = () => {
  const [user, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) navigate("/login");
  }, [user]);
  return (
    <div className="home bg-slate-500">
      <div className= {` ${styles.paddingX} ${styles.flexStart} bg-[#0a0a23] py-3 w-full`}>
        <div className={`${styles.boxWidth}`}>
            <LogoArea/>
        </div>
      </div>

        <div className="text-center">
            <YearNav />
        </div>
    </div>

  )
}

export default Kuppiya
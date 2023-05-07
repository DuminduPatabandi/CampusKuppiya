import {LogoArea, YearNav, Need} from '../components'
import styles from '../style'


const Kuppiya = () => {

  const currentUser = JSON.parse(localStorage.getItem("currentUser"))
  return (

    <div className="user">
      {currentUser ? (
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
        ) : (
          <>
          <Need/>
          </>
      )}
      
    </div>

  )
}

export default Kuppiya
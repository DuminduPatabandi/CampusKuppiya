import {LogoArea, YearNav} from '../components'
import styles from '../style'

const Kuppiya = () => {
  return (
    <div className="home bg-slate-500">
      <div className= {` ${styles.paddingX} ${styles.flexStart} bg-[#F9F9F9] py-3 w-full`}>
        <div className={`${styles.boxWidth}`}>
            <LogoArea/>
        </div>
      </div>

        <YearNav />
    </div>

  )
}

export default Kuppiya
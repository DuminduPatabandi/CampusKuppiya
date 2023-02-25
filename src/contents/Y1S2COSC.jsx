import {Development} from '../components'
import styles from '../style'

const Y1S2COSC = () => {
  return (
    <div className="home ">
      <div className= {` ${styles.paddingX} ${styles.flexStart} bg-[#0a0a23] py-[3rem]  w-full`}>
        <div className={`${styles.boxWidth}`}>
            <Development/>
        </div>
      </div>

    </div>

  )
}

export default Y1S2COSC
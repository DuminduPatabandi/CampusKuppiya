import {LogoArea} from '../components'
import styles from '../style'

const Contact = () => {
  return (
    <div className="home bg-[#0a0a23]">
      <div className= {` ${styles.paddingX} ${styles.flexStart} bg-[#0a0a23] py-[12rem]  w-full`}>
        <div className={`${styles.boxWidth}`}>
            <LogoArea/>
        </div>
      </div>


    </div>

  )
}
export default Contact
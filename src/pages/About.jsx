import {AboutArea, Work} from '../components'
import styles from '../style'

const About = () => {
  return (
    <div className="home ">
      <div className= {` ${styles.paddingX} ${styles.flexStart} bg-[#ffffff] py-[12.1rem]  w-full`}>
        <div className={`${styles.boxWidth}`}>
            <AboutArea/>
        </div>
      </div>
      {/* <div className= {` ${styles.paddingX} ${styles.flexStart} bg-[#ffffff]   w-full`}>
        <div className={`${styles.boxWidth}`}>
            <Work />
        </div>
      </div> */}

    </div>

  )
}

export default About
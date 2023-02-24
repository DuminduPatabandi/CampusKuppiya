import {FormArea} from '../components'
import styles from '../style'

const Contact = () => {
  return (
    <div className="home bg-[#0a0a23]">
      <div className= {` ${styles.paddingX} ${styles.flexStart} bg-[#0a0a23] py-[6rem]  w-full`}>
        <div className={`${styles.boxWidth}`}>
            <FormArea/>
        </div>
      </div>


    </div>

  )
}
export default Contact
import { ProfileSetting } from '../components'
import styles from '../style'

const UpdateProfile = () => {
  return (
    <div className="home ">
      <div className= {` ${styles.paddingX} ${styles.flexStart} bg-[#ffffff] py-[12.1rem] sm:px-32 md:px-72 w-full`}>
        <div className={`${styles.boxWidth}`}>
            <ProfileSetting/>
        </div>
      </div>
    </div>

  )
}

export default UpdateProfile
import { ProfileArea } from '../components'
import styles from '../style'

const Profile = () => {
  return (
    <div className="home ">
      <div className= {` ${styles.paddingX} ${styles.flexStart} bg-[#ffffff] py-[12.1rem]  w-full`}>
        <div className={`${styles.boxWidth}`}>
            <ProfileArea/>
        </div>
      </div>
    </div>

  )
}

export default Profile
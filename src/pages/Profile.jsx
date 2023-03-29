import { ProfileArea } from '../components'
import styles from '../style'

const Profile = () => {
  return (
    <div className="home ">
      <div className= {`${styles.flexStart} bg-[#f7f7f7] sm:px-8 px-6 py-[1rem]  w-full`}>
        <div className={`${styles.boxWidth}`}>
            <ProfileArea/>
        </div>
      </div>
    </div>

  )
}

export default Profile
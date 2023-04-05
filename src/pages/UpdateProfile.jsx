import { UserSetting } from '../components'
import styles from '../style'

const UpdateProfile = () => {
  return (
    <div className="home ">
      <div className= {`${styles.flexStart} bg-[#0a0a23] sm:px-8 px-6 py-[1rem]  w-full`}>
        <div className={`${styles.boxWidth}`}>
            <UserSetting/>
        </div>
      </div>
    </div>

  )
}

export default UpdateProfile
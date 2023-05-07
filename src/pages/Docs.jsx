import { Document } from "../components"
import styles from "../style";

const Docs = () => {
  return (
    <div className="home bg-[#ffffff]">
    <div className= {` ${styles.paddingX} ${styles.flexStart}  py-[6rem]  w-full`}>
      <div className={`${styles.boxWidth}`}>
          <Document/>
      </div>
    </div>


  </div>
  )
}
export default Docs;
import styles from './style'
import {Navbar} from './components'

const App = () => {
  return (
    // Navigation bar

        <div className=' overflow-hidden bg-white w-full'>
          <div className= {`${styles.paddingX} ${styles.flexCenter}  w-full`}>
            <div className={`${styles.boxWidth} fixed mt-12`} style={{zIndex: 10}}>
              <Navbar />
            </div>
          </div>


      </div>

      

  )
}

export default App
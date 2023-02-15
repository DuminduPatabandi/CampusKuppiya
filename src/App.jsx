import styles from './style'
import {Navbar} from './components'
import { Home, About} from './pages'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'

const App = () => {
  return (
    // Navigation bar

        <div className=' overflow-hidden bg-white w-full'>

        <BrowserRouter>      

          <div className= {`${styles.paddingX} ${styles.flexCenter}  w-full`}>
            <div className={`${styles.boxWidth} fixed mt-12`} style={{zIndex: 10}}>
              <Navbar />
            </div>
          </div>


            <main>
              <Routes>
                <Route index element={ <Home/> } >
                  {/* <Route path='COSC' element={ <About/> } />
                  <Route path='PMAT' element={ <About/> } /> */}
                </Route>
                <Route path='about' element={ <About/> } />
              </Routes>
            </main>

        </BrowserRouter>


      </div>

      

  )
}

export default App
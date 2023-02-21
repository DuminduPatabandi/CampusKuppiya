import styles from './style'
import {Footer, Navbar, Year1, Year2, Year3, Year4, Y1S1, Y1S2, Y2S1, Y2S2, Y3S1, Y3S2, Y4S1, Y4S2} from './components'
import { Y1S1AMAT, Y1S1CHEM, Y1S1COSC, Y1S1COST, Y1S1PHYS, Y1S1PMAT, Y1S1STAT } from './contents'
import { Y1S2AMAT, Y1S2CHEM, Y1S2COSC, Y1S2COST, Y1S2PHYS, Y1S2PMAT, Y1S2STAT } from './contents'
import { Home, About, Kuppiya, Video, Contact} from './pages'
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={<Navbar />}>
      <Route index element={ <Home/> }/>
      <Route path='about' element={ <About/> }/>
      <Route path='kuppiya' element={ <Kuppiya/> }>    

        <Route path='year1' element={ <Year1/> } >
          <Route path='y1s1' element={ <Y1S1/> }/>
          <Route path='y1s2' element={ <Y1S2/> } /> 
        </Route>

        <Route path='year2' element={ <Year2/> } >
          <Route path='y2s1' element={ <Y2S1/> }/>
          <Route path='y2s2' element={ <Y2S2/> } />
        </Route>

        <Route path='year3' element={ <Year3/> } >
          <Route path='y3s1' element={ <Y3S1/> } />
          <Route path='y3s2' element={ <Y3S2/> } />
        </Route>

        <Route path='year4' element={ <Year4/> } >
          <Route path='y4s1' element={ <Y4S1/> } />
          <Route path='y4s2' element={ <Y4S2/> } />
        </Route>

      </Route>
      <Route path='videos' element={ <Video/> }/>
      <Route path='contact' element={ <Contact/> }/>

      {/* Y1S1 Routes */}

      <Route path='cosc_y1s1' element={ <Y1S1COSC/> }/>
      <Route path='amat_y1s1' element={ <Y1S1AMAT/> }/>
      <Route path='chem_y1s1' element={ <Y1S1CHEM/> }/>
      <Route path='cost_y1s1' element={ <Y1S1COST/> }/>
      <Route path='phys_y1s1' element={ <Y1S1PHYS/> }/>
      <Route path='stat_y1s1' element={ <Y1S1STAT/> }/>
      <Route path='pmat_y1s1' element={ <Y1S1PMAT/> }/>

      {/* Y1S2 Routes */}

      <Route path='cosc_y1s2' element={ <Y1S2COSC/> }/>
      <Route path='amat_y1s2' element={ <Y1S2AMAT/> }/>
      <Route path='chem_y1s2' element={ <Y1S2CHEM/> }/>
      <Route path='cost_y1s2' element={ <Y1S2COST/> }/>
      <Route path='phys_y1s2' element={ <Y1S2PHYS/> }/>
      <Route path='stat_y1s2' element={ <Y1S2STAT/> }/>
      <Route path='pmat_y1s2' element={ <Y1S2PMAT/> }/>


  </Route>
  )
)


const App = () => {
  return (
    // Navigation bar

      <div className=' overflow-hidden bg-[#002ead] w-full'>
        <RouterProvider router={router} />
        <Footer />
      </div>

    
      

  )
}

export default App
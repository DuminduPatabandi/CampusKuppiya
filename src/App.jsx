import styles from './style'
import {Footer, Navbar, Year1, Year2, Year3, Year4, Y1S1, Y1S2, Y2S1, Y2S2, Y3S1, Y3S2, Y4S1, Y4S2} from './components'
import { Y1S1AMAT, Y1S1CHEM, Y1S1COSC, Y1S1COST, Y1S1PHYS, Y1S1PMAT, Y1S1STAT } from './contents'
import { Y1S2AMAT, Y1S2CHEM, Y1S2COSC, Y1S2COST, Y1S2PHYS, Y1S2PMAT, Y1S2STAT } from './contents'
import { Y2S1AMAT, Y2S1CHEM, Y2S1COSC, Y2S1COST, Y2S1PHYS, Y2S1PMAT, Y2S1STAT } from './contents'
import { Y2S2AMAT, Y2S2CHEM, Y2S2COSC, Y2S2COST, Y2S2PHYS, Y2S2PMAT, Y2S2STAT } from './contents'
import { Y3S1AMAT, Y3S1CHEM, Y3S1COSC, Y3S1COST, Y3S1PHYS, Y3S1PMAT, Y3S1STAT } from './contents'
import { Y3S2AMAT, Y3S2CHEM, Y3S2COSC, Y3S2COST, Y3S2PHYS, Y3S2PMAT, Y3S2STAT } from './contents'
import { Y4S1AMAT, Y4S1CHEM, Y4S1COSC, Y4S1COST, Y4S1PHYS, Y4S1PMAT, Y4S1STAT } from './contents'
import { Y4S2AMAT, Y4S2CHEM, Y4S2COSC, Y4S2COST, Y4S2PHYS, Y4S2PMAT, Y4S2STAT } from './contents'
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

      {/* Y2S1 Routes */}

      <Route path='cosc_y2s1' element={ <Y2S1COSC/> }/>
      <Route path='amat_y2s1' element={ <Y2S1AMAT/> }/>
      <Route path='chem_y2s1' element={ <Y2S1CHEM/> }/>
      <Route path='cost_y2s1' element={ <Y2S1COST/> }/>
      <Route path='phys_y2s1' element={ <Y2S1PHYS/> }/>
      <Route path='stat_y2s1' element={ <Y2S1STAT/> }/>
      <Route path='pmat_y2s1' element={ <Y2S1PMAT/> }/>

      {/* Y2S2 Routes */}

      <Route path='cosc_y2s2' element={ <Y2S2COSC/> }/>
      <Route path='amat_y2s2' element={ <Y2S2AMAT/> }/>
      <Route path='chem_y2s2' element={ <Y2S2CHEM/> }/>
      <Route path='cost_y2s2' element={ <Y2S2COST/> }/>
      <Route path='phys_y2s2' element={ <Y2S2PHYS/> }/>
      <Route path='stat_y2s2' element={ <Y2S2STAT/> }/>
      <Route path='pmat_y2s2' element={ <Y2S2PMAT/> }/>

      {/* Y3S1 Routes */}

      <Route path='cosc_y3s1' element={ <Y3S1COSC/> }/>
      <Route path='amat_y3s1' element={ <Y3S1AMAT/> }/>
      <Route path='chem_y3s1' element={ <Y3S1CHEM/> }/>
      <Route path='cost_y3s1' element={ <Y3S1COST/> }/>
      <Route path='phys_y3s1' element={ <Y3S1PHYS/> }/>
      <Route path='stat_y3s1' element={ <Y3S1STAT/> }/>
      <Route path='pmat_y3s1' element={ <Y3S1PMAT/> }/>

      {/* Y3S2 Routes */}

      <Route path='cosc_y3s2' element={ <Y3S2COSC/> }/>
      <Route path='amat_y3s2' element={ <Y3S2AMAT/> }/>
      <Route path='chem_y3s2' element={ <Y3S2CHEM/> }/>
      <Route path='cost_y3s2' element={ <Y3S2COST/> }/>
      <Route path='phys_y3s2' element={ <Y3S2PHYS/> }/>
      <Route path='stat_y3s2' element={ <Y3S2STAT/> }/>
      <Route path='pmat_y3s2' element={ <Y3S2PMAT/> }/>

      {/* Y4S1 Routes */}

      <Route path='cosc_y4s1' element={ <Y4S1COSC/> }/>
      <Route path='amat_y4s1' element={ <Y4S1AMAT/> }/>
      <Route path='chem_y4s1' element={ <Y4S1CHEM/> }/>
      <Route path='cost_y4s1' element={ <Y4S1COST/> }/>
      <Route path='phys_y4s1' element={ <Y4S1PHYS/> }/>
      <Route path='stat_y4s1' element={ <Y4S1STAT/> }/>
      <Route path='pmat_y4s1' element={ <Y4S1PMAT/> }/>

      {/* Y4S2 Routes */}

      <Route path='cosc_y4s2' element={ <Y4S2COSC/> }/>
      <Route path='amat_y4s2' element={ <Y4S2AMAT/> }/>
      <Route path='chem_y4s2' element={ <Y4S2CHEM/> }/>
      <Route path='cost_y4s2' element={ <Y4S2COST/> }/>
      <Route path='phys_y4s2' element={ <Y4S2PHYS/> }/>
      <Route path='stat_y4s2' element={ <Y4S2STAT/> }/>
      <Route path='pmat_y4s2' element={ <Y4S2PMAT/> }/>


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
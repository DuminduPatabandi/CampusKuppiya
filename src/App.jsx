import styles from './style'
import {Footer, Navbar, Year1, Year2, Year3, Year4} from './components'
import { Home, About, Kuppiya, Video, Contact} from './pages'
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Navbar />}>
      <Route index element={ <Home/> }/>
      <Route path='about' element={ <About/> }/>
      <Route path='kuppiya' element={ <Kuppiya/> }>    
        <Route path='year1' element={ <Year1/> } />
        <Route path='year2' element={ <Year2/> } />
        <Route path='year3' element={ <Year3/> } />
        <Route path='year4' element={ <Year4/> } />
      </Route>
      <Route path='videos' element={ <Video/> }/>
      <Route path='contact' element={ <Contact/> }/>
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
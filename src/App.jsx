import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router'
import { Navbar } from './pages/Navbar'

export const App = ()=> {

  return (
    <BrowserRouter>
      <Navbar/>
      <AppRouter>
      </AppRouter>
    </BrowserRouter>
  )
}


import { Route, Routes, Navigate} from 'react-router-dom'
import { Home, About, Contact } from '../pages'

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='*' element={<Navigate to={'/'}/>} />
        </Routes>
    )
}

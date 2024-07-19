import { NavLink } from 'react-router-dom'

const navItems = [
    {title:'Home', navigateTo:'/'},
    {title:'About', navigateTo:'/about'},
    {title:'Contact', navigateTo:'/contact'},
]

export const Navbar = ()=>{
    return(
        <nav className='navbar'>
            <ul>
                { navItems.map((item, index)=>(
                    <li key={index}>
                        <NavLink to={item.navigateTo}>
                            {item.title}
                        </NavLink>
                    </li>
                ))
                }
            </ul>
        </nav>
    )
}
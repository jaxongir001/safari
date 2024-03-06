import { NavLink } from 'react-router-dom'
import logo from "../images/Logo-1.jpeg"
import { useSearchContext } from './useSearch'
const Navbar = () => {
    const { inputVal, setInputVal } = useSearchContext();
    const handleChange = (e) => {
        setInputVal(e.target.value)
    }

    return (
        <div>
            <nav className='flex w-full justify-between h-[100px] items-center bg-white fixed z-10 mb-10'>
                <ul className='flex gap-6'>
                    <li><NavLink className="capitalize text-[20px]" to="/">Home</NavLink></li>
                    <li><NavLink className="capitalize text-[20px]" to="/clothes">Clothes</NavLink></li>
                    <li><NavLink className="capitalize text-[20px]" to="/shoes">Shoes</NavLink></li>
                    <li><NavLink className="capitalize text-[20px]" to="/accessories">Accessories</NavLink></li>
                </ul>
                <div>
                    <img src={logo} alt="Logo" />
                </div>
                <div className='text-[22px] flex gap-5 items-center'>
                    <input type="search" placeholder='Search...' onChange={handleChange} value={inputVal} className='border-b-2 pl-2 capitalize' />
                    <i className="cursor-pointer fa-solid fa-magnifying-glass"></i>
                    <NavLink to="/account"><i className="cursor-pointer fa-solid fa-user"></i></NavLink>
                    <NavLink to="/shopping"><i className="cursor-pointer fa-solid fa-cart-shopping"></i></NavLink>
                    <i className="cursor-pointer fa-solid fa-heart"></i>
                </div>
            </nav>
        </div>
    );
}
    


export default Navbar


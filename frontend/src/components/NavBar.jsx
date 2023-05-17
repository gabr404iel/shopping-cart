import { AiFillShopping, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout'
import { useSelector, useDispatch } from 'react-redux';

export default function NavBar() {
    const [activeComponent, setActiveComponent] = useState('');
    const [menuToggle, setToggleMenu] = useState(false);
    const dispatch = useDispatch()
    const { logout } = useLogout()

    const { state } = useAuthContext()
    const { user } = state

    //retrive value from cart slice
    const cart = useSelector(cart => cart.cart.value)

    function handleNavClick(component) {
        setActiveComponent(component);
    }

    const handleLogout = () => {
        logout()
    }

    return (
        <nav className="navbar">
            <NavLink to='/' onClick={() => handleNavClick()}>
                <h2>SHOPPE</h2>
            </NavLink>
            <ul className='nav-links'>
                <li>
                    <NavLink to='/shop' onClick={() => handleNavClick('shop')}>
                        <p className={`nav-shop ${activeComponent === 'shop' ? 'active' : ''}`}>Shop</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/contact' onClick={() => handleNavClick('contact')}>
                        <p className={`nav-contact ${activeComponent === 'contact' ? 'active' : ''}`}>Contact Us</p>
                    </NavLink>
                </li>
                {user && <NavLink to='/cart' onClick={() => handleNavClick('cart')}>
                    <div className="nav-cart">
                        <AiFillShopping className="nav-cart-icon" />
                        <span className='nav-cart-quantity'>
                            <span>{cart.length || 0}</span>
                        </span>
                    </div>
                </NavLink>}
                {!user &&
                    <li>
                        <NavLink to='/cart' onClick={() => handleNavClick('cart')}>
                            <p className={`nav-cart-text ${activeComponent === 'cart' ? 'active' : ''}`}>
                                Cart
                            </p>
                        </NavLink>
                    </li>
                }

            </ul>
            <div className='navbar-smallscreen'>
                <AiOutlineMenu className='navbar-smallscreen_icon' fontSize={27} onClick={() => setToggleMenu(state => !state)} />
                {menuToggle && <div className='navbar-smallscreen_overlay'>
                    <ul className='overlay-links'>
                        <AiOutlineClose className='overlay_close' onClick={() => setToggleMenu(state => !state)} />
                        <li onClick={() => { setToggleMenu(state => !state); handleNavClick() }}><NavLink to='/'>Home</NavLink></li>
                        <li onClick={() => { setToggleMenu(state => !state); handleNavClick('shop') }}><NavLink to='/shop'>Shop</NavLink></li>
                        <li onClick={() => { setToggleMenu(state => !state); handleNavClick('contact') }}><NavLink to='/contact'>Contact</NavLink></li>
                        {!user && <li onClick={() => { setToggleMenu(state => !state); handleNavClick('login') }}><NavLink to='/login'>Login</NavLink></li>}
                        {user && <li onClick={() => { setToggleMenu(state => !state); handleNavClick('cart');}}><NavLink to='/cart'>Cart</NavLink></li>}
                    </ul>
                </div>}
            </div>
            {!user &&
                <NavLink to='/login' onClick={() => handleNavClick('login')}>
                    <div className="login-button">Login</div>
                </NavLink>
            }
            {user &&
                <div onClick={handleLogout}>
                    <div className="login-button">Logout</div>
                </div>
            }
        </nav>
    )
}
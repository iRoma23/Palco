import React, { useState } from 'react'
import { MenuItems } from './MenuItems'
import './Navbar.css'
import menuIcon from './icons/menu.svg'
import closeIcon from './icons/close.svg'
import Button from './Button'
import logo2 from '../../Assets/images/logo2.PNG'

// react-router-dom
import { Link, useNavigate } from 'react-router-dom'
// redux
import { useDispatch } from 'react-redux'
import { loginCliente, loginPropietario, logout } from '../../features/userSlice'
const Navbar = () => {
  const [clicked, setclicked] = useState(false);

  const handleClick = () => {
    setclicked(!clicked)
  }

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleClickLogout = () => {
    dispatch(logout());
    navigate('/')
  }

  return (
    <header>
      <nav className='NavbarItems'>

        <Link className='decoration-none' to='/home-propietario'>
          <img src={logo2} className="logo-palco"/>
        </Link>


        <div className='menu-icon' onClick={handleClick}>
          <img className='menu-icon__img' src={clicked ? closeIcon : menuIcon} />
        </div>
        <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={`${item.cName} nav-item`} to={item.url}>{item.title}</Link>
              </li>
            )
          })}

          <li>
            <button className='nav-links-mobile nav.item' onClick={handleClickLogout}>Cerrar Sesion</button>
          </li>
        </ul>
        <Button onClick={handleClickLogout} ></Button>
      </nav>
      <div className='fixed'></div>
    </header>
  )
}

export default Navbar
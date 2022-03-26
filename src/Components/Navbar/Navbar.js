import React, { useState } from 'react'
import { MenuItems } from './MenuItems'
import './Navbar.css'
import menuIcon from './icons/menu.svg'
import closeIcon from './icons/close.svg'
import Button from './Button'
import logoNav from '../../Assets/images/logo2.PNG'
// react-router-dom
import { Link } from 'react-router-dom'


const Navbar = () => {
  const [clicked, setclicked] = useState(false);

  const handleClick = () => {
    setclicked(!clicked)
  }

  return (
    <header>
      <nav className='NavbarItems'>
        
      <Link className='decoration-none' to='/home-propietario'>
        <h1 className='navbar-title'>Tu Palco</h1>
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
        </ul>
        <Button ></Button>
      </nav>
      <div className='fixed'></div>
    </header>
  )
}

export default Navbar
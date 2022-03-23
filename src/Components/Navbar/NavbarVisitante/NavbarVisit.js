import React, { useState } from 'react'
import { MenuItemsVisit } from './MenuItemsVisit'
import '../Navbar.css'
import menuIcon from '../icons/menu.svg'
import closeIcon from '../icons/close.svg'
import ButtonVisit from './ButtonVisit'
import { Link } from 'react-router-dom'

const NavbarVisit = () => {
  const [clicked, setclicked] = useState(false);

  const handleClick = () => {
    setclicked(!clicked)
  }

  return (
    <header>
      <nav className='NavbarItems'>
        
      <Link className='decoration-none' to='/'><h1 className='navbar-title'>Tu Palco</h1></Link>
       

        <div className='menu-icon' onClick={handleClick}>
          <img className='menu-icon__img' src={clicked ? closeIcon : menuIcon} />
        </div>
        <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItemsVisit.map((item, index) => {
            return (
              <li key={index}>
                <a className={`${item.cName} nav-item`} href={item.url}>{item.title}</a>
              </li>
            )
          })}
        </ul>
        <ButtonVisit></ButtonVisit>
      </nav>
      <div className='fixed'></div>
    </header>
  )
}

export default NavbarVisit
import React, { useState } from 'react'
import { MenuItemsCliente } from './MenuItemsCliente'
import '../Navbar.css'
import menuIcon from '../icons/menu.svg'
import closeIcon from '../icons/close.svg'
import ButtonCliente from './ButtonCliente'
import { Link } from 'react-router-dom'
import logo2 from "../../../Assets/images/logo2.PNG";

const NavbarCliente = () => {
  const [clicked, setclicked] = useState(false);

  const handleClick = () => {
    setclicked(!clicked)
  }

  return (
    <header>
      <nav className='NavbarItems'>

        <Link className='decoration-none text-cente' to='/'>
          <img className="img-fluid col-6" src={logo2} alt="TuPalco" />
        </Link>


        <div className='menu-icon' onClick={handleClick}>
          <img className='menu-icon__img' src={clicked ? closeIcon : menuIcon} />
        </div>
        <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItemsCliente.map((item, index) => {
            return (
              <li key={index}>
                <a className={`${item.cName} nav-item`} href={item.url}>{item.title}</a>
              </li>
            )
          })}
        </ul>
        <ButtonCliente></ButtonCliente>
      </nav>
      <div className='fixed'></div>
    </header>
  )
}

export default NavbarCliente
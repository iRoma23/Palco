import React, { useState } from 'react'
import { MenuItemsCliente } from './MenuItemsCliente'
import '../Navbar.css'
import menuIcon from '../icons/menu.svg'
import closeIcon from '../icons/close.svg'
import ButtonCliente from './ButtonCliente'
// react-router-dom
import { Link, useNavigate } from 'react-router-dom'
// redux
import { useDispatch } from 'react-redux'
import { filterRole } from '../../../reducers/roleReducer'

const NavbarCliente = () => {
  const [clicked, setclicked] = useState(false);

  const handleClick = () => {
    setclicked(!clicked)
  }

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleClickLogout = () => {
    dispatch(filterRole('VISITANTE'));
    navigate('/')
  }

  const handleClickLoginPropietario = () => {
    dispatch(filterRole('PROPIETARIO'));
    navigate('/home-propietario')
  }

  return (
    <header>
      <nav className='NavbarItems'>
        
      <Link className='decoration-none' to='/'><h1 className='navbar-title'>Tu Palco</h1></Link>
       

        <div className='menu-icon' onClick={handleClick}>
          <img className='menu-icon__img' src={clicked ? closeIcon : menuIcon} />
        </div>
        <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItemsCliente.map((item, index) => {
            return (
              <li key={index}>
                <Link className={`${item.cName} nav-item`} to={item.url}>{item.title}</Link>
              </li>
            )
          })}
          <li>
            <div className='nav-links nav.item' onClick={handleClickLogout}>Salir</div>
          </li>
          <li>
            <button className='nav-links-mobile nav.item' onClick={handleClickLoginPropietario}>Propietario</button>
          </li>
        </ul>
        <ButtonCliente onClick={handleClickLoginPropietario}></ButtonCliente>
      </nav>
      <div className='fixed'></div>
    </header>
  )
}

export default NavbarCliente
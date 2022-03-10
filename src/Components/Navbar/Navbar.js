<<<<<<< HEAD
import React from 'react'

const Navbar = () => {
    return (
        <>

            <div className="App">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#">Disabled</a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>
        </>
    )
}
=======
import React, { useState } from 'react'
import { MenuItems } from './MenuItems'
import './Navbar.css'
import menuIcon from './icons/menu.svg'
import closeIcon from './icons/close.svg'
import Button from './Button'

const Navbar = () => {
  const [clicked, setclicked] = useState(false);
  
  const handleClick = () => {
    setclicked(!clicked)
  }

  return (
    <>
    <nav className='NavbarItems'>
      <h1 className='navbar-title'>Mi Palco</h1>
      <div className='menu-icon' onClick={handleClick}>
        <img className='menu-icon__img' src={clicked ? closeIcon : menuIcon} />
      </div>
      <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
        {MenuItems.map((item, index) => {
          return(
            <li key={index}>
              <a className={`${item.cName} nav-item`} href={item.url}>{item.title}</a>
            </li>
          )
        })}
      </ul>
      <Button txt={"Salir"}></Button>
    </nav>
    <div className='fixed'></div>
    </>
  )
} 
>>>>>>> 4301b6e285f7d5f82eda3dc893b0465ac62f3afe

export default Navbar
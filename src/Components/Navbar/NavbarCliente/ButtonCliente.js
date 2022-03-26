import React from 'react'
import '../Button.css'
import { MenuButtonItem } from './MenuItemsCliente'
import { Link } from 'react-router-dom'


const STYLES = [
  'btn--primary',
  'btn--outline'
]

const SIZES = [
  'btn--medium',
  'btn--large'
]

const ButtonCliente = ({type, onClick, buttonStyle, buttonSize}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link className='decoration-none display-none' to='/'>
      <button className={`button ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
        {MenuButtonItem}
      </button>
    </Link>
  )
}

export default ButtonCliente
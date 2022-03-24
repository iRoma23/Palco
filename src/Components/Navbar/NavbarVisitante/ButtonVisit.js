import React from 'react'
import '../Button.css'
import { MenuButtonItem } from './MenuItemsVisit'
import { Link } from 'react-router-dom'


const STYLES = [
  'btn--primary',
  'btn--outline'
]

const SIZES = [
  'btn--medium',
  'btn--large'
]

const ButtonVisit = ({type, onClick, buttonStyle, buttonSize}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link className='decoration-none' to='/login'>
      <button className={`button ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
        {MenuButtonItem}
      </button>
    </Link>
  )
}

export default ButtonVisit
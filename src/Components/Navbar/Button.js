import React from 'react'
import './Button.css'
import { MenuButtonItem } from './MenuItems'


const STYLES = [
  'btn--primary',
  'btn--outline'
]

const SIZES = [
  'btn--medium',
  'btn--large'
]


const Button = ({type, onClick, buttonStyle, buttonSize}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button className={`button ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>{MenuButtonItem}</button>
  )
}

export default Button
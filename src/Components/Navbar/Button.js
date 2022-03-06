import React from 'react'
import './Button.css'

const STYLES = [
  'btn--primary',
  'btn--outline'
]

const SIZES = [
  'btn--medium',
  'btn--large'
]


const Button = ({txt, type, onClick, buttonStyle, buttonSize}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button className={`button ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>{txt}</button>
  )
}

export default Button
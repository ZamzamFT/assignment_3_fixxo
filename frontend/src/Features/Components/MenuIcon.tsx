import React from 'react'
import { NavLink } from 'react-router-dom'
import { MenuIconModel } from '../Models/MenuIconModel'


const MenuIcon: React.FC<MenuIconModel> = ({ link, icon, quantity, hideOnMobile, hideOnTablet }) => {
  return (
    <NavLink className={`menu-icon ${hideOnMobile ? "d-none d-md-flex" : ""} ${hideOnTablet ? "d-none d-lg-flex" : ""}  `} to={link} end>
      <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-accent '>{quantity}</span>
        <i className={icon}></i>
    </NavLink>
    
  )
}
export default MenuIcon
import React from 'react'
import { NavLink } from 'react-router-dom'
interface Props {
    link: string
    title: string
    styleling: string
}

const GeneralButton: React.FC<Props> = ({link, title, styleling}) => {
  return (
    <NavLink to={link} className={styleling} end>
        <span className="corner-left"></span>
        <span className="corner-right"></span>
        {title}
    </NavLink>
  )
}

export default GeneralButton
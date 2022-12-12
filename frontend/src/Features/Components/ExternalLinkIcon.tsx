import React from 'react'

interface ExternalLinkIconProps {
     link: string
     icon: string
}

const ExternalLinkIcon: React.FC<ExternalLinkIconProps> = ({link, icon}) => {
  return (
    <a href={link} >
        <i className={icon}></i>
    </a>
  )
}
export default ExternalLinkIcon
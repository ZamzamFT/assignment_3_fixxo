import React from 'react'

interface Props {
  src: string
  title: string
  description: string
}


const InfoBox: React.FC<Props> = (props) => {
  return (
     <div className="info-box">
        <img src={props.src}  alt="placeholder" />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
    </div>
  )
}

export default InfoBox
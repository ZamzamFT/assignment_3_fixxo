import React from 'react'

interface Props {
    alertType: string
    text: string
    title: string

}

const AlertNotification: React.FC<Props> = ({alertType = "Warning", title, text}) => {
  return (
    <>
        <div className={`alert alert-${alertType} text-center`} role='alert'>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    </>
  )
}

export default AlertNotification
import React from 'react'

const Map: React.FC = () => {
  return (
    <>
        <iframe title="google-map"
        className="google-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24886.449116877866!2d2.320016822383122!3d48.85923502960564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20Frankrike!5e0!3m2!1ssv!2sse!4v1668306165418!5m2!1ssv!2sse" 
        allowFullScreen={true} 
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade">
        </iframe>
     </>
  )
}

export default Map
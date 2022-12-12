import React, { useState } from 'react'
import AlertNotification from '../FormValidation/AlertNotification'
import { validateEmail, validateText } from '../FormValidation/ContactFormValidation'

interface contactFormData  {
  name: string
  email: string
  comments: string

}


const ContactForm: React.FC = () => {
document.title = 'Contact | Fixxo.'

const DEFAULT_VALUES: contactFormData = {name: '' , email: '', comments: ''}

const [formData, setFormdata] = useState<contactFormData> (DEFAULT_VALUES)
const [errors, setErrors] = useState<contactFormData> (DEFAULT_VALUES)

const [submitted, setSubmitted] = useState<boolean>(false)
const [failedSubmit, setFaildSubmit] = useState<boolean>(false)

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { 
  const {id, value}  = e.target 
  setFormdata({...formData, [id]: value})

  if(id === 'name') 
     setErrors({...errors, [id]: validateText(id, value)}) 

  if(id === 'email') 
    setErrors({...errors, [id]: validateEmail(id, value)}) 
} 



const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  const {id, value}  = e.target 
  setFormdata({...formData, [id]: value})
  if(id === 'comments') 
     setErrors({...errors, [id]: validateText(id, value, 5)})
}



const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setSubmitted(false)
  setFaildSubmit(false)

  if (formData.name !== '' && formData.email !== '' && formData.comments !== '')
     if(errors.name === '' && errors.email === '' && errors.comments === '') {


       const res = await fetch('https://win22-webapi.azurewebsites.net/api/contactform', {
          method: 'post',
          headers: {
            'contenet-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        })

        if(res.status === 200) {
          setSubmitted(true)
          setFormdata(DEFAULT_VALUES)
        } else {
          setSubmitted(false)
          setFaildSubmit(true)



        }


     }


    
}



  return (
      <section className='contact-form'> 
        <div className='container'>
          { submitted ? (<AlertNotification alertType="success" title="Thank you for your feedback. " text="We will be in contact with you as soon as possible." />) : (<></>)}
          { failedSubmit ? (<AlertNotification alertType="danger" title="Somthing Went Wrong!" text="We couldnt submit your comment right now." />) : (<></>)}
        
        <h2>Come in Contact with us</h2>

        <form onSubmit={handleSubmit} noValidate>
          <div>
            <input id='name' className={(errors.name ? 'error': '')}   type='text' value={formData.name} onChange={(e) => handleChange(e)}  placeholder='Your Name' />
            <div className='errorMessage'>{errors.name}</div>
          </div>
          <div>
            <input id='email'  type='email' placeholder='Your Mail' className={(errors.email ? 'error': '')}   value={formData.email} onChange={(e) => handleChange(e)}/>
            <div className='errorMessage'>{errors.email}</div>
          </div>
          <div className='textarea'>
            <textarea id="comments"  placeholder='Comments' className={(errors.comments ? 'error': '')}  value={formData.comments} style={(errors.comments ? {border: '1px solid #ff7373'}: {} )} onChange={(e) => handleTextAreaChange(e)}></textarea>
            <div className='errorMessage'>{errors.comments}</div>
          </div>
          <div className='form-btn'>
            <button type='submit' className='btn-theme'>Post Comments</button>
          </div>
          </form>
      </div>
    </section>
  )
}
export default ContactForm
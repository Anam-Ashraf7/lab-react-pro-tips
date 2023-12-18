import React, { useEffect, useState } from 'react'

function Registration() {

    const [field,setField] = useState({
        firstName: "",
        lastName: "",
        email:"",
        phone:""
    })

    useEffect(() => {
        setValidate(false)
    },[field])

    const [submitted,setSubmitted] = useState(false)
    const [validate,setValidate] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
        if(field.firstName && field.lastName && field.email && field.phone) {
            setValidate(true)
        }
        
    }

  return (
    <div id='form'>
        <form>
            {submitted && validate ? <h1 id='success'>Registration Successful</h1>: null }
            <div className='input-field'>    
                <input type="text" placeholder='First Name' value={field.firstName} onChange={(e) => setField({...field,firstName:e.target.value})} />
                {submitted && !field.firstName ? <p>First name is required</p>: null }
            </div>
            <div className='input-field'>
                <input type="text" placeholder='Last Name' value={field.lastName} onChange={(e) => setField({...field,lastName:e.target.value})} />
                {submitted && !field.lastName ? <p>Last name is required</p>: null }
            </div>
            <div className='input-field'>
                <input type="email" placeholder='Email' value={field.email} onChange={(e) => setField({...field,email:e.target.value})} />
                {submitted && !field.email ? <p>Email is required</p>: null }
            </div>
            <div className='input-field'>
                <input type="number" placeholder='Phone Number'value={field.phone} onChange={(e) => setField({...field,phone:e.target.value})} />
                {submitted && !field.phone ? <p>Phone number is required</p>: null }
            </div>
            <button type='submit' onClick={handleSubmit}>Register</button>
        </form>
    </div>
  )
}

export default Registration
import { useState } from 'react'    
import '../App.css'

function Rf() {
  const [field, setfield] = useState({
    firstName : "",
    lastName : "",
    email : "",
    phone : "",
  })
  
  const [validation, setValidation] = useState(false)
  const [submit, setSubmit] = useState(false)

  const handleSubmit = (e) => {
    setSubmit(true)
    e.preventDefault()
    if(field.firstName && field.lastName && field.email && field.phone){
      setValidation(true)
    }
  }

 { console.log(field)}

  return (
    <>
      <h1 className="hello">Registration Form</h1>
      <form onSubmit={(e)=> handleSubmit(e)}>

        {submit && validation?<div>Registration Sucessful</div>:null}

        <input type="text" value={field.firstName} onChange={(e)=>{setfield({...field, firstName:e.target.value})}} placeholder='Enter First Name'/><br/>
        {submit && !field.firstName ? <p>Please Enter your First Name</p>:null}

        <input type="text" value={field.lastName} onChange={(e)=>{setfield({...field, lastName:e.target.value})}} placeholder='Enter Last Name'/><br/>
        {submit && !field.lastName ? <p>Please Enter your Last Name</p>:null}
        
        <input type="email" value={field.email} onChange={(e)=>{setfield({...field, email:e.target.value})}} placeholder='Enter Email'/><br/>
        {submit && !field.email ? <p>Please Enter your Email</p>:null}

        <input type="number" value={field.phone} onChange={(e)=>{setfield({...field, phone:e.target.value})}} placeholder='Enter Phone Number'/><br/>
        {submit && !field.phone ? <p>Please Enter your Phone</p>:null}

        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default Rf

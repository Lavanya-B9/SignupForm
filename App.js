import React, { useEffect, useState } from 'react'
const App = () => {
  const[formValues,setFormValues]=useState({
    username:'',
    email:'',
    password:''
  })
  const[formErrors,setFormErrors] = useState({})
  //destructuring the form values
  const {username,email,password}= formValues;
  //onchange event handler
  const changeHandler = (e) =>{
    setFormValues({...formValues,[e.target.name]:e.target.value})
  }
  //onsubmit event handler
  const submitHandler = (e) =>{
    e.preventDefault();
     setFormErrors(validate(formValues));
   }

   useEffect(() =>{
      if(Object.keys(formErrors).length === 0){
        console.log(formValues);
       }
   },[formErrors])
  // create validation function for checking the form values 
  const validate = (values) =>{
    const errors = {}
    if(!values.username){
      errors.username = "Username is required"
    }
    if(!values.email){
      errors.email = "Email is required"
    }
     if(!values.password){
      errors.password = "Password is required"
     }
     else if(values.password.length < 5){
      errors.password = "Password must be 5 characters"
    } else if(values.password.length > 8){
      errors.password = "Password shouldnot exceed 8 characters"
    }
    
    return errors;

  }
  return (
  <div className='container'>
    <form onSubmit={submitHandler}>
    <h3>Register</h3>
    <label>Username</label><br/>
  <input 
    type='text' 
    placeholder='Username'
    name='username' 
    value={username} 
    onChange={changeHandler}/><br/>
    <p style={{color:'red'}}>{formErrors.username}</p>

    <label>Email</label><br/>
  <input 
    type='email' 
    placeholder='Email' 
    name='email' 
    value={email}
     onChange={changeHandler}/><br/>
    <p style={{color:'red'}}>{formErrors.email}</p>
    
    <label>Password</label><br/>
  <input 
    type='text' 
    placeholder='Password'
    name='password'
    value={password} 
    onChange={changeHandler}/><br/><br/>
    <p style={{color:'red'}}>{formErrors.password}</p>
    <button>Register</button>
    </form>
    </div>
    )
}

export default App
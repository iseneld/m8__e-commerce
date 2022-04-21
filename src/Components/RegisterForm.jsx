import { useState, useEffect, useContext } from 'react'
import { BiArrowBack } from "react-icons/bi";
import {UserContext} from "../App";


function RegisterForm() {

  const {setToken} = useContext(UserContext);
 async function RegisterRequest(e) {
  e.preventDefault();
  if (formData.password === formData.password2) {
      const settings = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }

    try {
      const registerUser = await fetch('http://localhost:5000/users/register', settings)
      const user = await registerUser.json()
      console.log('Response: ', user);
      setToken(user.token);

    } catch(error) {
      console.log(error);
    }

    

  } else {
    return console.log('Invalid password');
  }
}
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
  })

  function onChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    console.log(formData);
  }, [formData])
  
  return (
    <section className="wrapper-content">
      {/*       <section className="form-wrapper"> */}
      <section className="register-form">
        <h1 className="heading heading--formHeading">REGISTER USER</h1>
        <form className="form" onSubmit={RegisterRequest}> 

          <h5 className="form-title">Username</h5>
          <input
            type='text'
            className="form-control"
            id="username"
            name="username"
            value={formData.username}
            placeholder="Username"
            onChange={onChange}
          />
          <h5 className="form-title">Email</h5>
          <input
            type='email'
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            placeholder="Email"
            onChange={onChange}
          />
          <h5 className="form-title">Password</h5>
          <input
            type='password'
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            placeholder="Password"
            onChange={onChange}
          />
          <h5 className="form-title">Confirm password</h5>
          <input
            type='password'
            className="form-control"
            id="password2"
            name="password2"
            value={formData.password2}
            placeholder="Confirm password"
            onChange={onChange}
          />
          <div className="btns">
            <button className="back-btn"><BiArrowBack size={30} /></button>
            <button type="submit" className="btn">Continue</button>
          </div>
        </form>
      </section>
      {/*       </section> */}
    </section>
  )
};

export default RegisterForm;
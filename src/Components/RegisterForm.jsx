import { useState, useEffect } from 'react'

function RegisterForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
  })

  const { username, email, password, password2 } = formData

  return (
    <section className="wrapper-content">
      {/*       <section className="form-wrapper"> */}
      <section className="register-form">
        <h1 className="heading heading--formHeading">REGISTER USER</h1>
        <form className="form"> {/* onSubmit={onSubmit} */}

          <h5 className="form-title">Username</h5>
          <input
            type='text'
            className="form-control"
            id="username"
            name="username"
            value={username}
            placeholder="Username"
          //   onChange={onChange}
          />
          <h5 className="form-title">Email</h5>
          <input
            type='email'
            className="form-control"
            id="email"
            name="email"
            value={email}
            placeholder="Email"
          //   onChange={onChange}
          />
          <h5 className="form-title">Password</h5>
          <input
            type='password'
            className="form-control"
            id="password"
            name="password"
            value={password}
            placeholder="Password"
          //   onChange={onChange}
          />
          <h5 className="form-title">Confirm password</h5>
          <input
            type='password'
            className="form-control"
            id="password2"
            name="password2"
            value={password2}
            placeholder="Confirm password"
          //   onChange={onChange}
          />
          <div className="btns">
            <button>back</button>
            <button type="submit" className="btn">Continue</button>
          </div>
        </form>
      </section>
      {/*       </section> */}
    </section>
  )
};

export default RegisterForm;
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
        <h1 className="form-heading">REGISTER USER</h1>
        <form className="form"> {/* onSubmit={onSubmit} */}

          <h5 className="form-title">UserName</h5>
          <div className="form-group">
            <input
              type='text'
              className="form-control"
              id="username"
              name="username"
              value={username}
              placeholder="Username"
            //   onChange={onChange}
            />
          </div>
          <h5 className="form-title">Email</h5>
          <div className="form-group">
            <input
              type='email'
              className="form-control"
              id="email"
              name="email"
              value={email}
              placeholder="Email"
            //   onChange={onChange}
            />
          </div>
          <h5 className="form-title">Password</h5>
          <div className="form-group">
            <input
              type='password'
              className="form-control"
              id="password"
              name="password"
              value={password}
              placeholder="Password"
            //   onChange={onChange}
            />
          </div>
          <h5 className="form-title">Confirm password</h5>
          <div className="form-group">
            <input
              type='password'
              className="form-control"
              id="password2"
              name="password2"
              value={password2}
              placeholder="Confirm password"
            //   onChange={onChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn">Continue</button>
          </div>
        </form>
      </section>
      {/*       </section> */}
    </section>
  )
};

export default RegisterForm;
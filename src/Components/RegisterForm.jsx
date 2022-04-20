import { useState, useEffect } from 'react'

function RegisterForm() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password:'',
        password2:'',
    })

    const { username, email, password, password2 } = formData

    return (
    <div className='form-container'>
      <section className="wrapper">
          <section className="form-wrapper">
              <section className="heading"><h1>REGISTER USER</h1></section>
              <section className="register-form">
                  <form > {/* onSubmit={onSubmit} */}
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
          </section>
      </section>
      </div>
    )};
  
  export default RegisterForm;
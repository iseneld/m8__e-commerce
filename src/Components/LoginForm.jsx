import { useState, useEffect } from 'react'
import { BiArrowBack } from "react-icons/bi";

function LoginForm() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const { email, password } = formData

    return (
        <section className="wrapper-content">
            {/*       <section className="form-wrapper"> */}
            <section className="register-form register-form--login-form">
                <h1 className="heading heading--formHeading heading--loginHeading">Login</h1>
                <form className="form"> {/* onSubmit={onSubmit} */}
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
                    <p className="forgot-txt">Forgot Password?</p>
                    <div className="btns">
                        <button className="back-btn"><BiArrowBack size={30} /></button>
                        <button type="submit" className="btn">Login</button>
                    </div>
                </form>
            </section>
            {/*       </section> */}
        </section>
    )
};

export default LoginForm;
import { useState, useEffect } from 'react'
import { BiArrowBack } from "react-icons/bi";

function LoginForm() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const { username, password } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        // Put settings into another helper JS file, register too
        const settings = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        }

        try {
            const loginUser = await fetch('http://localhost:5000/users/login', settings);
            const user = await loginUser.json();
            localStorage.setItem('currentUser', JSON.stringify({token: user.token, userName: user.username}));

        } catch(err) {
            alert("Incorrect input data. Please try something else.");
            console.log(err);
        }


        // console.log(JSON.parse(localStorage.getItem('currentUser')));
    }

    return (
        <section className="wrapper-content">
            {/*       <section className="form-wrapper"> */}
            <section className="register-form register-form--login-form">
                <h1 className="heading heading--formHeading heading--loginHeading">Login</h1>
                <form className="form" onSubmit={onSubmit} > 
                    <h5 className="form-title">Username</h5>
                    <input
                        type='text'
                        className="form-control"
                        id="username"
                        name="username"
                        value={username}
                        placeholder="Username"
                       onChange={onChange}
                       required
                    />
                    <h5 className="form-title">Password</h5>
                    <input
                        type='password'
                        className="form-control"
                        id="password"
                        name="password"
                        value={password}
                        placeholder="Password"
                       onChange={onChange}
                       required
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
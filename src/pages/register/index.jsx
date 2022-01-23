import React, { useState } from 'react';
import { Login, Signup } from "../../functions"
import { useNavigate } from "react-router-dom";
import "./styles.scss"
import RegisterForm from "../../components/loginForm"
import Header from "../../components/header"

const Register = () => {

	const [option, setOption] = useState("sign-in")
	
	const navigate = useNavigate();

	const handleClick = e => setOption(e.target.id)

    const handleRegister = evt => {
        evt.preventDefault()
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value
        let body = {
            email,
            password
        }
        if(option === "sign-up"){
            const username = document.getElementById("username").value
            body = {...body, username }
        } 
        option === "sign-up" ?
        Signup(body).then(res => console.log(res)).catch(err => console.log(err))
        :
        Login(body).then(() => navigate("/")).catch(err => console.log(err))
    }

    const toggleTheme = () => {
        var modeSwitch = document.querySelector('.mode-switch');
        document.documentElement.classList.toggle('dark');
        modeSwitch.classList.toggle('active');
    }
	
	return ( 
        <div className='app-container'>
            <Header toggleTheme={toggleTheme}/>
            <div className='auth-container'>
                <ul className='options' onClick={handleClick}>
                    <li id="sign-in" className={option === "sign-in" ? 'active' : ''}>Sign in</li>
                    <li id="sign-up" className={option === "sign-up" ? 'active' : ''}>Sign up</li>
                </ul>
                <RegisterForm option={option} handleRegister={handleRegister}/>
            </div>
        </div>
	)
}

export default Register;
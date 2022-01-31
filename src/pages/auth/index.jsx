import React, { useState } from 'react';
import { Login, Signup } from "../../functions/apis"
import { useNavigate } from "react-router-dom";
import "./styles.scss"
import RegisterForm from "../../components/loginForm"
import PageWrapper from '../../components/pageWrapper'

const Auth = () => {

	const [option, setOption] = useState("sign-in")
    const [loading, setLoading] = useState(false)
	
	const navigate = useNavigate();

	const handleClick = e => setOption(e.target.id)

    const handleRegister = evt => {
        evt.preventDefault()
        setLoading(true)
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
        Signup(body).then(() => {
            setLoading(false)
            setOption('sign-in')
        }).catch(err => console.log(err))
        :
        Login(body).then(() => {
            setLoading(false)
            navigate("/")
        }).catch(err => console.log(err))
    }
	
	return ( 
        <PageWrapper className='flex-column auth-container'>
            <ul className='options' onClick={handleClick}>
                <li id="sign-in" className={option === "sign-in" ? 'active' : ''}>Sign in</li>
                <li id="sign-up" className={option === "sign-up" ? 'active' : ''}>Sign up</li>
            </ul>
            <RegisterForm loading={loading} option={option} handleRegister={handleRegister}/>
        </PageWrapper>
	)
}

export default Auth;
import React from 'react';
import './styles.scss'

const RegisterForm = ({ option, handleRegister }) => {
	return (
		<form className='account-form' onSubmit={handleRegister}>
			<div className={`account-form-fields ${option}`}>
				<input id='email' name='email' type='email' placeholder='E-mail' required />
				<input id='password' name='password' type='password' placeholder='Password' required/>
                <input id='username' name='username' type='text' placeholder='Username' required disabled={option === "sign-in"} />
			</div>
			<button className='btn-submit-form' type='submit'>{option.replace("-", " ")}</button>
		</form>
	)
}

export default RegisterForm
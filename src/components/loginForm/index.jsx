import React from 'react';
import './styles.scss'

const RegisterForm = ({ option, handleRegister, loading }) => {
	return (
		<form className='account-form' onSubmit={handleRegister}>
			<div className={`account-form-fields ${option}`}>
				<input id='email' name='email' type='email' placeholder='E-mail' required />
				<input id='password' name='password' type='password' placeholder='Password' required/>
                <input id='username' name='username' type='text' placeholder='Username' required disabled={option === "sign-in"} />
			</div>
			<button className='btn-submit-form' type='submit'>{loading ? option === "sign-in" ? 'signing you in...' : 'signing you up...' : option.replace("-", " ")}</button>
		</form>
	)
}

export default RegisterForm
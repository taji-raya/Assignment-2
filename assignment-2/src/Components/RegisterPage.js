import React from 'react'

function RegisterPage() {
    return (
        <div>
            <div className='loginFormContainer'>
                <p> <strong>Create a new account </strong></p>
                <p> Already a user?  <a href='/LoginPage'>Login here</a>.</p>
                <form>
                    <span>Username</span>
                    <label for='username' />
                    <br />
                    <input id='username' type='text' name='username' />
                    <br />
                    <span>Password</span>
                    <label for='password' />
                    <input id='password' type='password' name='password' />
                    <br />
                    <span>Confirm Password</span>
                    <label for='confirmPassword' />
                    <input id='confirmPassword' type='password' name='confirmPassword' />

                    <br />
                    <span>Email</span>
                    <label for='email' />
                    <input id='email' type='text' name='email'></input>
                    <input id='register_button' type='submit' value='Register' />
                </form>
            </div>

        </div>
    )
}

export default RegisterPage

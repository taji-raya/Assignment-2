import React from 'react'

function LoginPage() {
    return (
        <div>
            <div className='loginFormContainer'>
                <p> <strong>Login to your exsisting account </strong></p>
                <p>or register <a href='/RegisterPage'>here</a>.</p>
                <form>
                    <span>Username</span>
                    <label for='username' />
                    <br />
                    <input id='username' type='text' name='username' />
                    <br />
                    <span>Password</span>
                    <label for='password' />
                    <br />
                    <input id='password' type='password' name='password' />
                    <input id='login_button' type='submit' value='Login' />
                </form>
            </div>

        </div >
    )
}

export default LoginPage

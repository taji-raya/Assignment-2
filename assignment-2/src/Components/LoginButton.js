import React from 'react'
import { useNavigate } from 'react-router-dom'

function LoginButton() {
    const navigate = useNavigate();
    return (
        <div>
            <button className='logBtn' onClick={() => {
                navigate('/LoginPage');
            }}><strong>Login </strong></button>
        </div>
    )
}

export default LoginButton

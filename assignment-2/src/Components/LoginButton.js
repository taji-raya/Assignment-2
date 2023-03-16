import React from 'react'
import { useNavigate } from 'react-router-dom'

function LoginButton() {
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={() => {
                navigate('/LoginPage');
            }}>LOGIN</button>
        </div>
    )
}

export default LoginButton

import React from 'react'
import { useNavigate } from 'react-router-dom'

function RegisterButton() {
    const navigate = useNavigate();
    return (
        <div >
            <button className='regBtn' onClick={() => {
                navigate('/RegisterPage');
            }}><strong> Join TMDB</strong></button>
        </div>
    )
}

export default RegisterButton

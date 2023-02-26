import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
function SharedLayouts() {
    return (
        <>
            <Navbar />
            <Outlet/>
        </>
    )
}

export default SharedLayouts

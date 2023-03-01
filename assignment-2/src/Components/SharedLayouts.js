import React from 'react'
import { Outlet } from 'react-router-dom'
import NavigationBar from './NavigationBar'
function SharedLayouts() {
    return (
        <>
            <NavigationBar />
            <Outlet />
        </>
    )
}

export default SharedLayouts

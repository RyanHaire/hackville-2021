import React, { useState, useEffect } from 'react'

const SidebarNav = () => {

    const [toggleSidebar, setToggleSidebar] = useState(true)

    const classToggle = toggleSidebar ? 'slide-out' : 'slide-in'
    const changeColor = toggleSidebar ? 'menu-line--green' : 'menu-line--white'
    const show = toggleSidebar ? 'd-none' : 'd-block'

    useEffect(() => {
        setToggleSidebar(true)
    }, [])

    return (
        <div className="menu">
            <i className={`fa menu-line ${changeColor}`} onClick={() => setToggleSidebar(!toggleSidebar)}/>
            <nav className={`sidebar-nav ${classToggle}`}>
                <a className={`sidebar-nav-item ${show}`} href="#">Account Info</a>
                <a className={`sidebar-nav-item ${show}`}  href="#">Savings</a>
                <a className={`sidebar-nav-item ${show}`}  href="#">Friends</a>
                <a className={`sidebar-nav-item ${show}`}  href="#">Privacy</a>
                <a className={`sidebar-nav-item ${show}`}  href="#">System Preferences</a>
                <a className={`sidebar-nav-item ${show}`}  href="#">Help & Support</a>
                <a className={`sidebar-nav-item ${show}`}  href="#">Premium</a>
            </nav>
        </div>
    )
}

export default SidebarNav

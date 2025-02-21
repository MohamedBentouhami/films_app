import React from 'react'
import Menu from './Menu.jsx'

function Header() {
    return (
        <div className='header'>
            <h1 className='title'>CineManiac</h1>
            <Menu/>
        </div>
    )
}

export default Header
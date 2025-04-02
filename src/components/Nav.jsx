import React from 'react'
import { Link } from "react-router-dom"
import useCount from '../Hook/useCount'

const Nav = () => {
    const { totalBooks } = useCount()
    return (
        <nav>
            <div className='logo'>BookStack</div>
            <div className='links'>
                <Link to="/" className="nav-link">
                    All Books({totalBooks})
                </Link>
                <Link to="/addBook" className="nav-link">
                    Add Book
                </Link>
            </div>
        </nav>
    )
}

export default Nav

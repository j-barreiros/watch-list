import React from 'react'
import { useNavigate } from 'react-router-dom';

// Style
import StyledNavbar from './StyledNavbar';

function Navbar() {

    const navigate = useNavigate();
    return (
        <StyledNavbar className='container'>
            <h1 className='app_logo'>Watch_List</h1>

            <nav className='navbar'>
                <p className='navbar-item' onClick={() => navigate('/')}>Search</p>
                <p className='navbar-item' onClick={() => navigate('/watched')}>Watched</p>
                <p className='navbar-item' onClick={() => navigate('/wanttowatch')}>Want to watch</p>
            </nav>
        </StyledNavbar>
    )
}

export default Navbar;
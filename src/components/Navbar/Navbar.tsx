import React from 'react'

import { useNavigate } from 'react-router-dom';

function Navbar() {

    const navigate = useNavigate();
    return (
        <ul>
            <li onClick={() => navigate('/')}>Search</li>
            <li onClick={() => navigate('/watched')}>Watched</li>
            <li onClick={() => navigate('/wanttowatch')}>Want to watch</li>
        </ul>
    )
}

export default Navbar
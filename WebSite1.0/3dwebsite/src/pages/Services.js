import React from 'react'
import '../Pagestyles/Services.css'
import { Link } from 'react-router-dom';


function Services(){
    return (
        <div className='Services'>
            <p>
                huh
            </p>
            <div className='floating-nav'>
                <Link to="/" className='float-btn'>
                    <span className='float-icon'>🏠</span>
                    Home
                </Link>
                <Link to="/login" className='float-btn'>
                    <span className='float-icon'>👤</span>
                    Login
                </Link>
            </div>
        </div>
    );
}

export default Services;
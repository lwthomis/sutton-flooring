import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import creamLogo from '../images/logo-cream.png';

export default class NavBar extends Component {

    render() {
        return (
            <div>
                <div className='navigation-wrapper'>
                    <div className='business-logo'>
                            <img src={creamLogo} alt='Sutton Logo' />
                    </div>                     

                    <div className='nav-link-wrapper'>    
                        <Link to='/'>Home</Link>
                        <Link to='/work'>Past Work</Link>
                        <Link to='/contact'>Contact Us</Link>
                    </div>
                </div>
            </div>
        )
    }
}
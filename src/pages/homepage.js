import React, { Component } from 'react'

import Test from '../images/test-image.jpeg'

export default class Homepage extends Component {
    render() {
        return (
            <div className='homepage-wrapper'>
                <h1>Specializing in Commercial &amp; Residential Flooring Installation Since 2005</h1>
                <div className='main-content-wrapper'>
                    <div className='services-wrapper'>
                        <h2>We offer the following services:</h2>
                        <ul>
                            <li>Solid &amp; Engineered Hardwood Flooring</li>
                            <li>Luxury Vinyl Planks (LVP)</li>
                            <li>Luxury Vinyl Tile (LVT)</li>
                            <li>Carpet Installation</li>
                            <li>Laminate Flooring</li>
                            <li>Stone Tile</li>
                            <li>Porcelain Tile</li>
                            <li>Kitchen &amp; Bath Backsplash</li>
                            <li>Showers &amp; Tub Surrounds</li>
                        </ul>

                        <h3>Serving Paducah, KY and <br/> surrounding areas since 2005.</h3>
                    </div>
                    
                    <img src={Test} alt=''/>
                </div>
            </div>
        )
    }
}

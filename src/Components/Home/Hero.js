import React from 'react'
import {Link} from "react-router-dom"
const Hero = () => {
  return (
    <section className='hero'>
        <div className='heroLeft'>
            <div className='headersHero'>
            <h1>Little Lemon</h1>
            <h4 className='headers'>Chicago</h4>
            </div>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <Link to="/bookingPage" className="buttonLink">Reserve Table</Link>
        </div>
        <div className='heroRight'>
            <img src="restauranfood.jpg" width="80%" height="100%" alt='Cheif holding a plate'/>
        </div>
    </section>
  )
}

export default Hero
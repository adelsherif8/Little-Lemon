import React from 'react'
import Nav from './Nav'
const Footer = () => {
  return (
    <footer>
        <img className='logo' src='logo.svg' alt="Logo for the Little Lemon Restaurent"/>
        <section aria-label="Doormat Navigation">
        <h4>Doormat Navigation</h4>
        <Nav/>
        </section>

        <section aria-label="contact-heading">
        <h4>Contact</h4>
        <ul>
            <a href=''><li>Addres</li></a>
            <a href=''><li>phone number</li></a>
            <a href=''><li>email</li></a>
        </ul>
        </section>

        <section aria-label="social-media-heading">
        <h4>Follow Us</h4>
        <ul>
            <a href=''><li>Instagram</li></a>
            <a href=''><li>Facebook</li></a>
            <a href=''><li>X</li></a>
            <a href=''><li>Tiktok</li></a>
        </ul>
        </section>
    </footer>
  )
}

export default Footer
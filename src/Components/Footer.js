import React from 'react'
import Nav from './Nav'
const Footer = () => {
  return (
    <footer>
        <img src='logo.svg'/>
        <section aria-label="Doormat Navigation">
        <h6>Doormat Navigation</h6>
        <Nav/>
        </section>

        <section aria-label="contact-heading">
        <h6>Contact</h6>
        <ul>
            <a href=''><li>Addres</li></a>
            <a href=''><li>phone number</li></a>
            <a href=''><li>email</li></a>
        </ul>
        </section>

        <section aria-label="social-media-heading">
        <h6>Follow Us</h6>
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
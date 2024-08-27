import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Hero from './Hero'
import Specials from './Specials'
import CustomersSay from './CustomersSay'
import Chicago from './Chicago'

const Homepage = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <Specials/>
    <CustomersSay/>
    <Chicago/>
    <Footer/>
    </>
  )
}

export default Homepage
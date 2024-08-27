import React from 'react';
import { Link } from "react-router-dom";

const Specials = () => {
  return (
    <section className='specials'>
      <section className='specialsTop'>
        <h4 className='headers specialsHead'>This week's specials!</h4>
        <div className='buttonDiv'>
          <Link to="/Menu" className="buttonLink">Online Menu</Link>
        </div>
      </section>
      <section className='cardsSpecials'>
        <div className="card">
          <img className="card-img-top" src="greeksalad.jpg" alt="Greek Salad"/>
          <div className="card-body">
            <div className='card-top'>
              <h5 className="card-title">Greek Salad</h5>
              <h5 className="card-price">$12.99</h5>
            </div>
            <p className="card-text">The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
            <Link to="/bookingPage" className="buttonLink specialsButton">Order a delivery <i className="fas fa-motorcycle"></i></Link>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src="bruchetta.svg" alt="Bruchetta"/>
          <div className="card-body">
            <div className='card-top'>
              <h5 className="card-title">Bruchetta</h5>
              <h5 className="card-price">$5.99</h5>
            </div>
            <p className="card-text">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
            <Link to="/bookingPage" className="buttonLink specialsButton">Order a delivery <i className="fas fa-motorcycle"></i></Link>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src="lemondessert.jpg" alt="Lemon Dessert"/>
          <div className="card-body">
            <div className='card-top'>
              <h5 className="card-title">Lemon Dessert</h5>
              <h5 className="card-price">$5.00</h5>
            </div>
            <p className="card-text">This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
            <Link to="/bookingPage" className="buttonLink specialsButton">Order a delivery <i className="fas fa-motorcycle"></i></Link>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Specials;

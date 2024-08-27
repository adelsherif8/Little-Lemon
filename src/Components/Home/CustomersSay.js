import React from 'react';

const CustomersSay = () => {
  return (
    <section className='testimonials'>
      <h2 className='headers specialsHead testimonialsHead'>Testimonials</h2>
      <div className='testimonialsCards'>

        <article className="cardTestimonial">
          <div className='testimonialTop'>
            <div className='ratingLeft'>
              <div className='rating'>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <img className="card-img-top-testimonials" src="card1.webp" alt="Emma Johnson"/>
            </div>
            <h3 className="card-title-testimonials">Emma Johnson</h3>
          </div>
          <div className="card-body-testimonials">
            <p className="card-text-testimonials">I had an absolutely wonderful experience with this service! The team went above and beyond to ensure everything was perfect. The attention to detail and commitment to customer satisfaction is truly unmatched. I will definitely be recommending this to my friends and family!</p>
          </div>
        </article>

        <article className="cardTestimonial">
          <div className='testimonialTop'>
            <div className='ratingLeft'>
              <div className='rating'>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <img className="card-img-top-testimonials" src="card2.webp" alt="Michael Williams"/>
            </div>
            <h3 className="card-title-testimonials">Michael Williams</h3>
          </div>
          <div className="card-body-testimonials">
            <p className="card-text-testimonials">Overall, a great experience. The staff was friendly and professional, and the quality exceeded my expectations. There were a few minor hiccups along the way, but they were handled promptly and efficiently. I would happily use this service again in the future.</p>
          </div>
        </article>

        <article className="cardTestimonial">
          <div className='testimonialTop'>
            <div className='ratingLeft'>
              <div className='rating'>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <img className="card-img-top-testimonials" src="card4.webp" alt="Sophia Martinez"/>
            </div>
            <h3 className="card-title-testimonials">Sophia Martinez</h3>
          </div>
          <div className="card-body-testimonials">
            <p className="card-text-testimonials">Exceptional service from start to finish! The process was seamless, and the results were outstanding. I appreciated the constant communication and personalized approach. This is by far the best experience I've had, and I can't recommend them highly enough!</p>
          </div>
        </article>

        <article className="cardTestimonial">
          <div className='testimonialTop'>
            <div className='ratingLeft'>
              <div className='rating'>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <img className="card-img-top-testimonials" src="card3.webp" alt="David Kim"/>
            </div>
            <h3 className="card-title-testimonials">David Kim</h3>
          </div>
          <div className="card-body-testimonials">
            <p className="card-text-testimonials">Top-notch quality and excellent customer service. The team was incredibly responsive and attentive to all my needs. They delivered exactly what I was looking for, ahead of schedule and with outstanding craftsmanship. I am thoroughly impressed and will be returning for future projects.</p>
          </div>
        </article>
        
      </div>
    </section>
  );
}

export default CustomersSay;

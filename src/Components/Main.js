import React from 'react'

const Main = () => {
  return (
    <main>
        <section className='hero'>
            <div className='heroLeft'>
                <h1>Little Lemon</h1>
                <h5>Chicago</h5>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <a href=''><button>Reserve Table</button></a>
            </div>
            <div className='heroRight'>
                <img src="restauranfood.jpg" width="20%" alt='Cheif holding a plate'/>
            </div>
        </section>
    </main>

  )
}

export default Main
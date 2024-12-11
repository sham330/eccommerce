import React from 'react'
import Hero from './Hero'
import FeaturedProducts from './FeaturedProducts'
import Testimonials from './Testimonials'
import TopRatedSpecials from './TopRatedSpecials'
import About from './About'

export const Home = () => {
  return (
    <div>
          
      <Hero />
      <FeaturedProducts />
      <TopRatedSpecials/>
      <About/>
      <Testimonials />
    

    </div>
  )
}

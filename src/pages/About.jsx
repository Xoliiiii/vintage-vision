import React from 'react'
import Navigation from '../components/Navigation'
import HeroSection from '../components/HeroSection'

export default function About() {
  return (
    <div>
      <>
      <Navigation/>
      <section>
        <img src="" alt="Vintage Camera" />
        <h4>About Us</h4>
        <p>WE ARE THE BEST AGENCY SINCE 2008</p>
        <p>Welcome to Vintage Vision, where our expert team boosts home improvement businesses through effective social media strategies, content creation, and data-driven optimizations for outstanding results.</p>
      </section>
      <section>
        <hr/>
        <h4>MEET THE TEAM</h4>
        <div>
            <img src="" alt="Team member" />
            <img src="" alt="Team member" />
            <img src="" alt="Team member" />
            <img src="" alt="Team member" />
        </div>
      </section>
      <footer>
      <small>Copyright © 2024 . All rights reserved</small>
      </footer>
      </>
    </div>
  )
}

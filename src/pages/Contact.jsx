import React from 'react'
import Navigation from '../components/Navigation'

export default function Contact() {
  return (
    <div>
      <Navigation/>
    <section>
        <h3>Get In Touch With Us</h3>
        <p>LET'S TALK ABOUT YOUR VISION</p>
        <div>
            <img src="" alt="Vintage Camera" />
        </div>
    </section>
    <section>
        <form>
            <input type='text' placeholder='Name' />
            <input type='text' placeholder='Surname' />
            <input type='email' placeholder='example@gmail.com' />
            <input type='text' placeholder='Company name' />
            <h5>SERVICES</h5>
            <input type="radio" name="PAID ADVERTISING" id="advertising" />
            <input type="radio" name="PAID ADVERTISING" id="advertising" />
            <input type="radio" name="PAID ADVERTISING" id="advertising" />
            <input type="radio" name="PAID ADVERTISING" id="advertising" />
            <button type="submit">SUBMIT</button>
        </form>
    </section>
    <footer>
      <small>Copyright © 2024 . All rights reserved</small>
      </footer>
    </div>
  )
}

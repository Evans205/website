import React from 'react'
import Navbar from '../Navbar'
export default function Home() {
  return (
    <div>
      <Navbar />
<h1> Home page</h1>

<div className="home-container">
      
      <header className="header">
        <h1>Welcome to Our Company</h1>
        <p>We offer top-notch services to meet your needs.</p>
      </header>
      <section className="main-content">
        <h2>About Us</h2>
        <p>Evanstech solution is a ICT company for making websites and softwares.</p>
        <button className="btn">Learn More</button>
      </section>
      <footer className="footer">
        <p>&copy; 2024 Evanstech Company. All rights reserved.</p>
      </footer>
    </div>
    </div>
  )
}

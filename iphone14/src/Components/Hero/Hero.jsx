import React from 'react'
import './hero.css'
import Figure from '/src/IMG/figure.png'
import Search from '/src/IMG/search.png'
import {Link} from 'react-router-dom'

const Hero = () => {
  return (
    <div>
      <div className="main-hero">
          <h1>iPhone14</h1>
          <p>Big and bigger</p>
          <img className="search" src={Search} alt=""/>
          <Link className="link-buy">
            <h3>Learn more Buy</h3>
          </Link>
          <img className="phone" src={Figure} alt=""/>
      </div>
    </div>
  )
}

export default Hero

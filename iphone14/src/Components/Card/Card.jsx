import React from 'react'
import './card.css'
import PhoneCard from '/src/IMG/phonecard.png'
import Card2 from '/src/IMG/card2.png'
import Iphone from '/src/IMG/iphone.png'
import {Link} from 'react-router-dom'


const Card = () => {
  return (
    <div>
      <div className="mycard">
        <img className="banner" src={PhoneCard} alt=""/>
        <img className="mobile-card" src={Card2} alt=""/>
        <div className="phonecard">
            <div className="subphonecard">
              <img src={Iphone} alt=""/><h2>Card</h2>
            </div>
            <div className="card-title">
                <p>
                Save 5% on Apple products with a <br/> new Apple Card through December 25.
                </p>
                <p className="only">Only at Apple. Exclusions and terms apply.</p>
                <Link className="link-buy"><p className="apply">Learn more Apply now</p></Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Card

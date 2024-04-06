import React from 'react'
import './iphonecard.css'
import Fig1 from '/src/IMG/fig1.png'
import Fig2 from '/src/IMG/fig2.png'
import Fig3 from '/src/IMG/fig3.png'
import Fig4 from '/src/IMG/fig4.png'
import Fig5 from '/src/IMG/fig5.png'
import Fig6 from '/src/IMG/fig6.png'
import H4 from '/src/IMG/h4a.png'
import H4b from '/src/IMG/h4b.png'
import Applelogo from '/src/IMG/apple-logo.png'
import Span from '/src/IMG/span.png'
import {Link} from 'react-router-dom'

const IphoneCard = () => {
  return (
    <div className="main-iphone">
      <div className="main">
        <img className="iphone-banner" src={Fig1} alt=""/>
        <div className="phonecard1">
          <div className="main-title">
            <h1 className="sub-title-1">iPhone 14 Pro</h1>
            <p className="sub-paragraph-1">Pro. Beyond</p>
            <Link className="link-buy"><p className="learn">Learn more Apply now</p></Link>
          </div>
        </div>
      </div>

      <div className="main-1">
        <img className="iphone-banner" src={Fig2} alt=""/>
        <div className="phonecard1">
          <div className="main-title">
            <h2 className="sub-title-2">iPad</h2>
            <p className="sub-paragraph-2">Lovable. Drawable. Magical.</p>
            <Link className="link-buy"><p className="learn">Learn more Apply now</p></Link>
          </div>
        </div>
      </div>

      <div className="main-1">
        <img className="iphone-banner" src={Fig3} alt=""/>
        <div className="phonecard1">
          <div className="main-title">
            <img src={Applelogo} alt=""/>
            <h2 className="sub-title-2">Airpods</h2>
            <p className="sub-paragraph-2">Share the joy</p>
            <Link className="link-buy"><p className="learn">Shop</p></Link>
          </div>
        </div>
      </div>

      <div className="main-2">
        <img className="iphone-banner" src={Fig4} alt=""/>
        <div className="phonecard1">
          <div className="main-title">
            <img className="h4a" src={H4} alt=""/>
            <h2 className="sub-title-2">Adventure awaits.</h2>
            <Link className="link-buy"><p className="learn">Learn more Apply now</p></Link>
          </div>
        </div>
      </div>

      <div className="main-2">
        <img className="iphone-banner" src={Fig5} alt=""/>
        <div className="phonecard1">
          <div className="main-title">
            <img className="h4a" src={H4b} alt=""/>
            <h2 className="sub-title-3">A healthy leap ahead.</h2>
            <Link className="link-buy"><p className="learn">Learn more Apply now</p></Link>
          </div>
        </div>
      </div>

      <div className="main-2">
        <img className="iphone-banner" src={Fig6} alt=""/>
        <div className="phonecard1">
          <div className="main-title">
            <h2 className="sub-title-4">iPad Pro</h2>
            <div className="spantag">
              <p className="super">Supercharged by</p>
              <img src={Span} alt=""/>
            </div>
            <Link className="link-buy"><p className="learn">Learn more Apply now</p></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IphoneCard

import React, { useState } from 'react'
import './navbar.css'
import Iphone from '/src/IMG/iphone.png'
import Search from '/src/IMG/search.png'
import Chart from '/src/IMG/chart.png'
import Label from '/src/IMG/label.png'
import {Link} from 'react-router-dom'

const Navbar = () => {

  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = ()=>{
    mobileMenu? setMobileMenu(false) : setMobileMenu(true);
  }


  return (
    <nav>
      <img src={Label} alt="" className="menu-icon" onClick={toggleMenu}/>
      <img src={Iphone} alt=""/>
      <ul className={mobileMenu?'': 'hide-mobile-menu'}>
        <Link to='/store' className="link"><li >Store</li></Link>
        <Link to='/mac' className="link"><li>Mac</li></Link>
        <Link to='/ipad' className="link"><li>Ipad</li></Link>
        <Link to='/iphone' className="link"><li>Iphone</li></Link>
        <Link to='/watch' className="link"><li>Watch</li></Link>
        <Link to='/airpods' className="link"><li>Airpods</li></Link>
        <Link to='/tv' className="link"><li>Tv & Home</li></Link>
        <Link to='/apple' className="link"><li>Only on Apple</li></Link>
        <Link to='/accessories' className="link"><li>Accessories</li></Link>
        <Link to='/support' className="link"><li>Supports</li></Link>
        <Link to='/search' className="link"><li><img src={Search} alt=""/></li></Link>
      </ul>
      <Link to='/chart'><img src={Chart} alt=""/></Link>





      {/* <div className="nav">
          <img src={Iphone} alt=""/>
          <ul className={isMobile? "link-mobile active" : "link"}
          onClick={() => setIsMobile(false)}>
              <Link to='/store' className="link"><li >Store</li></Link>
              <Link to='/mac' className="link"><li>Mac</li></Link>
              <Link to='/ipad' className="link"><li>Ipad</li></Link>
              <Link to='/iphone' className="link"><li>Iphone</li></Link>
              <Link to='/watch' className="link"><li>Watch</li></Link>
              <Link to='/airpods' className="link"><li>Airpods</li></Link>
              <Link to='/tv' className="link"><li>Tv & Home</li></Link>
              <Link to='/apple' className="link"><li>Only on Apple</li></Link>
              <Link to='/accessories' className="link"><li>Accessories</li></Link>
              <Link to='/support' className="link"><li>Supports</li></Link>
              <Link to='/search' className="link"><li><img src={Search} alt=""/></li></Link>
          </ul>
          <Link to='/chart'><img src={Chart} alt=""/></Link>

          <button className="mobile-menu-icon"
          onClick={() => setIsMobile(!isMobile)}
          >
            {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
          </button>
      </div> */}
    </nav>
  )
}

export default Navbar

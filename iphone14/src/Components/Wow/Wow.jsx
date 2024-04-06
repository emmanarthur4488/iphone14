import React from 'react'
import './wow.css'
import {Link} from 'react-router-dom'

const Wow = () => {
  return (
    <div>
      <div className="wow">
          <h2>Give WOW.</h2>
          <p>This holiday season, find the perfect <br/> gift for everyone on your list.</p>
          <Link className="link-buy"><p className="shop">Shop the gift guide</p></Link>
      </div>
    </div>
  )
}

export default Wow

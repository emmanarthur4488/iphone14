import React from 'react'
import './gallery.css'
import GalleryBanner from '/src/IMG/gallery.png'

const Gallery = () => {
  return (
    <div>
      <div className="gallery">
        <img src={GalleryBanner} alt=""/>
        <div className="footnote">
            <p>1. The following purchases with Apple Card are ineligible to earn 5% back: monthly financing through Apple Card Monthly Installments, Apple iPhone Payments, the iPhone Upgrade Program, and wireless carrier financing plans; Apple Media Services; AppleCare+ monthly payments. Subject to credit approval. Valid only on qualifying purchases in U.S. for new Apple Card customers who open an account and use it from 12/1/22 to 12/25/22 at Apple Store locations, apple.com, the Apple Store app, or by calling 1-800-MY-APPLE. Accounts opened before 12/1/22 or after 12/25/22 do not qualify. New Apple Card users added to an Apple Card Family account opened during offer period can earn 5% back on their own purchases. For Apple Card Family co-owners and participants, bonus Daily Cash will be disbursed within 7 days of your qualifying purchase. Not valid for existing Apple Card users who merge their Apple Card accounts to become Co-Owners. 5% is total amount of Daily Cash that can be earned for qualifying Apple purchases using Apple Card. Returning qualified items that were purchased during offer period may impact your cash back. 5% savings is earned as Daily Cash and transferred to your Apple Cash card when transactions post to your Apple Card account. If you do not have an Apple Cash card, Daily Cash can be applied by you as a credit on your statement balance. See the Apple Card Customer Agreement for more details on Daily Cash and qualifying transactions. Changes to your account status during offer period may delay the fulfillment of your Daily Cash bonus.</p>
            <p>To access and use all the features of Apple Card, you must add Apple Card to Wallet on an iPhone or iPad with the latest version of iOS or iPadOS. Update to the latest version by going to Settings > General > Software Update. Tap Download and Install.</p>
            <p>Learn more about how Apple Card applications are evaluated at support.apple.com/kb/HT209218.</p>
            <p>Available for qualifying applicants in the United States.</p>
            <p>Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch.</p>
        </div>
        <div className="footer-links">
            <div className="foot-link">
                <h1>Shop and Learn</h1>
                <ul>
                    <li>Store</li>
                    <li>Mac</li>
                    <li>iPad</li>
                    <li>iPhone</li>
                    <li>Watch</li>
                    <li>Airpods</li>
                    <li>Tv & Home</li>
                    <li>AirTag</li>
                    <li>Accessories</li>
                    <li>Gift Cards</li>
                </ul>
            </div>

            <div className="foot-link">
                <h1>Services</h1>
                <ul>
                    <li>Apple Music</li>
                    <li>Apple TV+</li>
                    <li>Apple Fitness+</li>
                    <li>Apple News+</li>
                    <li>Apple Arcade</li>
                    <li>iCloud</li>
                    <li>Apple One</li>
                    <li>Apple Card</li>
                    <li>Apple Books</li>
                    <li>Apple Podcasts</li>
                    <li>App Store</li>
                </ul>

                <div className="foot-link">
                    <h1>Account</h1>
                    <ul>
                        <li>Manage Your Apple ID</li>
                        <li>Apple Store Account</li>
                        <li>iCloud.com</li>
                    </ul>
                </div>
            </div>

            <div className="foot-link">
                <h1>Apple Store</h1>
                <ul>
                    <li>Find a Store</li>
                    <li>Genius Bar</li>
                    <li>Today at Apple</li>
                    <li>Apple Camp</li>
                    <li>Apple Store App</li>
                    <li>Refurbished and Clearance</li>
                    <li>Financing</li>
                    <li>Apple Trade In</li>
                    <li>Order Status</li>
                    <li>Shopping Help</li>
                </ul>
            </div>

            <div className="foot-link">
                <h1>For Business</h1>
                <ul>
                    <li>Apple and Business</li>
                    <li>Shop for Business</li>
                </ul>

                <div className="foot-link">
                    <h1>For Education</h1>
                    <ul>
                        <li>Apple and Education</li>
                        <li>Shop for K-12</li>
                        <li>Shop for College</li>
                    </ul>
                </div>

                <div className="foot-link">
                    <h1>For Healthcare</h1>
                    <ul>
                        <li>Apple in Healthcare</li>
                        <li>Health on Apple Watch</li>
                        <li>Health Records on iPhone</li>
                    </ul>
                </div>

                <div className="foot-link">
                    <h1>For Government</h1>
                    <ul>
                        <li>Shop for Government</li>
                        <li>Shop for Veterans and Military</li>
                    </ul>
                </div>
            </div>

            <div className="foot-link">
                <div className="foot-link">
                    <h1>Apple Values</h1>
                    <ul>
                        <li>Accessibility</li>
                        <li>Education</li>
                        <li>Environment</li>
                        <li>Inclusion and Diversity</li>
                        <li>Privacy</li>
                        <li>Racial Equity and Justice</li>
                        <li>Supplier Responsibility</li>
                    </ul>
                </div>

                <div className="foot-link">
                    <h1>About Apple</h1>
                    <ul>
                        <li>Newsroom</li>
                        <li>Apple Leadership</li>
                        <li>Career Opportunities</li>
                        <li>Investors</li>
                        <li>Ethics & Compliance</li>
                        <li>Events</li>
                        <li>Contact Apple</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="footer">
            <div className="footerpara">
                <p>More ways to shop: <span>Find an Apple Store or other retailer</span> near you.</p>
                <p>Or call 1-800-MY-APPLE.</p>
            </div>
            <hr/>
            <div className="copyright-links">
                <div>
                    <p className="copy">Copyright © 2022 Apple Inc. All rights reserved.</p>
                </div>
                <div className="policy">
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Terms of Use</li>
                        <li>Sales and Refunds</li>
                        <li>Legal</li>
                        <li>Site Map</li>
                    </ul>
                </div>
                <div className="state">
                    <p className="united">United States</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery

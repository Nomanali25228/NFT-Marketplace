import React from 'react'

import storeframe from '../../assets/Storefront.png'
import discardlogo from '../../assets/DiscordLogo.png'
import youtube from '../../assets/YoutubeLogo.png'
import twitter from '../../assets/TwitterLogo.png'
import instagrame from '../../assets/InstagramLogo.png'

import './footer.css'


export default function Footer() {
    var todaydate = new Date
    var fullYear = todaydate.getFullYear()
    return (
    <div>

<div class="flexbox">
        <img src={storeframe} alt="" class="store"/>
        <div>
            <h1 class="ketses">NFT Marketplace</h1>
            <p class="ul">NFT marketplace UI created</p>
            <p class="uls">with Anima for Figma.</p>
            <p class="ulss">Join our community</p>
            <div class="flexbox">
                <img src={discardlogo} alt="" class="logo"/>
                <img src={youtube} alt="" class="logo1"/>
                <img src={twitter} alt="" class="logo1"/>
                <img src={instagrame}alt="" class="logo1"/>
            </div>
        </div>
        <div>
            <h1 class="plore">Explore</h1>
            <p class="pt1">Marketplace</p>
            <p class="pt2">Rankings</p>
            <p class="pt2">Connect a wallet</p>
        </div>
        <div>
            <h1 class="ourpanding">Join our weekly </h1>
            <h1 class="dinging">digest</h1>
            <p class="exclusive">Get exclusive promotions & updates</p>
            <p class="dex">straight to your inbox.</p>
            <input type="text" placeholder="Enter your email here" class="inputs"/>
            <button class="butoonss">
                <h3>Subscribe</h3>
            </button>
        </div>
    </div>
    <hr class="hrline" />
    <p class="last"> All rights Reserved &copy; <a href="https://github.com/Nomanali25228" target='blaank'>github/Name</a>{fullYear}</p>

    </div>
  )
}

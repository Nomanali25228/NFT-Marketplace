import React from 'react'

import icon1 from '../../assets/Icon (10).png'
import icon2 from '../../assets/Icon (11).png'
import icon3 from '../../assets/Icon (12).png'

import './worke.css'

export default function Worke() {
  return (
    <div>
            <h1 class="working">How it works</h1>
    <p class="outing">Find out how to get started</p>
    <div class="flexbox">
        <div class="holger">
            <img src={icon1} alt="" class="gool"/>
            <p class="wallet">Setup Your wallet</p>
            <p class="walletings">Set up your wallet of choice. Connect it to</p>
            <p class="walleting">the Animarket by clicking the wallet icon in</p>
            <p class="walleting">the top right corner.</p>
        </div>
        <div class="holgerss">
            <img src={icon2} alt="" class="gool"/>
            <p class="wallet">Create Collection</p>
            <p class="walletings">Upload your work and setup your collection.</p>
            <p class="walleting">Add a description, social links and floor</p>
            <p class="walleting">price.</p>
        </div>
        <div class="holgerss">
            <img src={icon3} alt="" class="gool"/>
            <p class="wallet">Start Earning</p>
            <p class="walletings">Choose between auctions and fixed-price</p>
            <p class="walleting">listings. Start earning by selling your NFTs or</p>
            <p class="walleting">trading others.</p>
        </div>


    </div>


    </div>
  )
}

import React from 'react'
import store from '../../assets/Storefront.png'

import './header.css'

export default function Header() {
  return (
    <div>
         <div class="flexboxing">
        <img src={store}alt="" class="img1"/>
        <p class="marketplace">NFT Marketplace</p>
        <p class="place">Marketplace</p>
        <p class="rankings">Rankings</p>
        <p class="rankings">Connect a wallet</p>

        <button class="uping">
            <p>Sign Up</p>

        </button>

    </div>
    </div>
  )
}

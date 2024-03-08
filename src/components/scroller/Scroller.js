import React from 'react'
import rocet from '../../assets/RocketLaunch.png'
import place from '../../assets/Image Placeholder.png'
import avater from '../../assets/Avatar.png'

import './scroller.css'

export default function Scroller() {
  return (
    <div>
            <div class="flexbox">
        <div>
            <h1 class="Discoverdiv">Discover</h1>
            <h1 class="Discoverdivart">digital art &</h1>
            <h1 class="Discoverdivart">Collect NFTs</h1>
            <p class="pragraphdiv">NFT marketplace UI created with Anima for </p>
            <p class="pragraph">Figma. Collect, buy and sell art from more </p>
            <p class="pragraph">than 20k NFT artists.</p>
            <button class="getStarteedButton">
                <div class="flexbox">
                    <img src={rocet} alt="" class="RocketLaunch"/>
                    <h3 class="Get">Get Started</h3>
                </div>
            </button>
            <div class="flexbox">
                <div>
                    <h1 class="k240">240k + </h1>
                    <p class="Totalsale">Total Sale</p>
                </div>
                <div>
                    <h1 class="k2402">100k + </h1>
                    <p class="Totalsale2">Auctions</p>
                </div>
               <div>
                    <h1 class="k2402">240k + </h1>
                    <p class="Totalsale2">Artists</p>
                </div>
            </div>
        </div>
        <div class="oposseitbox">
            <img src={place} alt="" class="moonpic"/>
            <h3 class="Spacewalking">Space Walking</h3>
            <div class="flexbox">
                <img src={avater} alt="" class="cecalpic"/>
                <p class="animakid">Animakid</p>
            </div>
        </div>
    </div>
    </div>
  )
}

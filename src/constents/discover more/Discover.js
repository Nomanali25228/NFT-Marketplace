import React from 'react'

import imlholder from '../../assets/Image Placeholder (1).png'
import avaterholder from '../../assets/Avatar Placeholder (3).png'
import image from '../../assets/Image (9).png'
import avater from '../../assets/Avatar (6).png'
import image1 from '../../assets/Image (10).png'
import asset from '../../assets/Asset 12 2 (5).png'

import './discover.css'

export default function Discover() {
  return (
    <div>
         <div class="flexbox">
        <div>
            <h1 class="more">Discover More NFTs</h1>
            <p class="mores">Explore new trending NFTs</p>
        </div>
        <div class="button">
            <h3 class="sez">See All</h3>
        </div>

    </div>




    <div class="flexbox">
        <div class="dabaa">
            <img src={imlholder}alt="" class="erth"/>
            <p class="glax">Distant Galaxy</p>
            <div class="flexbox">
                <img src={avaterholder} alt="" class="grils"/>
                <p class="moondace">MoonDancer</p>
            </div>
            <div class="flexbox">
                <div>
                    <p class="price">Price</p>
                    <p class="ggg">1.63 ETH</p>
                </div>
                <div>
                    <p class="bid">Highest Bid</p>
                    <p class="bids">0.33 wETH</p>
                </div>
            </div>
        </div>
        <div class="dabaaz">
            <img src={image} alt="" class="erth"/>
            <p class="glax">Distant Galaxy</p>
           <div class="flexbox">
                <img src={avater} alt="" class="grils"/>
                <p class="moondace">MoonDancer</p>
            </div>
            <div class="flexbox">
                <div>
                    <p class="price">Price</p>
                    <p class="ggg">1.63 ETH</p>
                </div>
                <div>
                    <p class="bid">Highest Bid</p>
                    <p class="bids">0.33 wETH</p>
                </div>
            </div>
        </div>
        <div class="dabaaz">
            <img src={image1} alt="" class="erth"/>
            <p class="glax">Distant Galaxy</p>
            <div class="flexbox">
                <img src={asset} alt="" class="grils"/>
                <p class="moondace">MoonDancer</p>
            </div>
            <div class="flexbox">
                <div>
                    <p class="price">Price</p>
                    <p class="ggg">1.63 ETH</p>
                </div>
                <div>
                    <p class="bid">Highest Bid</p>
                    <p class="bids">0.33 wETH</p>
                </div>
                </div>
                </div>
    </div>

    </div>
  )
}

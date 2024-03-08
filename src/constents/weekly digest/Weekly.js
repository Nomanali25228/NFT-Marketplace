import React from 'react'

import photo from '../../assets/Photo.png'

import './weekly.css'

export default function Weekly() {
  return (
    <div>
            <div class="lenthbox">
        <div class="flexbox">

            <div>
                <img src={photo}alt="" class="monoutfit"/>
            </div>


            <div>
                <h1 class="wekly">Join our weekly digest</h1>
                <p class="weklying">Get exclusive promotions & updates straight to your inbox.</p>
                <div class="flexbox">
                    <input type="text" placeholder="Enter your email here" class="input"/>
                    <button class="butoons">
                        <h3>Subscribe</h3>
                    </button>
                </div>

            </div>


        </div>

    </div>

    </div>
  )
}

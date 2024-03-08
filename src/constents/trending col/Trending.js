import React from 'react'

import primary from '../../assets/Primary Photo Placeholder (2).png'
import seccondary from '../../assets/Secondary Photo Placeholder (11).png'
import seccondary1 from '../../assets/Secondary Photo Placeholder (9).png'
import avaters from '../../assets/Avatar (7).png'
import primary1 from '../../assets/Primary Photo Placeholder (3).png'
import seccondary2 from '../../assets/Secondary Photo Placeholder (1).png'
import avaters1 from '../../assets/Avatar (6).png'
import primary2 from '../../assets/Primary Photo Placeholder (1).png'
import seccondary3 from '../../assets/Secondary Photo Placeholder.png'

import'./trending.css'
export default function Trending() {
  return (
    <div>
            <h1 class="trading">Trending Collection</h1>
    <p class="our">Checkout our weekly updated trending collection.</p>
    <div class="flexbox">
        <div>
            <img src={primary} alt="" class="jpg"/>
            <div class="flexbox">
                <img src={seccondary} alt="" class="sacen"/>
                <img src={seccondary1}alt="" class="sacen12"/>
                <div class="plus">
                    <h3 class="inbox">1025+</h3>
                </div>
            </div>
            <h3 class="dsgn">DSGN Animals</h3>
            <div class="flexbox">
                <img src={avaters} alt="" class="cat"/>
                <p class="fox">MrFox</p>
            </div>
        </div>
        <div>
            <img src={primary1} alt="" class="jpgs"/>
            <div class="flexbox">
                <img src={primary1} alt="" class="sacens"/>
                <img src={seccondary2} alt="" class="sacen12"/>
                <div class="plus">
                    <h3 class="inbox">1025+</h3>
                </div>
            </div>
            <h3 class="dsgns">Magic Mushrooms</h3>
            <div class="flexbox">
                <img src={avaters1} alt="" class="cats"/>
                <p class="fox">Shroomie</p>
            </div>
        </div>
        <div>
            <img src={primary2} alt="" class="jpgs"/>
            <div class="flexbox">
                <img src={seccondary3} alt="" class="sacens"/>
                <img src={primary2} alt="" class="sacen12"/>
                <div class="plus">
                    <h3 class="inbox">1025+</h3>
                </div>
            </div>
            <h3 class="dsgns">Disco Machines</h3>
            <div class="flexbox">
                <img src={avaters1}alt="" class="cats"/>
                <p class="fox">BeKind2Robots</p>
            </div>
        </div>
    </div>
    </div>
  )
}

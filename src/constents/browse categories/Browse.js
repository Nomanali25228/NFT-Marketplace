import React from 'react'

import category from '../../assets/Category Icon (1).png'
import photoicon from '../../assets/Photo & Icon (1).png'
import category1 from '../../assets/Category Icon.png'
import photoicon1 from '../../assets/Photo & Icon.png'
import photoicon2 from '../../assets/Photo & Icon (4).png'
import photoicon3 from '../../assets/Photo & Icon (3).png'
import category2 from '../../assets/Category Icon (2).png'
import photoicon4 from '../../assets/Photo & Icon (2).png'

import './browse.css'

export default function Browse() {
  return (
    <div>     
<h1 class="gories">Browse Categories</h1>
<div class="flexbox">
    <div class="music">
        <img src={category}alt="" class="pen"/>
        <p class="arts">Art</p>
    </div>
    <div class="music1">
        <img src={photoicon}alt="" class="pen"/>
        <p class="arts">Collectibles</p>
    </div>
    <div class="music1">
        <img src={category1}alt="" class="pen"/>
        <p class="arts">Music</p>
    </div>
    <div class="music1">
        <img src={photoicon1} alt="" class="pen"/>
        <p class="arts">Photography</p>
    </div>
</div>
<div class="flexbox">
    <div class="music2">
        <img src={photoicon2} alt="" class="pen"/>
        <p class="arts">Video</p>
    </div>
    <div class="music3">
        <img src={photoicon3} alt="" class="pen"/>
        <p class="arts">Utility</p>
    </div>
    <div class="music3">
        <img src={category2} alt="" class="pen"/>
        <p class="arts">Sport</p>
    </div>
    <div class="music3">
        <img src={photoicon4} alt="" class="pen"/>
        <p class="arts">Virtual Worlds</p>
    </div>

</div>
    </div>
  )
}

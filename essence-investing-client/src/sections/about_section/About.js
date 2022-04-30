import React from 'react'
import './about.css';
export default function About() {
  return (
    <div id="about-us">
        <h1 className="section-title">About Us</h1>
        <div style={{marginTop:'8rem', paddingBottom:'8rem'}} className="content-container">
        <div>
                <h1>Who we are...</h1>
                <p className="about-excerpt" >
                We have a very diverse and experienced team. One of our members
                is <i>Sheryar Adil</i>, a crypto expert and someone whos been in the space
                since 2010. He has spoken all over the world about crypto, including
              NASA in 2016. He also successfully built a <i>Blockchain-As-A-Service</i> start up during the Crypto ICO boom in
                2017 while in Silicon Valley and was backed and/or supported by top

                experts and investors such as Tim Draper (one of the largest crypto
                investors in the world).
                <br></br> <br></br> Our traders have years of experience and
                knowledge. We have multiple members who have 5-6x their
                investment in a short amount of time by following and utilizing our
                resources. We want to separate ourselves from the current state of
                education when dealing with crypto and investment. The space consists of boring
                dialogue that is 99% fluff and 1% information. We want to switch that
                to 99% of information and 1% fluff. This is a community and a family that we
                want to build and we want no member to be left behind. After all who
                doesn’t want to see their family succeed?
                </p>
            </div>
            <div>
                <img style={{height:'450px', width:'550px'}} src="/assets/about-graphic.png" alt="about-us"/>
            </div>
         
        </div>
    </div>
  )
}

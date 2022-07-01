import React from 'react'
import './about.css';
import Button from '@mui/material/Button'
export default function About() {
  return (
    <div id="about-us">
        <h1 className="section-title">About Us</h1>
        <div style={{marginTop:'8rem', paddingBottom:'8rem'}} className="content-container">
        <div>
                <h1>Who we are...</h1>
                <p  data-aos='fade-in' data-aos-duration="1000" className="about-excerpt" >
                We have a very diverse and experienced team. One of our members
                is <i>Sheryar Adil</i>, a crypto expert and someone whos been in the space
                since 2010. He has spoken all over the world about crypto, including
              NASA in 2016. He also successfully built a <i>Blockchain-As-A-Service</i> start up during the Crypto ICO boom in
                2017 while in Silicon Valley and was backed and/or supported by top
                experts and investors such as Tim Draper (one of the largest crypto
                investors in the world).
                </p>
                <p  data-aos='fade-in' data-aos-duration="2000" className="about-excerpt"> Our traders have years of experience and
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
                <img  data-aos='zoom-in' data-aos-duration="1000" className="about-image" style={{}} src="/assets/about-graphic.png" alt="about-us"/>
            </div>
     
        </div>
        <div style={{backgroundColor:'#8A3E3E', height:'auto', width:'100%', textAlign:'center'}}>
        <a target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}} href="https://discord.gg/4y3RfHHU5h"><Button style={{margin:'1.5rem 0'}} variant="contained" className="callToAction2">Join Now</Button></a>
         </div>
    </div>
  )
}

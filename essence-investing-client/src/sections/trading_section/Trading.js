import React from 'react'
import './trading.css';
import Button from '@mui/material/Button';

export default function Portfolio() {
  return (
    <div id="trading">
        <div className="content-container">
            <div data-aos='zoom-in' data-aos-duration="1000"><img  style={{height:'700px', width: '350px', margin:'4rem 0 4rem 0'}} alt="phone_showing_gains" src="/assets/phone.png"/></div>
            <div style={{color:'white', margin:'0 0 3rem 0'}}>
                <h1 data-aos='fade-in' data-aos-duration="1000"  style={{fontSize:'40px'}}>Trading Space</h1>
                <p data-aos='fade-in' data-aos-duration="1500" className="portfolio-excerpt" >
                Aha Options' the thing that caused so much craze over the past two years. There are a ton of questions that are constantly asked relating to options, what is it, is it profitable, is it real, etc. Let’s first start with the basics.
                <br></br> <br></br>
                Options is a form of trading that is where a person can buy or sell a specific stock at a price they determine. It is really that simple. So why has it become so popular? Well since we can control which stock to buy and at what price it makes the world of options open to anyone regardless of how much they have to invest from $10 to $100,000. Generally speaking options is divided into two major types, calls and puts.These call and puts are held in a form called a contract. Calls are where we predict the price to be bullish (We want the stock to move up) or puts which is bearish (We want the stock to go down).
                <br></br> <br></br> So I know the question everyone is wondering, “How much money can I make off this?” Short answer, a ton. Heres the key though, options is a sport, its a sport that requires you put time and effort into. Think about it, you don’t just wake up one day and decide I wanna play football and then go play for the NFL. It is important to put the time and effort in. Options is the same. It is extremely profitable, but it isn’t a “Get rich quick” Scheme. It is something that requires education.
                <br></br><br></br> We at Young Visionaries have combined been in the space for 5+ years and have extensive knowledge relating to options and can assist you on the journey to becoming a master at trading options. We aren’t financial advisors. We are just people who are experienced in the industry and want to educate and help as many people as possible.
                </p>
            </div>
        </div>
        </div>
  )
}

import React from 'react'
import Button from '@mui/material/Button';

export default function Crypto() {
  return (
    <div id="crypto">
    <div className="content-container">
        <div style={{color:'white', margin:'0 0 3rem 0'}}>
            <h1  data-aos='fade-in' data-aos-duration="1000" style={{fontSize:'40px'}}>Crypto Space</h1>
            <p  data-aos='fade-in' data-aos-duration="1500" className="portfolio-excerpt" >
            Cryptocurrency, Blockchain, Satoshi Nakamoto, Bitcoin, what does it
all mean?
<br></br>
<br></br>
 So you may be wondering what exactly are these cryptos
and what’s all the hubbub about when it comes to this recent trend?
You might know someone who got really lucky investing into these
forms of investments or you’ve seen the “new money” lambo kids
running around saying they made a killing off of Bitcoin and NFT’s. Its
my intention to try to clear up any and all confusion for you regarding
this topic and to help you get the basics and fundamentals down in
regards to this incredibly amazing new industry that’s JUST starting
to take off. 
<br></br>
<br></br> 
Lets definitely start by saying you aren’t late to the party,
in fact, it's just getting started. Simply put a cryptocurrency is any form
of digital currency that exists digitally or virtually, secured through
cryptography making it nearly impossible to counterfeit or
double-spend. They do not have a regulating or central body but are
distributed digitally across a large number of computers known as
blockchains. Like paper money, cryptocurrencies are virtual
currencies that can be used for real-world applications such as
making payments, transferring funds, or even making speculations on
the prices of other cryptocurrencies and Nonfungible Tokens (NFT).
<br></br>
<br></br>
We here at Young Visionary strive to educate the masses on the
amazing opportunities emerging within the digital assets space and
hope this information serves you well on your journey. For any
additional questions or if you want to learn more about crypto
currencies from leading experts in the field today, click below to join our discord.  
    
         </p>
         <a target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}} href="https://discord.gg/4y3RfHHU5h"><Button className="callToAction" variant="contained">Get Started</Button></a>
        </div>
        <div data-aos='zoom-in' data-aos-duration="1000" ><img style={{height:'700px', width: '350px', margin:'4rem 0 4rem 0'}} alt="phone_showing_gains" src="/assets/phone-crypto.png"/></div>
    </div>
    </div>
  )
}

import React, {useState, useEffect} from 'react'
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import Button from '@mui/material/Button'
import './hero.css';
import { items } from '../../data/heroData';

export default function Hero() {
  const [show, setShow] = useState(false);
  const dropdown = {
    hidden:{
     opacity:0,
      transition:'all 0.2 ease-in-out'
    }, 
    visible: i =>({
      opacity:1,
      transition:{
        delay:i * 0.1,

      },
    })
  }

  useEffect(() =>{
  })
  return (
    <AnimatePresence exitBeforeEnter>
    <div id="hero" className="hero-container">
        <div className="hero-background">
        </div>
        <div className="hero-content">
          <div style={{display:'flex', justifyContent:'center', flexDirection:'column', textAlign:'center', marginRight:'1.8rem'}}>
        <div><img data-aos="fade-down" data-aos-duration="2000" style={{height:'200px', width:'200px'}} src="/assets/young_visionary_logo.svg" alt="logo"/></div>
        <div className="hero-title">
          {items.map((item, i) =>{
            return(
            <>
            <motion.h1
            className="essence"
             custom={i}
            variants={dropdown}
            initial="hidden"
            animate="visible"
            transition={{type:"spring", stiffness:100}}
            style={item.id === 4 ? {marginRight:'20px'}: {marginRight:'5px'}}>{item.text}</motion.h1>
            </>
            )
          })}

        </div>
        <p style={{transform:'translateY(-30px)'}} data-aos="fade-in" data-aos-duration="3000" className="slogan">Your ace in investing.</p>
        <div data-aos="fade-in" data-aos-duration="1500" >
        <a target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}} href="https://discord.gg/4y3RfHHU5h"><Button  variant="contained" className="callToAction">Join Now</Button></a>
        </div>

        </div>
        </div>
    </div>
    </AnimatePresence>
  )
}

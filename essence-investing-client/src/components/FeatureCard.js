import React from 'react'
import './components.css';

export default function FeatureCard({id, title, excerpt, image, duration}) {
  return (
    <div key={id} style={{flex:'1 0 50%'}}>
        <div className="individual-card" data-aos='zoom-in' data-aos-duration={duration} >
            <div>
                <img style={{height:'100px', width:'100px', marginRight:'1rem'}} src={image} alt={title}/>
            </div>
            <div>
            <h1 className="feature-title">{title}</h1>
            <p className="feature-excerpt">{excerpt}</p>
            </div>
        </div>
        
    </div>
  )
}

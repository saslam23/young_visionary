import React from 'react'
import './features.css';
import featureData from '../../data/features';
import FeatureCard from '../../components/FeatureCard';

export default function Features() {
  return (
    <div id="features">
        <h1 className="section-title">Features</h1>
        <div style={{textAlign:'center', marginTop:'2rem'}}>
        <div className="features-container" >
            {featureData.map((item) =>{
                return(
                    <FeatureCard
                        id={item.id}
                        title={item.title}
                        excerpt={item.excerpt}
                        image={item.image}
                        duration={item.duration}
                    />
                )
            })}
        </div>
        </div>
    </div>
  )
}

import * as React from 'react'
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import faqData from '../../data/faqData';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './faq.css';
export default function Faq() {
    
    const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  }
  return (
      <>
    <div style={{paddingBottom:'2rem', paddingLeft:'5px', paddingRight:'5px'}} id="faq">
    <h1 style={{color:'white'}} className="section-title">Faq</h1>
      {faqData.map((faq) =>{
        return(
          <>
          <div key={faq.id} style={{margin:'auto', maxWidth:'1000px', textAlign:'center', marginBottom:'1rem'}}>
          <Accordion sx={{marginBottom:'5px'}} expanded={expanded === faq.panel} onChange={handleChange(faq.panel)}>
          <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          >
          <Typography sx={{ textAlign:'start', fontWeight:'500' }}>
          {faq.question}
          </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{display:'flex', flexDirection:'row'}}>
          <Typography sx={{textAlign:'justify'}}>
          {faq.answer}
          <br></br>
          <br></br>
          {faq.answer2} 
          </Typography>
          </AccordionDetails>
          </Accordion>
          </div>
          </>
        )
      })}
     
    </div>
      </>
  )
}
import React from 'react'
import Drawer from '@mui/material/Drawer';
import {Link} from 'react-scroll';

export default function DrawerLeft({menuToggle,openCloseMenu}) {
    const pages = [

      {
        pageTitle:'Features',
        toLink:'features',
        offset:-110
      },
      {
        pageTitle:'Trading',
        toLink:'trading',
        offset:-110
      },
      {
        pageTitle:'Crypto',
        toLink:'crypto',
        offset:-110
      }
  ,
      {
        pageTitle:'About',
        toLink:'about-us',
        offset:-110
      },
      {
        pageTitle:'Faq',
        toLink:'faq',
        offset:-110
    },
      {
        pageTitle:'Contact',
        toLink:'contact',
        offset:-110
      }
    
      ]
  return (
    <div>
    {['left'].map((anchor) => (
      <React.Fragment key={anchor}>
       
        <Drawer
          anchor={anchor}
          open={menuToggle}
          onClose={() => openCloseMenu()}
        >
           <div><img  style={{height:'100px', width:'100px', marginLeft:'1rem', marginTop:'1rem'}} src="/assets/young_visionary_logo.svg" alt="logo"/></div>
             {pages.map((page) => (
              <Link activeClass="item-active" style={{cursor:'pointer'}} offset={-120} hashSpy={true} smooth={true}  to={page.toLink} key={page.pageTitle}
            /*   onClick={handleCloseNavMenu} */
              sx={{ my: 2, color: 'white', display: 'block', textDecoration:'none'}}
              className="nav-item-drawer drawer-items">
                {page.pageTitle}
              </Link>
            ))}
        </Drawer>
      </React.Fragment>
    ))}
  </div>
  )
}
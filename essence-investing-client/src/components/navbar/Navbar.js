import React, {useEffect} from 'react'
import './navbar.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

import {Link} from 'react-scroll';
import DrawerLeft from './DrawerLeft';

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
    image:'/assets/young_visionary_logo.svg',
    toLink:'hero'
  },
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


const Navbar = () => {
  const [menuToggle, setMenuToggle] = React.useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
 const [scroll, setScroll] = React.useState(false);


  const openCloseMenu =() =>{
    setMenuToggle(false);
  }



  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  useEffect(() => {
  window.addEventListener('scroll', () =>{
      if(window.scrollY === 0){
        setScroll(false);
      }
      else{setScroll(true)};
    })
    return () => {
      
    }
  }, [])


  return (
    <AppBar  className={` nav-style ${scroll ? 'scroll': null}`} position="fixed">
      <Container >
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
         
          </Typography>

          <Box style={{display:'flex', alignItems:'center'}} sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              className="responsive" 
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => setMenuToggle(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
           
            <DrawerLeft menuToggle={menuToggle} openCloseMenu={openCloseMenu}/>
          </Box>
          
          <Box sx={{marginTop:'1.5rem',marginRight:'2rem', flexGrow: 1, display: { xs: 'none', md: 'flex' }, alignItems:'center' }}>
            {pages.map((page) => (
              <div key={page.pageTitle} className="nav-item">
              <Link style={{cursor:'pointer'}} offset={page.offset} hashSpy={true} smooth={true} spy={true}  activeClass="item-active"  to={page.toLink} key={page.pageTitle}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block', textDecoration:'none'}}
              >
                {page.pageTitle ? page.pageTitle: <img style={{height:'75px', width:'75px'}} src={page.image} alt="essence-logo"/>}
              </Link>
              </div>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
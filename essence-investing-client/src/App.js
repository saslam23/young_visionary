import {BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom';
import Hero from './sections/hero_section/Hero';
import Features from './sections/features_section/Features';
import Trading from './sections/trading_section/Trading';
import Crypto from './sections/crypto_section/Crypto';
import About from './sections/about_section/About';
import Faq from './sections/faq_section/Faq';
import Contact from './sections/contact_section/Contact';
import Navbar from './components/navbar/Navbar';
import Footer from './sections/Footer';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" render={() =>(
            <div>
              <Navbar/>
              <Hero/>
              <Features/>
              <Trading/>
              <Crypto/>
              <About/>
              <Faq/>
              <Contact/>
              <Footer/>
            </div>
          )}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

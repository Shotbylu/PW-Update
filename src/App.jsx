import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { About, Contact, Experience, Social, Hero, Navbar, Tech, Works, StarsCanvas , Associative , Others  } from "./components";

const App = () => {
  return (
    <Router> {/* Change BrowserRouter to HashRouter */}
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Associative />
        <Social />
        <Others />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </Router> 
  );
}

export default App;

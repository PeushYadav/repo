// App.jsx
import { useRef } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Mainpage from './components/mainpage';
import Firstcard from './components/card';
import Secondcard from './components/card2';
import About from './components/about';
import Footer2 from './components/footer';

function App() {
  // Create refs for the sections
  const homeRef = useRef(null);
  const learnRef = useRef(null);
  const aboutRef = useRef(null);
  const constitutionRef = useRef(null); // If you have a constitution component

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar
        onNavigate={{
          home: () => scrollToSection(homeRef),
          learn: () => scrollToSection(learnRef),
          about: () => scrollToSection(aboutRef),
          constitution: () => scrollToSection(constitutionRef),
        }}
      />
      <div ref={homeRef}><Mainpage /></div>
      <div ref={learnRef}><Firstcard /></div>
      <Secondcard />
      <div ref={aboutRef}><About /></div>
      <Footer2 />
    </>
  );
}

export default App;

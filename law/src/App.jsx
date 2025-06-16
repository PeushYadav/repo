// App.jsx
import { useRef, useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Mainpage from './components/mainpage';
import Firstcard from './components/card';
import Secondcard from './components/card2';
import About from './components/about';
import Footer2 from './components/footer';
import AI from './components/ai';
import axios from 'axios';

function App() {
  const homeRef = useRef(null);
  const learnRef = useRef(null);
  const aboutRef = useRef(null);
  const constitutionRef = useRef(null);

  const [showAI, setShowAI] = useState(false);
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleUserSubmit = async () => {
    if (!input.trim()) return;
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:5000/api/chat', {
        userMessage: input
      });
      setResponse(res.data.reply);
      setShowAI(true);
    } catch (error) {
      setResponse("⚠️ Error fetching response.");
    } finally {
      setInput('');
      setLoading(false);
    }
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
      <div className='overflow-x-hidden' ref={homeRef}><Mainpage /></div>

      {!showAI ? (
        <div ref={learnRef}>
          <Firstcard
            input={input}
            setInput={setInput}
            handleSubmit={handleUserSubmit}
            loading={loading}
            initialMessage={`Tell us what happened in your situation—whether it’s something you experienced, witnessed, or are unsure about.\nThe more details you share, the better we can understand your case and identify all the laws that exist to protect you.\nOur goal is to help you feel informed, supported, and empowered with the legal knowledge you need to stand up for your rights.`}
          />
        </div>
      ) : (
        <AI
          input={input}
          setInput={setInput}
          handleSubmit={handleUserSubmit}
          loading={loading}
          response={response}
        />
      )}

      <div ref={constitutionRef}><Secondcard /></div>
      <div ref={aboutRef}><About /></div>
      <Footer2 />
    </>
  );
}

export default App;

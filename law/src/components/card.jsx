// components/Card.jsx
import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import Gaveltop from '../assets/gavel-top.svg';
import Gavelbot from '../assets/gavel-bottom.svg';
import Maintext from '../assets/cardmaintext.svg';
import Search from '../assets/Search.svg';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';


const Card = () => {
  const gavelTopRef = useRef();
  const [input, setInput] = useState('');
  const [response, setResponse] = useState(
    "Tell us what happened in your situation—whether it’s something you experienced, witnessed, or are unsure about.\nThe more details you share, the better we can understand your case and identify all the laws that exist to protect you.\nOur goal is to help you feel informed, supported, and empowered with the legal knowledge you need to stand up for your rights."
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    gsap.to(gavelTopRef.current, {
      rotation: -20,
      duration: 1,
      repeat: -1,
      yoyo: true,
      transformOrigin: 'bottom right',
      ease: "sine.inOut",
    });
  }, []);

  const handleSubmit = async () => {
    if (!input.trim()) return;
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:5000/api/chat', {
        userMessage: input,
      });
      setResponse(res.data.reply);
    } catch (error) {
      setResponse("⚠️ Error fetching response.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div id='card1'>
      <div
        style={{ backgroundColor: '#F0ECE8' }}
        className="w-screen h-auto flex justify-center items-center p-10"
      >
        <div className="relative bg-white rounded-2xl w-[85%] h-[100%] flex flex-col items-center shadow-2xl">

          {/* Floating Gavel */}
          <div className="absolute top-[-50px] right-[-50px] z-50">
            <img ref={gavelTopRef} src={Gaveltop} alt="Gavel Top" className="w-[150px] ml-[70px]" />
            <img src={Gavelbot} alt="Gavel Bottom" className="w-[130px] mt-[-20px] ml-[20px]" />
          </div>

          {/* SVG Text */}
          <div className="flex justify-center items-start w-full h-auto p-10">
            <img src={Maintext} alt="Main Text" className="w-[45%] h-auto" />
          </div>

          {/* Search Bar */}
          <div
            style={{ backgroundColor: '#BA5C45' }}
            className="h-[100px] w-[50vw] z-20 flex justify-start items-center pl-5 rounded-2xl gap-10"
          >
            <input
              style={{ backgroundColor: '#EECF95' }}
              className="h-[70px] w-[40vw] z-20 rounded-2xl px-4 text-black"
              type="text"
              placeholder="Search..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <div onClick={handleSubmit} className="cursor-pointer">
              <img src={Search} alt="Search Icon" className="w-[40px] h-auto" />
            </div>
          </div>

          {/* Response Display */}
          <div className="flex justify-center items-center  px-6">
            <div className="w-[700px] py-10 font-normal mb-5 font-primary text-left text-gray-800">
              {loading ? (
                <p className="italic text-gray-500">Loading...</p>
              ) : (
                <ReactMarkdown>{response}</ReactMarkdown>

              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

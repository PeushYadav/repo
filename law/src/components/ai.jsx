import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import Search from '../assets/Search.svg';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

const AI = () => {
  const gavelTopRef = useRef();
  const chatEndRef = useRef();

  const [input, setInput] = useState('');
  const [chatHistory, setChatHistory] = useState([
    {
      sender: 'bot',
      message: `Tell us what happened in your situation—whether it’s something you experienced, witnessed, or are unsure about.\nThe more details you share, the better we can understand your case and identify all the laws that exist to protect you.\nOur goal is to help you feel informed, supported, and empowered with the legal knowledge you need to stand up for your rights.`,
    },
  ]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 640px)");
    if (mq.matches) {
      gsap.to(gavelTopRef.current, {
        rotation: -20,
        duration: 1,
        repeat: -1,
        yoyo: true,
        transformOrigin: 'bottom right',
        ease: 'sine.inOut',
      });
    }
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatHistory, loading]);

  const handleSubmit = async () => {
    if (!input.trim()) return;
    const userMessage = input.trim();
    setChatHistory((prev) => [...prev, { sender: 'user', message: userMessage }]);
    setInput('');
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:5000/api/chat', {
        userMessage: userMessage,
      });
      setChatHistory((prev) => [...prev, { sender: 'bot', message: res.data.reply }]);
    } catch (error) {
      setChatHistory((prev) => [...prev, { sender: 'bot', message: '⚠️ Error fetching response.' }]);
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
    <div id="ai-chat" className='overflow-x-hidden'>
      <div
        style={{ backgroundColor: '#F0ECE8' }}
        className="w-screen min-h-screen flex justify-center items-center p-4 sm:p-10"
      >
        <div className="relative bg-white rounded-2xl w-full sm:w-[85%] h-full flex flex-col items-center shadow-2xl px-4 py-10">
          <div ref={gavelTopRef} className="absolute top-[-50px] right-[-50px] hidden sm:block z-50">
            {/* Reserved space for gavel animation */}
          </div>

          <div className="flex-1 w-full overflow-y-auto px-4 sm:px-8 pt-20 sm:pt-24 space-y-4">
            {chatHistory.map((msg, index) => (
              <div
                key={index}
                className={`max-w-[85%] sm:max-w-[75%] px-5 py-3 rounded-xl text-base leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-[#EECF95] self-end text-right ml-auto'
                    : 'bg-[#EEE] self-start text-left mr-auto'
                }`}
              >
                <ReactMarkdown>{msg.message}</ReactMarkdown>
              </div>
            ))}
            {loading && (
              <div className="italic text-gray-500 px-5">Loading...</div>
            )}
            <div ref={chatEndRef}></div>
          </div>

          <div className="w-full max-w-[900px] flex justify-center items-center mt-6">
            <div className="w-full sm:hidden flex flex-col items-center gap-4">
              <input
                style={{ backgroundColor: '#EECF95' }}
                className="w-[90%] h-[60px] rounded-2xl px-4 text-black"
                type="text"
                placeholder="Type your situation..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <div onClick={handleSubmit} className="cursor-pointer">
                <img src={Search} alt="Search Icon" className="w-[40px] h-auto" />
              </div>
            </div>

            <div
              style={{ backgroundColor: '#BA5C45' }}
              className="hidden sm:flex h-[100px] w-full justify-start items-center pl-5 rounded-2xl gap-6"
            >
              <input
                style={{ backgroundColor: '#EECF95' }}
                className="h-[70px] w-[80%] rounded-2xl px-4 text-black"
                type="text"
                placeholder="Type your situation..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <div onClick={handleSubmit} className="cursor-pointer">
                <img src={Search} alt="Search Icon" className="w-[40px] h-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI;

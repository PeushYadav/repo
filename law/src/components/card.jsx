import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Gaveltop from '../assets/gavel-top.svg';
import Gavelbot from '../assets/gavel-bottom.svg';
import Maintext from '../assets/cardmaintext.svg';
import Search from '../assets/Search.svg';
import ReactMarkdown from 'react-markdown';

const Card = ({ input, setInput, handleSubmit, loading, initialMessage }) => {
  const gavelTopRef = useRef();

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    if (mq.matches) {
      gsap.to(gavelTopRef.current, {
        rotation: -20,
        duration: 1,
        repeat: -1,
        yoyo: true,
        transformOrigin: 'bottom right',
        ease: "sine.inOut",
      });
    }
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div id="card1" className="overflow-x-hidden">
      <div style={{ backgroundColor: '#F0ECE8' }} className="w-screen min-h-screen flex justify-center items-center p-6 sm:p-10">
        <div className="relative bg-white rounded-2xl w-full max-w-[90%] sm:max-w-[85%] flex flex-col items-center shadow-2xl px-4 py-10">
          <div className="absolute top-[-50px] right-[-50px] z-50 hidden lg:block">
            <img ref={gavelTopRef} src={Gaveltop} alt="Gavel Top" className="w-[150px] ml-[70px]" />
            <img src={Gavelbot} alt="Gavel Bottom" className="w-[130px] mt-[-20px] ml-[20px]" />
          </div>

          <div className="flex justify-center items-start w-full h-auto mb-8">
            <img src={Maintext} alt="Main Text" className="w-[70%] sm:w-[45%] h-auto" />
          </div>

          <div className="w-full max-w-[800px] flex justify-center items-center">
            <div className="w-full sm:hidden flex flex-col items-center gap-4">
              <input
                style={{ backgroundColor: '#EECF95' }}
                className="w-[90%] h-[60px] rounded-2xl px-4 text-black"
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

            <div
              style={{ backgroundColor: '#BA5C45' }}
              className="hidden sm:flex h-[100px] w-full justify-start items-center pl-5 rounded-2xl gap-6"
            >
              <input
                style={{ backgroundColor: '#EECF95' }}
                className="h-[70px] w-[80%] rounded-2xl px-4 text-black"
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
          </div>

          <div className="flex justify-center items-center px-4 sm:px-6">
            <div className="w-full max-w-[700px] py-10 font-normal mb-5 font-primary text-left text-gray-800 break-words">
              {loading ? (
                <p className="italic text-gray-500">Loading...</p>
              ) : (
                <ReactMarkdown>{initialMessage}</ReactMarkdown>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

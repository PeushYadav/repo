import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Gaveltop from '../assets/gavel-top.svg';
import Gavelbot from '../assets/gavel-bottom.svg';
import Maintext from '../assets/cardmaintext.svg';
import Search from '../assets/Search.svg';

const Card = () => {
  const gavelTopRef = useRef();

  useEffect(() => {
    gsap.to(gavelTopRef.current, {
      rotation: -20, // Positive rotation
      duration: 1,
      repeat: -1,
      yoyo: true,
      transformOrigin: 'bottom right',
      ease: "sine.inOut",
    });
  }, []);

  return (
    <div id='card1'>
      {/* Main Card Content */}
      <div
        style={{ backgroundColor: '#F0ECE8' }}
        className="w-screen h-[600px] flex justify-center items-center p-10"
      >
        <div className="relative bg-white rounded-2xl w-[85%] h-[100%] flex flex-col items-center shadow-2xl">

          {/* Floating animated gavel group */}
          <div className="absolute top-[-50px] right-[-50px] z-50">
            <img
              ref={gavelTopRef}
              src={Gaveltop}
              alt="Gavel Top"
              className="w-[150px] ml-[70px]" // Adjust size if needed
            />
            <img
              src={Gavelbot}
              alt="Gavel Bottom"
              className="w-[130px] mt-[-20px] ml-[20px]" // Adjust margin to position correctly
            />
          </div>

          <div className="flex justify-center items-start w-full h-auto p-10">
            <img
              src={Maintext}
              alt="Main Text"
              className="w-[45%] h-auto"
            />
          </div>

          <div
            style={{ backgroundColor: '#BA5C45' }}
            className="h-[100px] w-[50vw] z-20 flex justify-start items-center pl-5 rounded-2xl gap-10"
          >
            <input
              style={{ backgroundColor: '#EECF95' }}
              className="h-[70px] w-[40vw] z-20 rounded-2xl px-4"
              type="text"
              placeholder="Search..."
            />
            <div>
              <img
                src={Search}
                alt="Search Icon"
                className="w-[40px] h-auto"
              />
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="w-[700px] py-10 font-semibold mb-5 font-primary">
              <p>
                Tell us what happened in your situation—whether it’s something you experienced, witnessed, or are unsure about.
                The more details you share, the better we can understand your case and identify all the laws that exist to protect you.
                Our goal is to help you feel informed, supported, and empowered with the legal knowledge you need to stand up for your rights.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

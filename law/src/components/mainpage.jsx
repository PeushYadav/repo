import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import leftMainText from '../assets/left_main_text.svg';
import centerMain from '../assets/center-mid.png';

const MainPage = () => {
  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      [leftTextRef.current, rightTextRef.current],
      { opacity: 0 },
      { opacity: 1, duration: 2.5, ease: 'power1.inout' }
    );
  }, []);

  return (
    <div
      style={{ backgroundColor: '#F0ECE8' }}
      className="w-screen min-h-screen relative overflow-x-hidden py-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4 w-[90%] mx-auto">
        <div className="md:col-span-4 flex flex-col items-center md:items-end">
          <div className="m-4">
            <img src={leftMainText} alt="Law Lens Logo" className="w-64 md:w-80" />
          </div>
          <div className="mt-6 md:mt-10 w-full md:w-[75%]">
            <p
              ref={leftTextRef}
              className="text-left font-primary opacity-0"
            >
              Describe What Happened. We'll instantly show you the laws that
              protect you. Empower yourself with knowledge, clarity, and
              confidence because knowing your rights changes everything.
            </p>
          </div>
        </div>

        <div className="md:col-span-5 flex justify-center">
          <div className="w-full md:w-auto">
            <img
              src={centerMain}
              alt="Law Lens Center"
              className="w-full h-auto mb-10"
            />
          </div>
        </div>

        <div className="md:col-span-3 flex flex-col items-center md:items-start">
          <div className="mt-6 md:mt-10 w-full md:w-[75%]">
            <p
              ref={rightTextRef}
              className="text-left font-primary opacity-0"
            >
              Tell Us What You Faced. We'll quickly guide you to the laws that
              support you. Take control with clear, reliable
              information—because understanding your legal rights is the first
              step toward justice, safety, and self-respect.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;

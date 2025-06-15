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
      className="w-screen h-screen relative overflow-x-hidden"
    >
      <div className="grid gap-4 grid-cols-12 z-10 w-screen p-10">
        {/* Left Section */}
        <div className="col-span-4 min-h-100 h-[400px] w-[95%] flex flex-wrap justify-end z-10">
          <div className="m-4">
            <img src={leftMainText} alt="Law Lens Logo" className="w-80" />
          </div>
          <div className="flex justify-end mt-10">
            <p
              ref={leftTextRef}
              className="text-left m-4 w-[75%] font-primary opacity-0"
            >
              Describe What Happened. We'll instantly show you the laws that
              protect you. Empower yourself with knowledge, clarity, and
              confidence because knowing your rights changes everything.
            </p>
          </div>
        </div>

        {/* Center Image */}
        <div className="col-span-5 min-h-100 h-[700px] w-[95%] grid z-10">
          <div className="w-auto">
            <img
              src={centerMain}
              alt="Law Lens Center"
              className="w-full h-full mb-10"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="col-span-3 min-h-100 w-[95%] z-10">
          <div className="flex justify-start mt-10">
            <p
              ref={rightTextRef}
              className="text-left m-4 w-[75%] font-primary opacity-0"
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

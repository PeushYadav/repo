import React, { Component } from 'react';
import Gavel from '../assets/gavel.svg';
import Maintext from '../assets/cardmaintext.svg';
import Search from '../assets/Search.svg';

export default class Card extends Component {
  render() {
    return (
      <div>
        <div
          style={{ backgroundColor: '#F0ECE8' }}
          className="w-screen h-[500px] flex justify-center items-center p-10"
        >
          {/* Card Container */}
          <div className="relative bg-white rounded-2xl w-[85%] h-[500px] flex items-center justify-center">

            {/* Gavel Image - Half in, Half out */}
            <img
              src={Gavel}
              alt="Gavel Icon"
              className="absolute -top-[80px] -right-[70px] w-[200px]"
            />
            <div className='grid'>

            {/* Maintext Image Centered Using Flex */}
            <div className="flex justify-center items-start w-full h-full p-10">
              <img
                src={Maintext}
                alt="Main Text"
                className="w-[55%] h-auto "
              />
              </div>
              <div style={{ backgroundColor: '#BA5C45' }} className='h-[100px] w-[50vw] z-20 flex justify-start items-center pl-5 rounded-2xl gap-10'>
                <div style={{ backgroundColor: '#EECF95' }} className='h-[70px] w-[40vw] z-20 flex rounded-2xl'></div>
                <div className=''>
                    <img
                src={Search}
                alt="Main Text"
                className="w-[55%] h-auto "
              />

                </div>

              </div>
              <div className='flex justify-center items-center'>
              <div className='w-[700px] py-10 font-semibold mb-5'>
                <p>
                    Tell us what happened in your situation—whether it’s something you experienced, witnessed, or are unsure about. The more details you share, the better we can understand your case and identify all the laws that exist to protect you. Our goal is to help you feel informed, supported, and empowered with the legal knowledge you need to stand up for your rights.
                </p>
              </div>
              </div>

              

              </div>
           

          </div>
        </div>
      </div>
    );
  }
}

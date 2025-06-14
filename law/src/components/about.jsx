import React, { Component } from 'react';
import About from '../assets/About.svg';
import Law from '../assets/lawlens.svg';

export default class Card extends Component {
  render() {
    return (
      <div>
        <div
          style={{ backgroundColor: '#F0ECE8' }}
          className="w-screen h-[800px] flex justify-center items-center p-10"
        >
          <div className='w-[85%] h-[600px] bg-white rounded-2xl shadow-2xl relative'>
            <div className='grid w-full h-[50%]'>
              <div className='flex w-full h-[25%] justify-center pt-5'>
                <div className='w-[15%]'>
                  <img src={About} alt="Main Content" className="w-[100%]" />
                </div>
              </div>

              <div className='grid grid-cols-3 w-full h-full'>
                <div className='w-full h-full mt-10 p-10 col-span-1 flex justify-end'>
                  <img src={Law} alt="Emblem" className="w-[60%]" />
                </div>
                <div className='flex justify-center items-center w-full h-full col-span-2'>
                  <p className='w-[75%] font-semibold font-primary'>
                    Law Lens is a user-friendly platform that simplifies Indian laws and constitutional rights for everyone—from curious beginners to legal enthusiasts. It breaks down complex legal language into clear, accessible explanations and offers interactive tools like a “What Happened?” query system, a searchable law database, and a simplified Constitution viewer. With features such as difficulty levels, modal-based law displays, and gamified learning, Law Lens empowers users to understand their rights and navigate the legal system with confidence.
                  </p>
                </div>
              </div>

              <div className='flex w-full justify-end pr-20'>
                <button className='w-40px h-full text-2xl font-semibold cursor-pointer'>
                  <div style={{ backgroundColor: '#BA5C45' }} className='w-60 h-20 flex justify-center items-center rounded-2xl relative shadow-2xl'>
                    <div style={{ backgroundColor: '#EECF95' }} className='w-50 h-13 flex justify-center items-center rounded-2xl px-4'>
                      <p>Git hub </p>
                    </div>
                  </div>
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

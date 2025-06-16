import React, { Component } from 'react';
import About from '../assets/About.svg';
import Law from '../assets/lawlens.svg';

export default class Card extends Component {
  render() {
    return (
      <div className="overflow-x-hidden">
        <div
          style={{ backgroundColor: '#F0ECE8' }}
          className="w-screen min-h-[800px] flex justify-center items-center p-6"
        >
          <div className="w-full md:w-[85%] bg-white rounded-2xl shadow-2xl p-4 md:p-10">
          
            <div className="flex justify-center items-center mb-6">
              <img src={About} alt="Main Content" className="w-1/3 md:w-[12%]" />
            </div>

        
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center mb-8">
           
              <div className="flex justify-center md:justify-center">
                <img src={Law} alt="Law Lens" className="w-1/2 md:w-[60%]" />
              </div>

            
              <div className="md:col-span-2 flex justify-center items-center px-4 text-center md:text-left">
                <p className="font-semibold font-primary text-base md:text-lg">
                  Law Lens is a user-friendly platform that simplifies Indian laws and constitutional rights for everyone—from curious beginners to legal enthusiasts. It breaks down complex legal language into clear, accessible explanations and offers interactive tools like a “What Happened?” query system, a searchable law database, and a simplified Constitution viewer. With features such as difficulty levels, modal-based law displays, and gamified learning, Law Lens empowers users to understand their rights and navigate the legal system with confidence.
                </p>
              </div>
            </div>

        
            <div className="flex justify-center md:justify-end px-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <button className="text-2xl font-semibold cursor-pointer">
                  <div style={{ backgroundColor: '#BA5C45' }} className="w-48 h-16 flex justify-center items-center rounded-2xl shadow-2xl">
                    <div style={{ backgroundColor: '#EECF95' }} className="px-4 py-2 rounded-2xl">
                      <p>GitHub</p>
                    </div>
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

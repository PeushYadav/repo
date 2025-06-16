import React, { Component } from 'react';
import Maincont from '../assets/card2maintext.svg';
import Emblem from '../assets/emblem.svg';

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
              <img src={Maincont} alt="Main Content" className="w-2/3 md:w-1/3" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 items-center">
              <div className="flex justify-center md:justify-center ">
                <img src={Emblem} alt="Emblem" className="w-1/3 md:w-[35%]" />
              </div>

              <div className="md:col-span-2 flex justify-center items-center px-4 text-center md:text-left">
                <p className="font-semibold font-primary text-base md:text-lg">
                  Reading the Constitution is essential because it empowers you with the knowledge of your fundamental rights, duties, and the framework that governs our democracy. It helps you understand how laws are made, how power is distributed, and how justice is delivered. By knowing the Constitution, you become an informed citizen who can question injustice, participate meaningfully in civic life, and ensure that your rights—and the rights of others—are respected and upheld.
                </p>
              </div>
            </div>

            <div className="flex justify-center md:justify-end px-4">
              <a
                href="/constitution.pdf"
                download="constitution.pdf"
                className="text-2xl font-semibold cursor-pointer"
              >
                <div style={{ backgroundColor: '#BA5C45' }} className="w-48 h-16 flex justify-center items-center rounded-2xl">
                  <div style={{ backgroundColor: '#EECF95' }} className="px-4 py-2 rounded-2xl">
                    <p>Read Now !</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

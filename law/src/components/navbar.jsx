import React, { Component } from 'react';
import './navbar.css';
import Law_Lens from '../assets/Law_lens.svg';

export default class Navbar extends Component {
  render() {
    return (
      <div style={{ backgroundColor: '#F0ECE8 ' }} className='aspekta-font shadow-xl '>

       <div className='flex justify-between items-center w-[92%]'>
        <img src={Law_Lens} alt="Law Lens Logo" className="w-50 h-20 pl-15 pt-2 gap-[2vw]" />
        
        <div className='ml-10'>
          <ul className='flex items-center flex-wrap gap-[4vw] text-xl  font-navbar'>
            <li>
              <a className='hover:text-gray-500 duration-150' href="">Home</a>
            </li>
            <li>
              <a className='hover:text-gray-500 duration-150' href="">About</a>
            </li>
            <li>
              <a className='hover:text-gray-500 duration-150' href="">Constitution</a>
            </li>
            <li>
              <a className='hover:text-gray-500 duration-150' href="">Learn</a>
            </li>
            <li>
              <a className='hover:text-gray-500 duration-150' href="">Sign Up</a>
            </li>
          </ul>
          </div>
        </div>
      </div>
    );
  }
}

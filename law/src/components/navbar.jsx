import React, { useState } from 'react';
import './navbar.css';
import Law_Lens from '../assets/Law_lens.svg';
import { Menu, X } from 'lucide-react'; // optional: install with `npm install lucide-react`

const Navbar = ({ onNavigate }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div style={{ backgroundColor: '#F0ECE8' }} className="aspekta-font shadow-xl overflow-x-hidden">
      <div className="flex justify-between items-center w-[92%] mx-auto py-2">
        {/* Logo */}
        <img src={Law_Lens} alt="Law Lens Logo" className="h-08 w-auto" />

        {/* Hamburger button (mobile only) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Navigation links */}
        <ul
          className={`${
            menuOpen ? 'flex flex-col gap-4 mt-4' : 'hidden'
          } md:flex md:flex-row md:items-center md:gap-[4vw] text-xl font-navbar`}
        >
          <li>
            <button className="hover:text-gray-500 duration-150" onClick={onNavigate.home}>Home</button>
          </li>
          <li>
            <button className="hover:text-gray-500 duration-150" onClick={onNavigate.about}>About</button>
          </li>
          <li>
            <button className="hover:text-gray-500 duration-150" onClick={onNavigate.constitution}>Constitution</button>
          </li>
          <li>
            <button className="hover:text-gray-500 duration-150" onClick={onNavigate.learn}>Learn</button>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

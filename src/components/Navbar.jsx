import React, { useState } from 'react';
import { ImFacebook2 } from "react-icons/im";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { ImCross } from "react-icons/im";
const Navbar = ({ scrollToSection, refs }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the menu

    // Function to toggle the mobile menu
    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="fixed top-0 pl-10 pr-5 w-full text-white flex md:justify-around justify-between items-center z-50 bg-black py-4 font-orbitron">
            <h1 className='text-3xl'>VideoAlchemist</h1>

            {/* Desktop Menu */}
            <div className='hidden md:flex gap-15 text-xl'>
                <button className='cursor-pointer' onClick={() => scrollToSection(refs.homeRef)}>HOME</button>
                <button className='cursor-pointer' onClick={() => scrollToSection(refs.aboutRef)}>ABOUT</button>
                <button className='cursor-pointer' onClick={() => scrollToSection(refs.workRef)}>WORK</button>
                <button className='cursor-pointer' onClick={() => scrollToSection(refs.contactRef)}>CONTACT</button>
            </div>

            {/* Social Icons */}
            <div className='hidden md:flex text-lg gap-4'>
                <ImFacebook2 />
                <FaSquareInstagram />
                <FaLinkedin />
            </div>

            {/* Hamburger Menu (Only visible on small screens) */}
            <div className="md:hidden">
                <TiThMenu
                    className="text-2xl cursor-pointer"
                    onClick={handleMenuToggle}
                />
            </div>

            {/* Mobile Menu (Visible when isMenuOpen is true) */}
            {isMenuOpen && (
                <div className="absolute top-0 left-0 right-0 pb-10 bg-black text-white p-6 flex flex-col items-center gap-4 md:hidden transition-all duration-900 ease-in-out">
                    <ImCross
                        className="self-end text-2xl cursor-pointer"
                        onClick={handleMenuToggle}
                    />
                    <button
                        className="w-full text-xl py-2 cursor-pointer hover:bg-white hover:text-black"
                        onClick={() => { scrollToSection(refs.homeRef); handleMenuToggle();}}
                    >
                        Home
                    </button>
                    <button
                        className="w-full text-xl py-2 cursor-pointer hover:bg-white hover:text-black"
                        onClick={() =>{ scrollToSection(refs.aboutRef); handleMenuToggle();}}
                    >
                        About
                    </button>
                    <button
                        className="w-full text-xl py-2 cursor-pointer hover:bg-white hover:text-black"
                        onClick={() =>{scrollToSection(refs.workRef); handleMenuToggle();}}
                    >
                        Work
                    </button>
                    <button
                        className="w-full text-xl py-2 cursor-pointer hover:bg-white hover:text-black"
                        onClick={() => {scrollToSection(refs.contactRef); handleMenuToggle();}}
                    >
                        Contact
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

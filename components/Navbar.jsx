import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'
import { FiMessageSquare } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const[showMenu,setShowMenu]=useState(false)
    return (
        <nav className='navbar'>
            <h1 className='name'>Sai Sowjanya</h1>
            <div className='desktopMenu'>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktop">Home</Link>
                <Link activeClass='active' to='about' spy={true} smooth={true} offset={-50} duration={500} className="desktop">About</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-40} duration={500} className="desktop">Skills</Link>
                <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-40} duration={500} className="desktop">Contact</Link>
            </div>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500}><button className='desktopMenuBtn'>
              <FiMessageSquare/>  Contact Me
            </button></Link>

            <h1 className='mobMenu' onClick={()=>setShowMenu(!showMenu)}><GiHamburgerMenu/></h1>
            <div className='navMenu' style={{display: showMenu? 'flex':'none'}}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='about' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-40} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Skills</Link>
                <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-40} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar
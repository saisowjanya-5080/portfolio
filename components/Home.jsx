import React from 'react'
import './Home.css'
import { Link } from 'react-scroll'
import image from '../pdf/img.png'
import { IoBag } from "react-icons/io5";

const Home = () => {
    return (
        <section id="intro">
            <div className='introContent'>
                <span className='hello'>Hi, <br /></span>
                <span className='introText'>I'am <span className='introName'>Sai Sowjanya</span> <br /> Web Designer</span>
                <p className='introPara'>I am a skilled web designer with experience in creating <br />visually appealing and user friendly websites.</p>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500}><button className='btn'><IoBag/>Hire Me</button></Link>
            </div>
            <img className='bg' src={image} alt="" />
        </section>
    )
}

export default Home
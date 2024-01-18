import React from 'react'
import './About.css'
import resume from '../pdf/Cv.pdf'
import { GoDownload } from "react-icons/go";

const About = () => {
    return (
        <section className='about'>
            <h1 className='heading'>About</h1><br />
            <p className='para'>I'm <span className='introNam'>sai sowjanya </span> <br />Completed my graduation in 2023 and I am a skilled <br /> web designer with experience in creating
                visually <br /> appealing and user friendly websites.
                Knowledge of <br /> front-end web development technologies, such as <br /> HTML, CSS, Reactjs, and sometimes JavaScript, is often beneficial.</p><br /><br />
            <a href={resume} download className='btn btn2'><GoDownload/> Download CV</a>
        </section>
    )
}

export default About
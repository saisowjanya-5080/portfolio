import React from 'react'
import './Skills.css'

const Skills = () => {
    return (
        <section className='skills'>
            <h1 className='h'>Skills</h1><br />
            <div className='skill'>
                <div className='frontend'>
                    <h1 className='head'>Frontend</h1><br />
                    <div className='one'>
                        <h3 className='two'>HTML</h3>
                        <h3>70%</h3><br />
                    </div>
                    <div className='one'>
                        <h3 className='two'>Css</h3>
                        <h3>70%</h3><br />
                    </div>
                    <div className='one'>
                        <h3 className='two'>Javascript</h3>
                        <h3>60%</h3><br />
                    </div>
                    <div className='one'>
                        <h3 className='two'>React Js</h3>
                        <h3>70%</h3><br />
                    </div>
                </div>
                <div className='backend'>
                    <h1 className='head'>Backend</h1><br />
                    <div className='one'>
                        <h3 className='two'>c</h3>
                        <h3>90%</h3><br />
                    </div>
                    <div className='one'>
                        <h3 className='two'>Java</h3>
                        <h3>80%</h3><br />
                    </div>
                    <div className='one'>
                        <h3 className='two'>Data strcture</h3>
                        <h3>70%</h3><br />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Skills
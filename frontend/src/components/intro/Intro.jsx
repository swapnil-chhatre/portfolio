import React from 'react'
import './Intro.css'
import profilePic from '../../assets/profile-2.jpg'

const Intro = () => {
    return (
        <div className='intro'>
            <div className="profile-pic">
                <img src={profilePic} alt="Profile" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
            </div>
            <h1> Hi!&#128075;I am Swapnil Chhatre 
                <br/> &#128187;Full-stack Software Engineer 
                <br/> &#x1F4CD;Sydney, Australia
            </h1>
            <span class="flag"></span>
            <p>
                I am a passionate software engineer with a strong foundation in full-stack development.
                My interests lie in building scalable web applications and exploring new technologies.
                I design AI and Data solutions in Cloud and Edge environments for solving real-world problems.
            </p>
            <div className="intro-action">
                <div className="intro-resume">&#x1F4E5; My Resume</div>
            </div>
        </div>
    )
}

export default Intro

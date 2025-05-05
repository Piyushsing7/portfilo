import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">What I Do</span>
            <span className="skillDesc">
                I’m a creative and detail-oriented web designer with expertise in building visually engaging, 
                responsive, and user-friendly websites. I specialize in HTML, CSS, JavaScript, and tools like 
                Figma.
            </span>

            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UI/UX Design Icon" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p>Designing intuitive interfaces and seamless user experiences with a focus on accessibility and usability.</p>
                    </div>
                </div>

                <div className="skillBar">
                    <img src={WebDesign} alt="Website Design Icon" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Website Developer</h2>
                        <p>Creating modern, responsive, and SEO-friendly websites optimized for performance and branding.</p>
                    </div>
                </div>

                <div className="skillBar">
                    <img src={AppDesign} alt="App Design Icon" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Software Development</h2>
                        <p>I develop scalable and efficient software solutions with clean, maintainable code, integrating both frontend and backend technologies to bring ideas to life.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;

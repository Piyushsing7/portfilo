import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">
                Hi, I'm <span className="introName">Piyush Singh</span> <br />                     
                Web Developer | Fullstack Enthusiast
                </span>
                <p className="introPara">
                I'm a skilled web developer with a strong background in designing and building responsive, user-friendly websites. I specialize in creating visually appealing interfaces using technologies like React.js, Next.js, and Material UI. With a passion for clean code and intuitive design, 
                I strive to deliver seamless user experiences across all devices.<br />
                Whether it's building modern single-page applications or optimizing UI components for performance, 
                I bring creativity and precision to every project.
                </p>
                <Link to="contact" smooth={true} duration={500}>
                    <button className="btn">
                        Hire Me
                        <img src={btnImg} alt="Hire Me Icon" className="btnImg" />
                    </button>

                </Link>
            </div>
            {/* <img src={bg} alt="Profile background" className="bg" /> */}
        </section>
    );
};

export default Intro;

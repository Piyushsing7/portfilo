import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';
import Portfolio6 from '../../assets/portfolio-6.png';

const portfolioImages = [
    { src: Portfolio1, alt: "E-commerce Landing Page" },
    { src: Portfolio2, alt: "Travel Agency Website" },
    { src: Portfolio3, alt: "Portfolio Showcase UI" },
    { src: Portfolio4, alt: "Business Dashboard Design" },
    { src: Portfolio5, alt: "Mobile App Concept" },
    { src: Portfolio6, alt: "Creative Blog Layout" }
];

const Works = () => {
    return (
        <section id="works">
            <h2 className="worksTitle">My Portfolio</h2>
            <p className="worksDesc">
            I craft clean, modern, and responsive websites that combine visual appeal with seamless functionality. 
            Explore my portfolio to see thoughtful design and efficient development in action.
            </p>
            <div className="worksImgs">
                {portfolioImages.map((item, index) => (
                    <img key={index} src={item.src} alt={item.alt} className="worksImg" />
                ))}
            </div>
            <button className="workBtn">See More</button>
        </section>
    );
};

export default Works;

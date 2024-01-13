'use client';
import { useState } from "react";
import data from '../data/personal.json';

const heroSection = () => {
    const [personal] = useState(data);

    return ( 
        <section id="hero" className="d-flex flex-column justify-content-center">
            <div className="container" data-aos="zoom-in" data-aos-delay="100">
                <h1>{personal.name}</h1>
                <p>I'm <span className="typed" data-typed-items={personal.title}></span></p>
                <div className="social-links">
                    {
                        personal.socials && personal.socials.map((social, index) => {
                            return (
                                <a href={social.url} className={social.name} key={'social_' + index}><i className={social.icon}></i></a>
                            )
                        })
                    }
                </div>
            </div>
        </section>
     );
}
 
export default heroSection;
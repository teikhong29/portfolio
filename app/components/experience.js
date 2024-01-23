'use client';
import { useState } from "react";
import data from '../data/experiences.json';

const Experience = () => {
    const [experiences] = useState(data);

    return ( 
        <section id="experience" className="experience resume">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Experience</h2>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <h3 className="resume-title">Professional Experience</h3>
                        {
                            experiences && experiences.map((exp, index) => {
                                return (
                                    <div className="resume-item" key={'exp_' + index}>
                                        <h4>{exp.title}</h4>
                                        <h5>{exp.year}</h5>
                                        <p><em>{exp.company}</em></p>
                                        {
                                            exp.description && (
                                                <ul>
                                                    {
                                                        exp.description.map((des, index) => {
                                                            return (
                                                                <li key={index}>{des}</li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            )
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Experience;
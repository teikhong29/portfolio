'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import eduData from '../data/education.json';
import certData from '../data/Certification.json';

const EducationAndCertification = () => {
    const [education] = useState(eduData);
    const [certification] = useState(certData);

    return ( 
        <section id="eduCert" className="eduCert resume">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Education & Certification</h2>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <h3 className="resume-title">Education</h3>
                        {
                            education && education.map((edu, index) => {
                                return (
                                    <div className="resume-item" key={'edu_' + index}>
                                        <h4>{edu.course}</h4>
                                        <h5>{edu.duration}</h5>
                                        <p><em>{edu.location}</em></p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="col-lg-6">
                        <h3 className="resume-title">Certification</h3>
                        {
                            certification && certification.map((cert, index) => {
                                return (
                                    <div  key={'cert_' + index}>
                                        <div className="col-4 col-md-3 col-lg-3 text-center">
                                            <Image src={cert.badge} alt={cert.certificate} width={80} height={80} loading="lazy" />
                                        </div>
                                        <div className="col-8 col-md-9 col-lg-9 text-start">
                                            {
                                                cert.credlyUrl && (
                                                    <Link href={cert.credlyUrl} rel="noopener noreferrer" target="_blank">
                                                        <h4>{cert.certificate}</h4>
                                                    </Link>
                                                )
                                            }
                                            {
                                                !cert.credlyUrl && (
                                                    <h5>{cert.certificate}</h5>
                                                )
                                            }
                                            <span className="d-none d-md-block">{cert.year}</span>
                                        </div>
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
 
export default EducationAndCertification;
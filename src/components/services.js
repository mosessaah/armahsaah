
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNode, faReact, faJs, faGithub, faDocker, faJenkins, faAws  } from '@fortawesome/free-brands-svg-icons';
import { faLink, faLinkSlash, faDatabase } from '@fortawesome/free-solid-svg-icons';


// Example service data array
const servicesData = [
    {
      id: 1,
      icon: 'rikodin-icon.png',
      title: 'Rekodin',
      delay: '.1s',
      description: 'In response to the pressing need for a more robust medical record system in Nigeria,',
      detail:"In response to the pressing need for a more robust medical record system in Nigeria, which currently lacks adequate " 
      + "support for patient-doctor relationships and secure patient information management, I developed Rikodin, a Medical Record System (MRS)." 
      + " Named after the Hausa word for record, Rikodin is designed to enhance the confidentiality and security of patient records while fostering  "
      + "improved interactions between patients and doctors. This system was developed as a senior project by collaborating with Nigerian data science " 
      + "student Toluwanimi Olufawo. It features a React frontend and a Node.js backend that handles functionalities such as patient registration, doctor-patient " 
      + "appointments, employee role management, and the uploading and generating of medical records and lab results. The system operates on a MySQL InnoDB Cluster "
      + "with three replicas and two router nodes for high availability, supported by a custom authentication system that manages sign-ins and user privileges. Check my repo for project",
      image: 'img-work-detail.jpg',
      git_url:'https://github.com/mosessaah/rikodin',
      url_icon: faLinkSlash,
      icon_color: "gray",
      url: "",
      frameWork: [faNode, faReact, faJs, faDatabase]
    },

    {
        id: 1,
        icon: 'intentional-icon.png',
        title: 'Intentional',
        delay: '.2s',
        description: "I'm nearing completion on a full-stack web application for Intentional, designed to be the primary " ,
        detail:"I'm nearing completion on a full-stack web application for Intentional, designed to be the primary " 
        + "website for supporting international students both in and out of the U.S. This React and Node.js-based platform "
        + "integrates Auth0 and MongoDB to provide resources and foster a community for academic and professional development." 
        + "Key features include personalized content delivery, community forums, and a searchable library that incorporates "
        + "external APIs to boost user engagement. Additionally, I have implemented a dynamic CMS to support multilingual capabilities " +
        + "and established a CI/CD pipeline for automated testing and deployment, ensuring efficient and high-quality releases. " 
        + "The platform also leverages advanced security protocols to protect user data and ensure compliance with international privacy regulations. " 
        + "As an intern at Intentional, I am contributing to a mission that empowers students from diverse backgrounds to thrive academically, professionally, and personally.",
        image: 'img-detail-int.jpg',
        git_url:'https://github.com/mosessaah/intentional',
        url_icon: faLinkSlash,
        icon_color: "gray", // #f26c4f other color
        url: "google.com",
        frameWork: [faNode, faReact, faJs, faDatabase]
    },
      
    {
        id: 1,
        icon: 'deployment-icon.png',
        title: 'Build & Deploy',
        delay: '.3s',
        description: 'Nodejs App built from scratch, containerized and deployed to AWS ECS using Jenkins',
        detail:"Led the containerization and deployment of a Node.js application using Docker and AWS ECS," 
        + "facilitated by Jenkins for CI/CD. Developed Dockerfiles for consistent environments across all stages " 
        + "and automated pipelines for building, testing, and deployment. Integrated AWS ELB and auto-scaling to "
        + "enhance load distribution and application scalability. Implemented AWS CloudWatch for performance monitoring "
        + "and used AWS Secrets Manager for secure configuration management. Achieved a 70% reduction in deployment time," 
        + "significantly improved system resilience, and enhanced developer productivity.",
        image: 'img-work-detail-01.jpg',
        git_url:'https://github.com/mosessaah/nodejs-webapp',
        url_icon: faLinkSlash,
        icon_color: "gray", 
        url: "google.com",
        frameWork: [faNode, faReact, faDocker, faJenkins, faAws]
    },
];

function Services() {
    const [selectedService, setSelectedService] = useState(null);

    const handleReadMoreClick = (service) => {
    setSelectedService(service);
    };

    const handleCloseModal = () => {
    setSelectedService(null);
    };

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section id="my-services" className="ts-block ts-xs-text-center pb-0">
            <div className="container">
                <div className="ts-title text-center">
                <h2>Some of my projects </h2>
                </div>
                <div className="row">
                {servicesData.map(service => (
                    <div key={service.id} className="col-sm-6 col-md-4 col-xl-4">
                    <div className="ts-item" data-animate="ts-fadeInUp" data-delay={service.delay}>
                        <div className="ts-item-content">
                        <div className="ts-item-header">
                            <figure className="icon">
                            <img src={`assets/img/${service.icon}`} alt="" />
                            </figure>
                        </div>
                        <div className="ts-item-body">
                            <h4>{service.title}</h4>
                            <p className="mb-0">{service.description}</p>
                        </div>
                        <div className="ts-item-footer">
                            <a className="ts-link-arrow-effect" onClick={() => handleReadMoreClick(service)} href='#project-details'>
                            <span>Read More</span>
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                ))}
                </div>
            </div>

            {selectedService && (
                <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog">
                    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div className="modal-content border-0 rounded-0">
                            <div className="modal-header bg-light px-5 pt-0 pb-5 position-relative">
                                <button type="button" className="close" onClick={handleCloseModal} aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                {/* Top Left Corner Icons */}
                                <div className="top-left-icons" style={{ position: 'absolute', top: '10px', left: '10px' }}>
                                    <a href={selectedService.git_url} className="fas"> <FontAwesomeIcon icon={faGithub} size="2x" fade style={{color: "#f26c4f",}} /></a>
                                    <a href={selectedService.url} className="fas"> <FontAwesomeIcon icon={selectedService.url_icon  } size="2x" style={{color: selectedService.icon_color,}} /></a>
                                </div>
                            </div>
                            
                            <div className="modal-body p-5" style={{ flex: 2, textAlign: 'left' }}>
                                <div style={{ display: 'flex', alignItems: 'start' }}>
                                    <div style={{ flex: 1, marginRight: '10%' }}>
                                        <h4 style={{ marginBottom: '20px', color: '#f26c4f' }}>{selectedService.title}</h4>
                                        <img src={`assets/img/${selectedService.image}`} alt={selectedService.title} style={{ position: 'relative', width: '100%' }} />
                                        {/* Bottom Icons */}
                                        <div className="bottom-icons" style={{ position: 'absolute', bottom: '6%', left: '52%', transform: 'translateX(-50%)', display: 'flex' }}>
                                            {selectedService.frameWork.map((icon, index) => (
                                                <FontAwesomeIcon key={index} icon={icon} size="2x" style={{ color: "gray", marginRight: '10px' }} />
                                            ))}
                                        </div>
                                    </div>
                                    <div style={{ flex: 2, textAlign: 'left' }}>
                                        <p style={{ color: 'black', marginTop: "20%", fontSize: '12px' }}>{selectedService.detail}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Services;

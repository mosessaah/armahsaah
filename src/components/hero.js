
import React from 'react';
// If you're using react-icons, import the icons like so:
import { FaTwitter, FaGithub, FaSlack, FaInstagram } from 'react-icons/fa';

const socialLinks = [
    { id: 'twitter', icon: <FaTwitter />, href: 'https://twitter.com ' },
    { id: 'github', icon: <FaGithub />, href: 'https://github.com/mosessaah'},
    { id: 'slack', icon: <FaSlack />, href: 'https://slack.com' }, // Replace with your Slack URL if you have one
    { id: 'instagram', icon: <FaInstagram />, href: 'https://instagram.com/armahsaahjr' },
  ];

const hero = () => {
    return (
        <div id="ts-hero" class="ts-animate-hero-items">
            <div class="container position-relative h-100 ts-align__vertical">
                <div class="row w-100">
                    <div class="col-md-8">
                        {/* <!--SOCIAL ICONS--> */}
                        <figure className="ts-social-icons mb-4">
                            {socialLinks.map(link => (
                                <a key={link.id} href={link.href} className="mr-3">
                                {link.icon}
                                </a>
                            ))}
                        </figure>

                        {/* <!--TITLE --> */}
                        <h1> I am Moses </h1>
                        <h1 class="ts-bubble-border">
                            <span class="ts-title-rotate">
                                <span>Student </span>
                                <span class="active">Software Engineer</span>
                                <span>DevOps Engineer </span>
                                <span>Cloud Solution Architech </span>
                                <span> Kingdom Citizen </span>
                            </span>
                        </h1>

                    </div>
                    {/* <!--end col-md-8--> */}
                </div>
                {/* <!--end row--> */}
                <a href="#my-services" class="ts-btn-effect position-absolute ts-bottom__0 ts-left__0 ts-scroll ml-3 mb-3">
                    <span class="ts-visible ts-circle__sm rounded-0 ts-bg-primary">
                        <i class="fa fa-arrow-down text-white"></i>
                    </span>
                    <span class="ts-hidden ts-circle__sm rounded-0">
                        <i class="fa fa-arrow-down text-white"></i>
                    </span>
                </a>

            </div>
        {/* <!--end container-->
        <!--END HERO CONTENT ************************************************************************************-->

        <!--HERO BACKGROUND *************************************************************************************--> */}
        <div class="ts-background">
            <div class="ts-background-image" data-bg-image="assets/img/bg-hero.jpg"></div>
        </div>
        {/* <!--END HERO BACKGROUND *********************************************************************************--> */}

    </div>
    
    );
}

export default hero;

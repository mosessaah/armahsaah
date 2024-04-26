import emailjs from '@emailjs/browser'
import { useRef } from 'react'

const Contact =()=> {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()
        emailjs
        .sendForm('service_q793pau', 'template_vlzbvjh', form.current, 'TRfkWKDSqnkV330AG')
        .then(
            () => {
            alert('Message successfully sent!')
            window.location.reload(false)
            },
            () => {
            alert('Failed to send the message, please try again')
            }
        ); 
    }
    
    return(

        <section id="contact" class="ts-block ts-separate-bg-element" data-bg-image="assets/img/bg-man-wall.jpg" data-bg-image-opacity=".1">
                <div class="container">
                    <div class="ts-title text-center">
                        <h2 class="ts-bubble-border">Get In Touch</h2>
                    </div>
                    {/* <!--end row--> */}

                    <div class="pt-5">
                        <div class="row">
                            <div class="col-md-4">
                                <h3>Let’s Connect</h3>
                                <div class="ts-column-count-sm-2">
                                    <a href="#" class="mb-3 d-flex text-white ts-align__vertical">
                                    <span class="ts-circle__xs border border-white ts-border-light mr-4">
                                        <i class="fab fa-discord"></i>
                                    </span>
                                        <span>Discord</span>
                                    </a>
                                    {/* <!--end link--> */}
                                    <a href="#" class="mb-3 d-flex text-white ts-align__vertical">
                                    <span class="ts-circle__xs border border-white ts-border-light mr-4">
                                        <i class="fab fa-instagram"></i>
                                    </span>
                                        <span>Instagram</span>
                                    </a>
                                    {/* <!--end link--> */}
                                    <a href="#" class="mb-3 d-flex text-white ts-align__vertical">
                                    <span class="ts-circle__xs border border-white ts-border-light mr-4">
                                        <i class="fab fa-github"></i>
                                    </span>
                                        <span>Github</span>
                                    </a>
                                    {/* <!--end link--> */}
                                </div>
                            </div>
                            {/* <!--end col-md-4--> */}
                            <div class="col-md-8">
                                <h3>Send Me a Message</h3>
                                <form id="form-contact"  class="clearfix ts-form ts-form-email" ref={form} onSubmit={sendEmail}>
                                
                                    <div class="row">
                                        <div class="col-md-6 col-sm-6">
                                            <div class="form-group">
                                                <label for="form-contact-name">Name *</label>
                                                <input type="text" class="form-control" id="form-contact-name" name="name" placeholder="Name" required/>
                                            </div>
                                            {/* <!--end form-group --> */}
                                        </div>
                                        {/* <!--end col-md-6 col-sm-6 --> */}
                                        <div class="col-md-6 col-sm-6">
                                            <div class="form-group">
                                                <label for="form-contact-email">Email *</label>
                                                <input type="email" class="form-control" id="form-contact-email" name="email" placeholder="Email" required/>
                                            </div>
                                            {/* <!--end form-group --> */}
                                        </div>
                                        {/* <!--end col-md-6 col-sm-6 --> */}
                                    </div>
                                    {/* <!--end row --> */}
                                    <div class="form-group">
                                        <label for="form-contact-subject">Subject *</label>
                                        <input type="text" class="form-control" id="form-contact-subject" name="subject" placeholder="Subject" required/>
                                    </div>
                                    {/* <!--end form-group --> */}
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label for="form-contact-message">Message *</label>
                                                <textarea class="form-control" id="form-contact-message" rows="5" name="message" placeholder="Message" required></textarea>
                                            </div>
                                            {/* <!--end form-group --> */}
                                        </div>
                                        {/* <!--end col-md-12 --> */}
                                    </div>
                                    {/* <!--end row --> */}
                                    <div class="form-group clearfix">
                                        <input type="submit" class="btn btn-primary float-right ts-btn-arrow" id="form-contact-submit" value="Send a Message" />
                                    </div>
                                    {/* <!--end form-group --> */}
                                    <div class="form-contact-status"></div>
                                </form>
                                {/* <!--end form-contact --> */}
                            </div>
                        </div>
                        {/* <!--end row--> */}
                    </div>
                </div>
                {/* <!--end container--> */}
            </section>
    );
}
export default Contact;
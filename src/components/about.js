const about =() => {
    return(
        <section id="about-me" class="ts-block pb-4">
                <div class="container">
                    <div class="ts-title text-center">
                        <h2>About Me</h2>
                    </div>
                    {/* <!--end ts-title--> */}
                    <div class="row ts-align__vertical">
                        <div class="col-md-6">
                            <img src="assets/img/img-man-looking.jpg" alt="" class="mw-100 mb-5"/>
                        </div>
                        <div class="col-md-6">
                            <h4 class="ts-bubble-border">Hi There</h4>
                            <p>
                                Filled with the Holy Spirit, I am passionate to architect and implement technical solutions for problems, 
                                I love to learn and I find joy in helping others and being productive. Quiet at the appropriate times.  
                            </p>
                            <p>    
                                I have fun to the fullest 😆. I'm that one person that can be good and compelitive at almost every sport and game. 
                                Very active a Love to play soccer, volley, tennis and pickleball. My favorite video game is FiFa.
                            </p>

                            <p> And I'm also a music producer 🎼 🎧 🎹 🤦🏾‍♂️ </p>

                            
                            <dl class="ts-column-count-2">
                                <dt>Name:</dt>
                                <dd>Moses Saah</dd>
                                <dt>Phone:</dt>
                                <dd>+1 918-350-1264</dd>
                                <dt>Email:</dt>
                                <dd>mosessaah@oru.edu</dd>
                                <dt>Instagram:</dt>
                                <dd>armahsaahjr</dd>
                            </dl>
                            <hr class="ts-hr-light mb-5"/>
                            <a href="#contact" class="ts-btn-effect mr-2">
                                <span class="ts-visible btn btn-primary ts-btn-arrow">Contact Me</span>
                                <span class="ts-hidden btn btn-primary ts-btn-arrow" data-bg-color="#d44729">Contact Me</span>
                            </a>
                            <a href="/Resume_copy.pdf" download="Moses_Saah_CV.pdf" className="ts-btn-effect">
                                <span class="ts-visible btn btn-outline-light">
                                    <i class="fa fa-download small mr-2"></i>
                                    Download CV
                                </span>
                                <span class="ts-hidden btn btn-light bg-white">
                                    <i class="fa fa-download small mr-2"></i>
                                    Download CV
                                </span>
                            </a>
                        </div>
                    </div>
                    {/* <!--end row--> */}
                </div>
            </section>

    );
}
export default about;

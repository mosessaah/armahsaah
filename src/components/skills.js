const skills = () => {
    return(
        <section id="my-skills" class="ts-block pb-5">
            <div class="container">
                <div class="ts-title text-center">
                    <h2>My Skills</h2>
                </div>
                {/* <!--end ts-title--> */}
                <h4>Every Day is a  New Challenge</h4>
                <div class="row">
                    <div class="col-md-6">
                        <p> As a Software/DevOps Engineer, I bring a well-rounded skill set that merges development with operations, significantly enhancing 
                        the efficiency and effectiveness of both creating and deploying software solutions. I am adept in 
                        full-stack development, working with technologies like HTML, CSS, JavaScript, React, Node.js, Django, Next.js, .Net, and 
                        robust API development using middleware such as Express and RESTful services, alongside databases including MySQL, PostgreSQL, and NoSQL systems like MongoDB.
                        </p>
                        <p>
                            I have also demonstrated expertise in cloud infrastructure management accross a wide range of Amazon Web Services, and a fundemental 
                            understanding of Azura. Architecting and implementing cloud solutions based on customers problem and their financial capability. 
                            My professional ability extends to containerization and orchestration, establishing CI/CD pipelines utilizing tools like Docker, Kubernetes, Jenkins, terraform, Ansible, Git, Github etc, to create, build, automate deployment, run, scale, 
                            and management applications.
                        </p>
                        <a href="#contact" class="btn btn-outline-light mb-5">Contact Me</a>
                    </div>
                    {/* <!--end col-md-6--> */}
                    <div class="col-md-6">
                        <div class="progress" data-progress-width="90%">
                            <h5 class="ts-progress-title">Web Developer (Full-Stack)</h5>
                            <figure class="ts-progress-value"></figure>
                            <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        {/* <!--end progress--> */}
                        <div class="progress" data-progress-width="80%">
                            <h5 class="ts-progress-title">DevOps</h5>
                            <figure class="ts-progress-value"></figure>
                            <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        {/* <!--end progress--> */}
                        <div class="progress" data-progress-width="80%">
                            <h5 class="ts-progress-title">Cloud Computing (AWS)</h5>
                            <figure class="ts-progress-value"></figure>
                            <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        {/* <!--end progress--> */}
                        <div class="progress" data-progress-width="90%">
                            <h5 class="ts-progress-title">Programming</h5>
                            <figure class="ts-progress-value"></figure>
                            <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        {/* <!--end progress--> */}
                    </div>
                    {/* <!--end col-md-6--> */}
                </div>
                {/* <!--end row--> */}
            </div>
            {/* <!--end container--> */}
        </section>
    );
}
export default skills;
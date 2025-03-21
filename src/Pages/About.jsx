import img from '../assets/img.jpeg';


function About(){
    return <>
    <section className="py-5 bg-light">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-md-4">
        <img src={img} alt="About Me" className="img-fluid rounded shadow" />
      </div>
      <div className="col-md-6">
        <h2 className="mb-4">About Me</h2>
        <p className="lead">
          I'm a passionate MERN Stack Developer with experience building responsive, scalable, and dynamic web applications.
        </p>
        <p>
          I specialize in developing full-stack solutions using MongoDB, Express.js, React, and Node.js.  
          I love turning complex problems into simple, elegant code and am always eager to learn and grow with the latest technologies.
        </p>
        <p>
          Whether it's building APIs, creating stunning frontends, or optimizing databases — I enjoy every step of the development process.
        </p>
        <a href="#projects" className="btn btn-primary mt-3">View My Projects</a>
      </div>
    </div>
  </div>
</section>
</>
}
export default About;
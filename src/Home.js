import singer from "./images/Remi-singer.jpg";
import microphone from "./images/microphone.jpg";
import developer from "./images/Remi-developer.jpg";

export default function Home() {
  return (
    <div id="content">
      <div className="hero row">
        <div className="col-lg-6">
          <h3>Hi!</h3>
          <h1>
            I'm <br />
            <span className="name">Remi</span>
          </h1>
        </div>
        <div className="col-lg-6 d-none d-md-block"></div>
      </div>
      <div className="row" id="work">
        <div className="col-md-4 p-0 work-img">
          <img className="img-fluid" src={singer} alt="Remi singer" />
          <div className="overlay">
            <h2>Singer / Actor</h2>
            <p className="p-5 text-center fs-4">
              See my performance background:
            </p>
            <button className="launch-button">Coming soon</button>
          </div>
        </div>
        <div className="col-md-4 p-0 work-img">
          <img className="img-fluid" src={microphone} alt="microphone" />
          <div className="overlay" id="vocal-overlay">
            <h2>Vocal coach</h2>
            <p className="p-5 text-center fs-4">
              See details and student testimonials here:
            </p>
            <button className="launch-button" id="vocal-button">
              Details
            </button>
          </div>
        </div>
        <div className="col-md-4 p-0 work-img">
          <img className="img-fluid" src={developer} alt="Remi profile" />
          <div className="overlay">
            <h2>Web developer</h2>
            <p className="p-4 text-center fs-4">
              Web design and development services for artists and small business
              owners:
            </p>
            <button className="launch-button">Coming soon</button>
          </div>
        </div>
      </div>
      <div className="contact row" id="contact">
        <div className="col-md-6 d-none d-md-block">
          <h1 className="mt-4 mb-2 mb-md-5">
            Let's <span className="name">get in touch!</span>
          </h1>
          <div className="d-flex">
            <a
              href="https://www.instagram.com/remi.0.3"
              className="fs-1 me-3"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-instagram inst-logo"></i>
            </a>
            <a
              href="https://www.youtube.com/@remi03"
              className="fs-1 mx-3"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-youtube youtube-logo"></i>
            </a>
            <a
              href="https://twitter.com/03_remi"
              className="fs-1 mx-3"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-x-twitter twitter-logo"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/remi-yamazaki-77580b55/"
              className="fs-1 mx-3"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin linkedin-logo"></i>
            </a>
            <a
              href="https://github.com/remiyamazaki03"
              className="fs-1 ms-3"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github github-logo"></i>
            </a>
          </div>
        </div>
        <div className="col-md-6 d-flex flex-column">
          <h1 className="d-block d-md-none my-4">
            <span className="name">Contact</span> me
          </h1>
          <div className="d-flex d-block d-md-none mb-3 justify-content-center">
            <a
              href="https://www.instagram.com/remi.0.3"
              className="fs-1 me-3"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-instagram inst-logo"></i>
            </a>
            <a
              href="https://www.youtube.com/@remi03"
              className="fs-1 mx-3"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-youtube youtube-logo"></i>
            </a>
            <a
              href="https://twitter.com/03_remi"
              className="fs-1 mx-3"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-x-twitter twitter-logo"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/remi-yamazaki-77580b55/"
              className="fs-1 mx-3"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin linkedin-logo"></i>
            </a>
            <a
              href="https://github.com/remiyamazaki03"
              className="fs-1 ms-3"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github github-logo"></i>
            </a>
          </div>
          <form className="mt-md-5 me-md-5 pe-md-5">
            <label for="name">name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="name"
            />
            <label for="email" className="mt-3">
              email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="email"
            />
            <label for="message" className="mt-3">
              message
            </label>
            <br />
            <textarea
              id="message"
              className="form-control"
              rows="5"
              placeholder="Sorry, my form isn't working yet. Please contact me via social media while I get this up and running!"
            ></textarea>
            <br />
            <button className="submit-button mt-md-4">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

import singer from "./images/Remi-singer.jpg";
import microphone from "./images/microphone.jpg";
import developer from "./images/Remi-developer.jpg";

export default function Home() {
  return (
    <div>
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
    </div>
  );
}

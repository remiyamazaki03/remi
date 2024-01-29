import { Link, useNavigate } from "react-router-dom";
import singer from "./images/Remi-singer.jpg";
import microphone from "./images/microphone.jpg";
import developer from "./images/Remi-developer.jpg";

export default function Home() {
  const navigate = useNavigate();
  const handleClick = (to) => (event) => {
    window.scrollTo(0, 0);
    if (to) {
      navigate(to);
    }
    event.preventDefault();
  };
  return (
    <div>
      <div className="hero row">
        <div className="col-lg-6 name">
          <h3 className="pretty">Hi!</h3>
          <h1 className="pretty">
            I'm
            <div className="brand">Remi</div>
          </h1>
        </div>
        <div className="col-lg-6 d-none d-md-block"></div>
      </div>
      <div className="row" id="work">
        <div className="col-md-4 p-0 work-img">
          <img className="img-fluid" src={singer} alt="Remi singer" />
          <div className="overlay">
            <h2>Singer / Actor</h2>
            <p className="p-5 text-center fs-4">Get to know me!</p>
            <Link
              to="/about"
              className="launch-button"
              onClick={handleClick("/about")}
            >
              About me
            </Link>
          </div>
        </div>
        <div className="col-md-4 p-0 work-img">
          <img className="img-fluid" src={microphone} alt="microphone" />
          <div className="overlay" id="vocal-overlay">
            <h2>Vocal coach</h2>
            <p className="p-5 text-center fs-4">
              See details and student testimonials here:
            </p>
            <Link
              to="/voicecoach"
              className="launch-button"
              onClick={handleClick("/voicecoach")}
            >
              See more
            </Link>
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

            <Link
              to="/webdeveloper"
              className="launch-button"
              onClick={handleClick("/webdeveloper")}
            >
              Coming soon
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

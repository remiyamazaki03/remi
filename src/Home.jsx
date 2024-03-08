import { Link, useNavigate } from "react-router-dom";
import singer from "./images/Remi-singer.jpg";
import microphone from "./images/microphone.jpg";
import developer from "./images/Remi-developer.jpg";
import { useTranslation, Trans } from "react-i18next";

export default function Home() {
  const navigate = useNavigate();
  const handleClick = (to) => (event) => {
    window.scrollTo(0, 0);
    if (to) {
      navigate(to);
    }
    event.preventDefault();
  };
  const { t } = useTranslation();
  return (
    <div>
      <div className="hero row">
        <div className="col-lg-6 name">
          <h3 className="pretty">Hi!</h3>
          <h1 className="pretty">
            {t("home.greeting.line1")}
            <div className="brand">{t("home.greeting.line2")}</div>
          </h1>
        </div>
        <div className="col-lg-6 d-none d-md-block"></div>
      </div>
      <div className="row" id="work">
        <div className="col-md-4 p-0 work-img">
          <img className="img-fluid" src={singer} alt="Remi singer" />
          <div className="overlay">
            <h2 className="overlayTitle">{t("home.title1")}</h2>
            <p className="p-5 text-center fs-4">{t("home.details1")}</p>
            <Link
              to="/about"
              className="launch-button"
              onClick={handleClick("/about")}
            >
              {t("home.button1")}
            </Link>
          </div>
        </div>
        <div className="col-md-4 p-0 work-img">
          <img className="img-fluid" src={microphone} alt="microphone" />
          <div className="overlay" id="vocal-overlay">
            <h2 className="overlayTitle">{t("home.title2")}</h2>
            <p className="p-5 text-center fs-4">{t("home.details2")}</p>
            <Link
              to="/voicecoach"
              className="launch-button"
              id="vocal-button"
              onClick={handleClick("/voicecoach")}
            >
              {t("home.button2")}
            </Link>
          </div>
        </div>
        <div className="col-md-4 p-0 work-img">
          <img className="img-fluid" src={developer} alt="Remi profile" />
          <div className="overlay">
            <h2 className="overlayTitle">{t("home.title3")}</h2>
            <p className="p-4 text-center fs-4">{t("home.details3")}</p>

            <Link
              to="/webdeveloper"
              className="launch-button"
              onClick={handleClick("/webdeveloper")}
            >
              {t("home.button3")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Link, useNavigate } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";
import { Helmet } from "react-helmet-async";

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
      <Helmet>
        <title>{t("home.tags.title")}</title>
        <meta name="description" content={t("home.tags.description")} />
        <meta property="og:title" content={t("home.tags.title")} />
        <meta property="og:description" content={t("home.tags.description")} />
      </Helmet>
      <div className="hero row">
        <div className="col-lg-6 name">
          <h3 className="highlight homepage">Hi!</h3>
          <h1 className="highlight homepage">
            {t("home.greeting.line1")}
            <div className="brand">
              <Trans i18nKey="home.greeting.line2"></Trans>
            </div>
          </h1>
        </div>
        <div className="col-lg-6 d-none d-md-block"></div>
      </div>
      <div className="row" id="work">
        <div className="col-md-4 p-0 work-img">
          <img
            className="img-fluid"
            src="/images/Remi-singer.jpg"
            alt="Remi singer"
          />
          <div className="overlay">
            <h2 className="overlayTitle">{t("home.title1")}</h2>
            <h3 className="p-5 text-center fs-4 subheader">
              {t("home.details1")}
            </h3>
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
          <img
            className="img-fluid"
            src="/images/microphone.jpg"
            alt="microphone"
          />
          <div className="overlay" id="vocal-overlay">
            <h2 className="overlayTitle">{t("home.title2")}</h2>
            <h3 className="p-5 text-center fs-4 subheader">
              {t("home.details2")}
            </h3>
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
          <img
            className="img-fluid"
            src="/images/Remi-developer.jpg"
            alt="Remi profile"
          />
          <div className="overlay">
            <h2 className="overlayTitle">{t("home.title3")}</h2>
            <h3 className="p-4 text-center fs-4 subheader">
              {t("home.details3")}
            </h3>

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

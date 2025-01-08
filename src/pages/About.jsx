import { Link } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    <div>
      <title>{t("about.tags.title")}</title>
      <meta name="description" content={t("about.tags.description")} />
      <meta property="og:title" content={t("about.tags.title")} />
      <meta property="og:description" content={t("about.tags.description")} />
      <link rel="canonical" href="https://chameleon-studios.com/about" />
      <h2 className="title m-0 d-flex align-items-center">{t("about.top")}</h2>
      <div className="about2 row text-center align-items-center">
        <div className="col-md-8 p-5">
          <h2 className="mt-2 fs-3">{t("about.greeting2")}</h2>
          <p className="mt-4 bio ">
            <Trans i18nKey="about.content2.line1"></Trans>
            <br />
            <br />
            <Trans i18nKey="about.content2.line2"></Trans>
            <br />
            <br />
            <Trans i18nKey="about.content2.line3"></Trans>
            <br />
            <br />
            {t("about.content2.line4a")}
            <Link
              to="/voicecoach"
              style={{
                color: "#6347ff",
              }}
            >
              {t("about.content2.lessons")}
            </Link>
            {t("about.content2.line4b")} <br />
            <br />
            <Trans i18nKey="about.content2.line5"></Trans>
            <br />
            <br />
            {t("about.content2.ctaa")}
            <Link
              to="/voicecoach"
              style={{
                color: "#6347ff",
              }}
            >
              {t("about.content2.ctalink")}
            </Link>
            {t("about.content2.ctab")}
          </p>
        </div>
        <img
          className="about-logo img-fluid col-md-4 h-md-100 d-block mx-auto pe-5"
          src="/images/chameleon-studios-logo-about2.png"
          alt="logo"
        />
      </div>
      <div className="about m-0 row text-center align-items-center">
        <img
          className="img-fluid col-md-4 about-photo d-block mx-auto"
          src="/images/aboutremi.jpg"
          alt="Remi"
        />
        <div className="col-md-8 p-5">
          <h2 className="mt-2 fs-3">{t("about.greeting")}</h2>
          <p className="mt-4 bio ">
            {t("about.content.line1a")}
            <a
              href="https://www.brooklyntabernacle.org/music/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#6347ff",
              }}
            >
              Brooklyn Tabernacle Choir
            </a>
            {t("about.content.line1b")}
            <a
              href="https://www.williammcdowellmusic.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#6347ff",
              }}
            >
              William McDowell
            </a>
            {t("about.content.line1and")}
            <a
              href="https://nataliegrant.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#6347ff",
              }}
            >
              Natalie Grant
            </a>
            {t("about.content.line1c")}{" "}
            <a
              href="https://54below.org/about/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#6347ff",
              }}
            >
              54 Below
            </a>
            {t("about.content.line1d")}
            <br />
            <br />
            {t("about.content.line2")}
            <br />
            <br />
            {t("about.content.line3a")}
            <a
              href="https://music.princeton.edu/people/ronald-cappon/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#6347ff",
              }}
            >
              Ronald Cappon
            </a>
            {t("about.content.line3b")}
            <a
              href="https://chapel.princeton.edu/chapel-choir"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#6347ff",
              }}
            >
              {t("about.content.line3link")}
            </a>
            {t("about.content.line3c")}
            <br />
            <br />
            {t("about.content.line4a")}
            <a
              href="https://www.tokyounion.org/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#6347ff",
              }}
            >
              {t("about.content.line4tuc")}
            </a>
            {t("about.content.line4b")}
            <a
              href="http://ssp-create.com/pupa.html"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#6347ff",
              }}
            >
              SSP
            </a>
            {t("about.content.line4c")}
            <br />
            <br />
            <small>{t("about.cta")}</small>
          </p>
        </div>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";
import { Helmet } from "react-helmet-async";

export default function About() {
  const { t } = useTranslation();
  return (
    <div>
      <Helmet>
        <title>{t("about.tags.title")}</title>
        <meta name="description" content={t("about.tags.description")} />
        <meta name="keywords" content={t("about.tags.keywords")} />
        <meta property="og:title" content={t("about.tags.title")} />
        <meta property="og:description" content={t("about.tags.description")} />
      </Helmet>
      <h2 className="title m-0 d-flex align-items-center">{t("about.top")}</h2>
      <div className="about2 row text-center align-items-center">
        <div className="col-md-8 p-5">
          <h2 className="mt-2 fs-3">{t("about.greeting2")}</h2>
          <p className="mt-4 bio ">
            {t("about.content2.line1")}
            <br />
            <br />
            {t("about.content2.line2")}
            <br />
            <br />
            {t("about.content2.line3a")}

            <Link
              to="https://www.tokyounion.org"
              style={{
                color: "#6347ff",
              }}
            >
              Tokyo Union Church
            </Link>
            {t("about.content2.line3b")}
            <br />
            <br />
            {t("about.content2.line4")}
            <br />
            <br />
            <Trans i18nKey="about.content2.line5a"></Trans>
            <Link
              to="/voicecoach"
              style={{
                color: "#6347ff",
              }}
            >
              {t("about.content2.lessons")}
            </Link>
            <Trans i18nKey="about.content2.line5b"></Trans>
            <br />
            <br />
            <small>{t("about.cta")}</small>
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
          className="img-fluid col-md-4 p-0 h-100 d-none d-md-block"
          src="/images/aboutremi.jpg"
          alt="Remi"
        />
        <div className="col-md-8 p-5">
          <h2 className="mt-2 fs-3">{t("about.greeting")}</h2>
          <p className="mt-4 bio ">
            {t("about.content.line1")}
            <br />
            <br />
            {t("about.content.line2")}
            <br />
            <br />
            {t("about.content.line3a")}

            <Link
              to="https://www.tokyounion.org"
              style={{
                color: "#6347ff",
              }}
            >
              Tokyo Union Church
            </Link>
            {t("about.content.line3b")}
            <br />
            <br />
            {t("about.content.line4")}
            <br />
            <br />
            <Trans i18nKey="about.content.line5a"></Trans>
            <Link
              to="/voicecoach"
              style={{
                color: "#6347ff",
              }}
            >
              {t("about.content.lessons")}
            </Link>
            <Trans i18nKey="about.content.line5b"></Trans>
            <br />
            <br />
            <small>{t("about.cta")}</small>
          </p>
        </div>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";
import aboutremi from "../images/aboutremi.jpg";

export default function About() {
  const { t } = useTranslation();
  return (
    <div>
      <h2 className="title m-0 d-flex align-items-center">{t("about.top")}</h2>
      <div className="about m-0 row text-center align-items-center">
        <div className="col-md-8 p-5">
          <h2 className="mt-2 fs-3">{t("about.greeting")}</h2>
          <p className="mt-4 bio ">
            {t("about.content.line1")} <br />
            <br />
            {t("about.content.line2")}
            <br />
            <br />
            {t("about.content.line3a")}
            <Link to="https://www.tokyounion.org">Tokyo Union Church</Link>
            {t("about.content.line3b")}
            <br />
            <br />
            <Trans i18nKey="about.content.line4a"></Trans>
            <Link to="/voicecoach">{t("about.content.lessons")}</Link>
            <Trans i18nKey="about.content.line4b"></Trans>
            <br />
            <br />
            <small>{t("about.cta")}</small>
          </p>
        </div>
        <img
          className="img-fluid col-md-4 p-0 h-100 d-none d-md-block"
          src={aboutremi}
          alt="Remi"
        />
      </div>
    </div>
  );
}

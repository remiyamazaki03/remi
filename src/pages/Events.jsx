import { useTranslation, Trans } from "react-i18next";

export default function Events() {
  const { t } = useTranslation();
  return (
    <div>
      <title>{t("events.tags.title")}</title>
      <meta name="description" content={t("events.tags.description")} />
      <meta property="og:title" content={t("events.tags.title")} />
      <meta property="og:description" content={t("events.tags.description")} />
      <link rel="canonical" href="https://chameleon-studios.com/events" />
      <h2 className="title m-0 d-flex align-items-center">{t("events.top")}</h2>
      <div className="about2 row text-center py-lg-5">
        <div className="col-md-6 p-5">
          <h2 className="mt-2 fs-3">{t("events.header")}</h2>
          <p className="mt-4">
            <Trans i18nKey="events.line1"></Trans>
            <br /> <br />
            {t("events.line2")}
            <br /> <br />
            <Trans i18nKey="events.line3"></Trans>
            <a
              href="https://maps.app.goo.gl/FZ51H4GoESeBnnrm9"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#6347ff",
              }}
            >
              Studio Waves
            </a>
            <br /> <br />
            {t("events.line4")}
          </p>
        </div>
        <div className="col-md-6 h-md-100 d-block mx-auto pt-0 pt-md-5 ps-5 pb-5 pe-5 ps-md-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.6370603602104!2d139.71895158332833!3d35.661312674004286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b648cc9b6b5%3A0xb1de549531a5b123!2sStudio%20Waves!5e0!3m2!1sen!2sjp!4v1759828439472!5m2!1sen!2sjp"
            allowFullScreen
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

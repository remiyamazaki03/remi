import { useTranslation, Trans } from "react-i18next";

export default function Voicecoach() {
  const { t } = useTranslation();
  return (
    <div>
      <title>{t("voicecoach.tags.title")}</title>
      <meta name="description" content={t("voicecoach.tags.description")} />
      <meta property="og:title" content={t("voicecoach.tags.title")} />
      <meta
        property="og:description"
        content={t("voicecoach.tags.description")}
      />
      <link rel="canonical" href="https://chameleon-studios.com/voicecoach" />
      <h2 className="title d-flex align-items-center m-0">
        {t("voicecoach.top")}
      </h2>
      <div className="p-0 m-0">
        <div className="row content2 px-md-5 d-flex align-items-center flex-wrap">
          <div className="col-md-4">
            <img
              src="/images/freebird.png"
              alt="freedom"
              className="img-fluid p-4 d-block mx-auto img-voicecoach"
            />
          </div>
          <div className="col-md-8">
            <div>
              <div>
                <h2 className="text-center px-4 px-md-0 pt-md-5">
                  {t("voicecoach.case1")}
                </h2>
                <p className="text-md-center px-5 px-md-2 pb-4 fs-lg-5">
                  <br />
                  <Trans i18nKey="voicecoach.testimonial1"></Trans>
                  <br /> <br />
                  <Trans i18nKey="voicecoach.testimonial2"></Trans>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row content px-md-5 d-flex align-items-center flex-wrap">
          <div className="col-md-8 order-2 order-md-1">
            <div>
              <h2 className="text-center px-4 px-md-0 pt-md-5">
                {t("voicecoach.case2")}
              </h2>
              <p className="text-md-center px-5 px-md-2">
                <br />
                <Trans i18nKey="voicecoach.testimonial3"></Trans>
                <br />
                <br />
                <Trans i18nKey="voicecoach.testimonial4"></Trans>
                <br />
              </p>
              <br />
            </div>
          </div>
          <div className="col-md-4 order-1 order-md-2">
            <img
              src="/images/branchout.png"
              alt="rainbow chameleon"
              className="img-fluid p-4 d-block mx-auto img-voicecoach"
            />
          </div>
        </div>
        <div className="row px-md-5 content2 d-flex align-items-center flex-wrap">
          <div className="col-md-4">
            <img
              src="/images/unicorn.png"
              alt="show off your singing"
              className="img-fluid p-4 d-block mx-auto img-voicecoach"
            />
          </div>
          <div className="col-md-8">
            <div>
              <h2 className="text-center px-4 px-md-0 pt-md-5">
                {t("voicecoach.case3")}
              </h2>
              <p className="text-md-center px-5 px-md-2 pb-5">
                <br />
                <Trans i18nKey="voicecoach.testimonial5"></Trans>
                <br />
                <br />
                <br />
                <Trans i18nKey="voicecoach.testimonial6"></Trans>
              </p>
            </div>
          </div>
        </div>
        <div className="row pricing d-flex align-items-center" id="pricing">
          <div className="col-xl-9">
            <div>
              <h2 className="text-center pt-5 text-decoration-underline">
                {t("voicecoach.pricing")}
              </h2>
              <ul className="ps-0 py-3 px-md-5 mx-5 prices">
                <li className="mainList">
                  {t("voicecoach.price1")}
                  <ul className="subList">
                    <li>{t("voicecoach.menu1")}</li>
                    <li>{t("voicecoach.menu2")}</li>
                  </ul>
                  <br />
                </li>
                <li className="mainList">{t("voicecoach.price2")}</li>
                <ul className="subList">
                  <li>{t("voicecoach.menu3")}</li>
                  <li>
                    <small>
                      {t("voicecoach.menu4a")}
                      <a
                        href="https://wise.com/gb/currency-converter/jpy-to-usd-rate?amount=4500"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: "#6347ff",
                        }}
                      >
                        {" "}
                        {t("voicecoach.menu4link")}
                      </a>
                      {t("voicecoach.menu4b")}
                    </small>
                  </li>
                </ul>{" "}
                <br />
                <li className="mainList">
                  {t("voicecoach.price3")}
                  <ul className="subList">
                    <li>
                      <Trans i18nKey="voicecoach.menu5"></Trans>
                    </li>
                    <li>{t("voicecoach.menu6")}</li>
                  </ul>{" "}
                  <br />
                </li>
                <li className="mainList">
                  {t("voicecoach.price4")}
                  <ul className="subList">
                    <li>{t("voicecoach.menu7")}</li>
                  </ul>
                </li>
              </ul>
              <p className="text-start text-xl-center ms-md-5 ps-5 pe-2 me-5 px-md-5 pb-3 fw-bold">
                {t("voicecoach.cta.line1")}
                <br className="d-lg-none" />
                <Trans i18nKey="voicecoach.cta.line2"></Trans>
              </p>
            </div>
          </div>
          <div className="col-md-3 d-none d-xl-block"></div>
        </div>
      </div>
    </div>
  );
}

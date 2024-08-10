import { useTranslation, Trans } from "react-i18next";

export default function Voicecoach() {
  const { t } = useTranslation();
  return (
    <div>
      <h2 className="title d-flex align-items-center m-0">
        {t("voicecoach.top")}
      </h2>
      <div className="p-0 m-0">
        <div className="row py-1 px-md-5 content d-flex align-items-center">
          <div className="col-md-4 ">
            <img
              src="/images/heart.jpg"
              alt="heartbeat"
              className="img-fluid p-4 d-none d-md-block"
            />
          </div>
          <div className="col-md-8">
            <div>
              <img
                src="/images/heart.jpg"
                alt="heartbeat"
                className="img-fluid d-block mt-4 d-md-none w-25"
              />

              <h2 className="text-center pt-md-5">{t("voicecoach.case1")}</h2>
              <p className="text-md-center px-5 pb-4 fs-lg-5">
                <br />
                <Trans i18nKey="voicecoach.testimonial1"></Trans>
                <br /> <br />
                <Trans i18nKey="voicecoach.testimonial2"></Trans>
              </p>
            </div>
          </div>
        </div>
        <div className="row py-1 px-md-5 content2 d-flex align-items-center">
          <div className="col-md-8">
            <div>
              <img
                src="/images/colors.jpg"
                alt="expand your palette"
                className="img-fluid d-block mt-4 d-md-none w-25 pb-3"
              />
              <h2 className="text-center pt-md-5 px-3">
                {t("voicecoach.case2")}
              </h2>
              <p className="text-md-center px-5">
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
          <div className="col-md-4">
            <img
              src="/images/colors.jpg"
              alt="expand your palette"
              className="img-fluid p-5 d-none d-md-block"
            />
          </div>
        </div>
        <div className="row py-1 px-md-5 content d-flex align-items-center">
          <div className="col-md-4 ">
            <img
              src="/images/stage.jpg"
              alt="show off your singing"
              className="img-fluid blurry d-none d-md-block"
            />
          </div>
          <div className="col-md-8">
            <div>
              <img
                src="/images/stage.jpg"
                alt="show off your singing"
                className="img-fluid blurry d-block mt-4 d-md-none"
              />
              <h2 className="text-center pt-md-5">{t("voicecoach.case3")}</h2>
              <p className="text-md-center px-5 pb-5">
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
                    <Trans i18nKey="voicecoach.menu4"></Trans>
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

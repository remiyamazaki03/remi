import { useTranslation, Trans } from "react-i18next";

export default function Webdeveloper() {
  const { t } = useTranslation();
  return (
    <div>
      <h2 className="title m-0 d-flex align-items-center">
        {t("webdeveloper.top")}
      </h2>
      <div className="content">
        <p className="py-5 px-5 m-0 text-center fs-5">
          <Trans i18nKey="webdeveloper.content"></Trans>
        </p>
        <div className="row demo-row pb-5">
          <div className="col-lg-6 d-flex flex-column text-center">
            <div className="demo">
              <a href="https://bwave-entertainment.com" className="link">
                <h2 className="brand">
                  Bwave Entertainment {t("webdeveloper.label1")}
                </h2>

                <img
                  className="img-fluid mt-4 mb-4 demo-thumbnail d-none d-md-block"
                  src="/images/bwave-demo.png"
                  alt="bwave ホームページ デモ"
                />
                <img
                  className="img-fluid mt-4 mb-4 demo-thumbnail d-md-none"
                  src="/images/bwavemobile.jpg"
                  alt="bwave ホームページ デモ"
                />
              </a>
              <p className="pt-2">{t("webdeveloper.demo1")}</p>
            </div>
          </div>
          <div className="col-lg-6 d-flex flex-column text-center">
            <div className="demo">
              <a href="https://d-tokyo-wadaiko.com" className="link">
                <h2 className="brand">
                  <span style={{ fontStyle: "italic" }}>:D-Tokyo</span>
                  {t("webdeveloper.label2")}
                </h2>
                <img
                  className="img-fluid mt-4 mb-4 demo-thumbnail d-none d-md-block"
                  src="/images/dtokyo-demo.png"
                  alt="dtokyo ホームページ デモ"
                />
                <img
                  className="img-fluid mt-4 mb-4 demo-thumbnail d-md-none"
                  src="/images/dtokyomobile.jpg"
                  alt="dtokyo ホームページ デモ"
                />
              </a>
              <p className="pt-2">{t("webdeveloper.demo2")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

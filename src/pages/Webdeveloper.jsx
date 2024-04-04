import { useTranslation, Trans } from "react-i18next";

export default function Webdeveloper() {
  const { t } = useTranslation();
  return (
    <div>
      <h2 className="title m-0 d-flex align-items-center">
        {t("webdeveloper.top")}
      </h2>
      <p className="py-5 px-5 m-0 content2 text-center fs-5">
        <Trans i18nKey="webdeveloper.content"></Trans>
      </p>
    </div>
  );
}

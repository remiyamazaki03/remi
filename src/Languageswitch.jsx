import React from "react";
import { useTranslation } from "react-i18next";

export default function Languageswitch() {
  const { i18n } = useTranslation();
  const handleClick = () => {
    if (i18n.language === "en") {
      i18n.changeLanguage("ja");
    } else {
      i18n.changeLanguage("en");
    }
  };
  return (
    <div className="nav-link language" onClick={handleClick}>
      {i18n.language === "en" ? "日本語" : "English"}
    </div>
  );
}

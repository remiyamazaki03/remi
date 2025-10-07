import React from "react";
import { useTranslation } from "react-i18next";

export default function Languageswitch({ onClick }) {
  const { i18n } = useTranslation();
  const handleClick = () => {
    if (i18n.language === "en") {
      i18n.changeLanguage("ja");
    } else {
      i18n.changeLanguage("en");
    }
    onClick();
  };
  return (
    <div className="trans-link language" onClick={handleClick}>
      {i18n.language.startsWith("en") ? "日本語" : "English"}
    </div>
  );
}

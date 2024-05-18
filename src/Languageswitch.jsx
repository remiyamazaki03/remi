import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Languageswitch({ onClick }) {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const handleClick = () => {
    const newLanguage = i18n.language === "en" ? "ja" : "en";
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
    if (onClick) {
      onClick();
    }
  };

  useEffect(() => {
    const handleLanguageChanged = (language) => {
      setLanguage(language);
    };
    setLanguage(i18n.language);
    i18n.on("languageChanged", handleLanguageChanged);
    return () => {
      i18n.off("languageChanged", handleLanguageChanged);
    };
  }, [i18n]);

  return (
    <div className="nav-link language" onClick={handleClick}>
      {i18n.language === "en" ? "日本語" : "English"}
    </div>
  );
}

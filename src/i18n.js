import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import enNav from "./languages/en/navbar.json";
import enHome from "./languages/en/home.json";
import enAbout from "./languages/en/about.json";
import enVoicecoach from "./languages/en/voicecoach.json";
import enFooter from "./languages/en/footer.json";
import jaNav from "./languages/ja/navbar.json";
import jaHome from "./languages/ja/home.json";
import jaFooter from "./languages/ja/footer.json";

export default i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    returnObjects: true,
    resources: {
      en: {
        translation: {
          navbar: enNav,
          home: enHome,
          about: enAbout,
          voicecoach: enVoicecoach,
          footer: enFooter,
        },
      },
      ja: {
        translation: {
          navbar: jaNav,
          home: jaHome,
          footer: jaFooter,
        },
      },
    },
  });

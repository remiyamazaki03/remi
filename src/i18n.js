import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import enAbout from "./languages/en/about.json";
import enVoicecoach from "./languages/en/voicecoach.json";

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
          about: enAbout,
          voicecoach: enVoicecoach,
        },
      },
    },
  });

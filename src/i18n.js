import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import enNav from "./languages/en/navbar.json";
import enHome from "./languages/en/home.json";
import enAbout from "./languages/en/about.json";
import enVoicecoach from "./languages/en/voicecoach.json";
import enEvents from "./languages/en/events.json";
import enFooter from "./languages/en/footer.json";
import enWebdeveloper from "./languages/en/webdeveloper.json";
import jaNav from "./languages/ja/navbar.json";
import jaHome from "./languages/ja/home.json";
import jaAbout from "./languages/ja/about.json";
import jaVoicecoach from "./languages/ja/voicecoach.json";
import jaEvents from "./languages/ja/events.json";
import jaFooter from "./languages/ja/footer.json";
import jaWebdeveloper from "./languages/ja/webdeveloper.json";

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
          events: enEvents,
          webdeveloper: enWebdeveloper,
          footer: enFooter,
        },
      },
      ja: {
        translation: {
          navbar: jaNav,
          home: jaHome,
          about: jaAbout,
          voicecoach: jaVoicecoach,
          events: jaEvents,
          webdeveloper: jaWebdeveloper,
          footer: jaFooter,
        },
      },
    },
  });

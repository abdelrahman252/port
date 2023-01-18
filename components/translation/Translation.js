import i18next from "i18next";
import { initReactI18next } from "react-i18next";
// import HttpApi from "i18next-http-backend";
// import LanguageDetector from "i18next-browser-languagedetector";
import en from "../../assets/locales/en/en.json";
import fr from "../../assets/locales/fr/fr.json";
import sp from "../../assets/locales/sp/sp.json";
import gm from "../../assets/locales/gm/gm.json";
i18next
  //   .use(HttpApi)
  //   .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // supportedLngs: ["en", "ar", "fr"],
    // fallbackLng: "en",
    // debug: false,
    // // Options for language detector
    // detection: {
    //   order: ["path", "cookie", "htmlTag"],
    //   caches: ["cookie"],
    // },
    // // react: { useSuspense: false },
    // backend: {
    //   loadPath: "./assets/locales/{{lng}}/translation.json",
    // },
    resources: {
      en: {
        translation: en,
      },
      fr: {
        translation: fr,
      },
      sp: {
        translation: sp,
      },
      gm: {
        translation: gm,
      },
    },
    lng: localStorage.getItem("lng") || "en",
  });

export default i18next;

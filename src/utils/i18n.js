import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import faTranslation from "../utils/i18n/fa/fa.json";
import enTranslation from "../utils/i18n/en/en.json";

i18n.use(initReactI18next).init({
  resources: {
    fa: { translation: faTranslation },
    en: { translation: enTranslation },
  },
  lng: "fa",
  fallbackLng: "fa",
  interpolation: { escapeValue: false },
});

export default i18n;

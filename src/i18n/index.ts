import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import pl from "./locales/pl/common.json";
import en from "./locales/en/common.json";

const savedLanguage = localStorage.getItem("portfolio-language");
const initialLanguage = savedLanguage === "en" ? "en" : "pl";

i18n.use(initReactI18next).init({
  resources: {
    pl: { translation: pl },
    en: { translation: en },
  },
  lng: initialLanguage,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

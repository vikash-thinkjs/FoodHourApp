import { en } from "./en/translations";
import { hi } from "./hi/translations";

const translations = { en, hi };

export const getLocalizedText = (key, localeValue) => {
    const currTranslation = translations[localeValue] ? translations[localeValue] : en;
    const translatedText = currTranslation[key] ? currTranslation[key] : en[key] ? en[key] : key;
    return translatedText;
};

import { useStore } from "@nanostores/react";
import dayjs from "dayjs";
import "dayjs/locale/en";
import "dayjs/locale/es";
import "dayjs/locale/zh-cn";
import { map } from "nanostores";
import Polyglot from "node-polyglot";
import { useEffect } from "react";
import { settingsState } from "../store/settingsState";
import { updateSettings } from "../store/settingsState";
import { createSetter } from "../utils/nanostores";

export const polyglotState = map({
  polyglot: null,
});
const setPolyglot = createSetter(polyglotState, "polyglot");

const loadLanguage = async (language, polyglot) => {
  let phrases;
  try {
    phrases = await import(`../locales/${language}.json`);
  } catch (error) {
    phrases = await import("../locales/en-US.json");
  }

  if (!polyglot) {
    const newPolyglot = new Polyglot({
      phrases: phrases.default,
      locale: language,
    });
    setPolyglot(newPolyglot);
  } else {
    polyglot.replace(phrases.default);
    setPolyglot(polyglot);
  }
};

const useLanguage = () => {
  const { language } = useStore(settingsState);

  useEffect(() => {
    if (!language) {
      updateSettings({ language: navigator.language });
    } else {
      loadLanguage(language);

      if (language === "zh-CN") {
        dayjs.locale("zh-cn");
      } else if (language === "es" || language.startsWith("es-")) {
        dayjs.locale("es");
      } else {
        dayjs.locale("en");
      }
    }
  }, [language]);
};

export default useLanguage;

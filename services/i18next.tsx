import en from "../locales/en.json";
import ma from "../locales/ma.json";

export const languageResources: Record<
  string,
  { translation: Record<string, string> }
> = {
  en: { translation: en },
  ma: { translation: ma },
};

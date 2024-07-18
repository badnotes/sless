import { KNOWN_LANGUAGES, KNOWN_LANGUAGE_CODES } from '../consts'
export { KNOWN_LANGUAGES, KNOWN_LANGUAGE_CODES }

// 未使用
export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.blog': 'Blog',
    'nav.about': 'About',
  },
  zh: {
    'nav.home': '首页',
    'nav.blog': '博客',
    'nav.about': '关于',
  },
} as const;

export const defaultLang = 'en';
export const showDefaultLang = false;
export const langPathRegex = /\/([a-z]{2}-?[A-Z]{0,2})\//

export function getLanguageFromURL(pathname: string) {
  const langCodeMatch = pathname.match(langPathRegex)
  const langCode = langCodeMatch ? langCodeMatch[1] : 'en'
  return langCode as (typeof KNOWN_LANGUAGE_CODES)[number]
}

export function useTranslatedPath(lang: string) {
  return function translatePath(path: string, l: string = lang) {
    return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`
  }
}

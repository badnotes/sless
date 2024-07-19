// This is your config file, place any global data here.
// You can import this data from anywhere in your site by using the `import` keyword.

type Config = {
  title: string;
  description: string;
  lang: string;
  profile: {
    author: string;
    description?: string;
  }
}

type SocialLink = {
  icon: string;
  friendlyName: string; // for accessibility
  link: string;
}

export const siteConfig: Config = {
  title: "Site Less",
  description: "",
  lang: "en-GB",
  profile: {
    author: "fyme.cc",
    description: "your bio description"
  }
}

// 
// 关于网站搭建的框架技术，以及使用教程和异常解决方法。

/** 
  These are you social media links. 
  It uses https://github.com/natemoo-re/astro-icon#readme
  You can find icons @ https://icones.js.org/
*/
export const socialLinks: Array<SocialLink> = [
  {
    icon: "mdi-github",
    friendlyName: "Github",
    link: "https://github.com/badnotes/sless",
  },
  {
    icon: "mdi-linkedin",
    friendlyName: "LinkedIn",
    link: "#",
  },
  {
    icon: "mdi-email",
    friendlyName: "email",
    link: "mailto:whx10000@gmail.com",
  },
  {
    icon: "mdi-rss",
    friendlyName: "rss",
    link: "/rss.xml"
  }
];

export const NAV_LINKS: Array<{ title: string, path: string, zh: string }> = [
  {
    title: "Home",
    path: "/",
    zh: "首页",
  },
  {
    title: "Blog",
    path: "/blog",
    zh: "博客",
  },
  {
    title: "Series",
    path: '/series',
    zh: "系列"
  },
  {
    title: "About",
    path: "/about",
    zh: "关于",
  },
];

export const langConfig: Record<string, {en: string, zh: string}> = {
  "desc":{
    en: "Site less, Quickly build websites, use frameworks and themes to build static websites.",
    zh: "快速搭建网站，使用框架和主题搭建静态网站。"
  },
  "contactWords": {
    en: "You can find me on: ",
    zh: "您可以通过一下方式联系我们：",
  },
  "blogUpt": {
    en: "Last updated: ",
    zh: "更新时间: ",
  },
  "readTime": {
    en: " min read",
    zh: "分钟",
  }
}

export const KNOWN_LANGUAGES = {
  English: 'en',
  中文: 'zh'
} as const
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES)


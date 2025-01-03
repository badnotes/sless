import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { remarkReadingTime } from './src/utils/remark-reading-time.mjs';
import icon from "astro-icon";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.sless.top',
  integrations: [mdx(), sitemap(), tailwind(), icon()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
    syntaxHighlight: 'shiki',
    shikiConfig: {
      // https://docs.astro.build/en/guides/markdown-content/#syntax-highlighting
      themes: {
        light: 'catppuccin-mocha',
        dark: 'catppuccin-latte',
      },
    }
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh"]
    // locales: [
    //   {
    //     path: "en", // 不包含斜杠
    //     codes: ["en"]
    //   },
    //   {
    //     path: "zh",
    //     codes: ["zh"]
    //   }
    // ],
    // routing: {
    //     prefixDefaultLocale: true
    // }
  }
});



---
title: 'Astro native i18n implements routing for multilingual content'
description: 'Astro internationalized multilingual content routing method'
pubDate: 'Jul 23 2024'
heroImage: 
  src: '/blog-placeholder-i18n.jpg'
  alt: 'astro error'
tags: ["Astro", "Typescript", "i18n"]
updatedDate: 'Jul 22 2024'
series: "Astro"
---

According to the [official documentation](https://docs.astro.build/zh-cn/guides/internationalization/), set up the system to support multiple languages. No additional packages need to be installed.

In the i18n configuration object, a default language (defaultLocale) and a list of all supported languages (locales) must be specified.

In addition, you can configure more specific routes and fallback behaviors to match the URLs you expect.

```js
astro.config.mjs

import { defineConfig } from "astro/config"
export default defineConfig({
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh"],
  }
})
```

For specific configuration methods, please refer to the official documentation, which is already very detailed. Ordinary pages such as homepage, categories, about, etc. are no problem.

Here is a problem encountered when the blog content is in multiple languages, because static pages are fixed in the directory structure of languages first and then pages.

```bash
  <>index.astro
  + blog/
  - zh/
    <>index.astro
  + blog/
  - content/
    - blog
      + en/
      + zh/

```

Here, the blog is divided into files according to the language, resulting in the slug path including the language directory. The effect is as follows:

```bash
localhost:4321/zh/blog/zh/hello-world/
```

However, when switching languages, you can only switch to zh under the path, and the zh of the subdirectory will not change, resulting in the blog actually read still being the file of the previous language.

What to do? We can modify slug:

```ts
// blog/[...page].astro
allPosts.forEach((post) => {
  post.slug = post.slug.split('/').slice(1).join('/');
});
````

In blog filtering, only the current language is filtered, and then the language path is removed from the slug.
```ts
// blog/[slug].astro
export const getStaticPaths = (async () => {
  const blogEntries = await getAllPosts(false, 'en');
  return blogEntries.map((post) => {
    const [lang, ...slug] = post.slug.split('/');
    return { params: { lang: lang, slug: slug[0]}, props: { post, lang } };
  });
}) satisfies GetStaticPaths;
````

This way, the page path will also remove the last language directory, and the display will be more beautiful.

```bash
localhost:4321/zh/blog/hello-world/
```

In addition, other processing methods may also be considered, and we will study them later, such as whether blog posts in different languages can be placed in different collections.

Links:
- https://docs.astro.build/zh-cn/guides/internationalization/

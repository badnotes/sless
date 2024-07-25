---
title: 'Astro 原生 i18n 实现多语言内容的路由'
description: 'Astro国际化多语言内容的路由处理方法'
pubDate: 'Jul 23 2024'
heroImage: 
  src: '/blog-placeholder-i18n.jpg'
  alt: 'astro error'
tags: ["Astro", "Typescript", "i18n"]
updatedDate: 'Jul 23 2024'
series: "Astro"
---

根据[官方文档](https://docs.astro.build/zh-cn/guides/internationalization/)，设置系统支持多语言。不需要额外安装其他包。

在 i18n 配置对象中必须指定一个默认语言（defaultLocale）和所有支持的语言列表（locales）。
此外，你还可以配置更具体的路由和回退行为，以匹配你期望的 URL。

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

具体配置方式参见官方文档，已经很详细啦。普通页面如首页、分类、关于等都没问题。

这里说下博文内容在多语言时遇到的问题，因为静态页面是固定的先分语言再是页面的目录结构。

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

这里面blog又按照语言分文件了，导致 slug 路径会包含语言的目录。效果如下：

```bash
localhost:4321/zh/blog/zh/hello-world/
```

然而在切换语言的时候只能切换到跟路径下的 zh, 子目录的 zh 不会变化，导致实际读取的 blog 还是之前语言的文件。

怎么办呢，我们可以修改 slug:

```ts
  // blog/[...page].astro
  allPosts.forEach((post) => {
    post.slug = post.slug.split('/').slice(1).join('/');
  });
````

在 blog 过滤是只过滤当前语言的，然后然后的 slug 里面把语言路径去掉。
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

这样页面路径也会去掉后一个语言目录，显示跟美观。

```bash
localhost:4321/zh/blog/hello-world/
```

另外，可能也可以考虑其他处理方式，等后续再研究，比如是否可以将不同语言的博文放到不同集合。


Links:
- https://docs.astro.build/zh-cn/guides/internationalization/

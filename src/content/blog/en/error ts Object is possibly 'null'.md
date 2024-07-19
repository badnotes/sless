---
title: 'typescript error ts Object is possibly null'
description: 'Use astro build website, build error: "error ts Object is possibly null."'
pubDate: 'Jul 18 2024'
heroImage: 
  src: '/blog-placeholder-5.jpg'
  alt: 'astro error'
tags: ["typescript", "error"]
updatedDate: 'Jul 18 2024'
series: "error"
---


When I use Astro to build a website, when I use theme toggle to switch themes, I need to store the value of theme in localStorage. When building, an error of type may be empty will occur.

```bash
src/components/ThemeToggle.astro:60:3 - error ts(2531): Object is possibly 'null'.

60   document.getElementById("themeToggle").addEventListener("click", handleToggleClick);
     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
src/components/ThemeToggle.astro:50:40 - error ts(2345): Argument of type 'string | null' is not assignable to parameter of type 'string'.
  Type 'null' is not assignable to type 'string'.
```

The reason for the error is that `ts` check data may be empty:

```ts
   
  window.localStorage.setItem('theme', theme);

```

Then let's add an empty judgment:

```ts
  if (theme !== null) {
    window.localStorage.setItem('theme', theme);
  }
```

<br>

Links:
- https://www.typescriptlang.org/



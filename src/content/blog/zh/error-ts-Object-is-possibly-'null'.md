---
title: 'typescript error ts Object is possibly null'
description: '当我用 Astro 构建网站时, 出现错误: "error ts Object is possibly null."'
pubDate: 'Jul 18 2024'
heroImage: 
  src: '/blog-placeholder-error.jpg'
  alt: 'astro error'
tags: ["Typescript", "Error"]
updatedDate: 'Jul 18 2024'
series: "Error"
---


我在使用Astro构建网站时，使用 theme toggle 切换主题时，需要将theme的值存储到localStorage，build时会出现类型可能为空的错误。

```bash
src/components/ThemeToggle.astro:60:3 - error ts(2531): Object is possibly 'null'.

60   document.getElementById("themeToggle").addEventListener("click", handleToggleClick);
     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
src/components/ThemeToggle.astro:50:40 - error ts(2345): Argument of type 'string | null' is not assignable to parameter of type 'string'.
  Type 'null' is not assignable to type 'string'.
```

错误的原因是 `ts` 检查数据可能为空：

```ts
  
  window.localStorage.setItem('theme', theme);

```

那我们加一下空判断：

```ts
  if (theme !== null) {
    window.localStorage.setItem('theme', theme);
  }
```

<br>

Links:
- https://www.typescriptlang.org/

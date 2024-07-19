---
title: 'Unable to load icon by astro-icon'
description: 'Astro 工程缺失 icon: Unable to load icon by astro-icon'
pubDate: 'Jul 19 2024'
heroImage: 
  src: '/blog-placeholder-5.jpg'
  alt: 'astro error'
tags: ["Typescript", "Error", "Icon"]
updatedDate: 'Jul 19 2024'
series: "Error"
---


我的 Astro 工程在构建的时候报无法找到 icon 图表。我使用的是 astro-icon 库。

```bash
15:18:57   ├─ /blog/my-post/index.html[astro-icon] Unable to load icon "carbon:tag-group"!
Error: Unknown builtin plugin "cleanupIDs" specified.
  Stack trace:
    at file:///.../dist/chunks/index_CkwRwbc7.mjs:254:13
error: script "build" exited with code 1

```

使用 icon 时需要将其模块添加到工程依赖 `package.json`, 可以使用安装命令。

```bash
bun add -d @iconify-json/carbon
```

或者直接下载改 svg 文件放到工程目录 `src/icons`， 可以在 [iconify](https://icon-sets.iconify.design/) 下载 icon 图标。
`astro-icon` 使用起来还是挺方便的，默认可以自动导入 `mdi` 模块下的 icon, 其他模块需显示声明。



Links:
- https://icon-sets.iconify.design/
- https://github.com/natemoo-re/astro-icon
